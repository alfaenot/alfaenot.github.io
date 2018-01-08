// Подсчет начальной и конечной точек кривой
function polar_to_cartesian(centerX, centerY, radius, angle_in_degrees) {
  var angle_in_radians = (angle_in_degrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angle_in_radians)),
    y: centerY + (radius * Math.sin(angle_in_radians))
  };
}

// Подсчет передаваемых в тег path параметров кривой
function describe_arc(x, y, radius, start_angle, end_angle){
    var start = polar_to_cartesian(x, y, radius, end_angle);
    var end = polar_to_cartesian(x, y, radius, start_angle);
    var arc_sweep = end_angle - start_angle <= 180 ? "0" : "1";
    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, arc_sweep, 0, end.x, end.y
    ].join(" ");

    return d;
}

// Отрисовывает все найденные диаграммы
function draw_circle_diagram(){

  var $circle_diagrams = document.getElementsByClassName('circle-diagram');

  for (var $i = 0; $i < $circle_diagrams.length; $i++){
    var $svg_width    = $circle_diagrams[$i].getAttribute("width");
    var $svg_height   = $circle_diagrams[$i].getAttribute("height");
    var $stroke_color = $circle_diagrams[$i].getAttribute("data-stroke-color");
    var $stroke_width = $circle_diagrams[$i].getAttribute("data-stroke-width");
    var $radius       = parseInt(($svg_height/2) - ($stroke_width / 2),10);
    var $path         = $circle_diagrams[$i].querySelector('.circle-diagram__arc');
    var $text         = $circle_diagrams[$i].querySelector('.circle-diagram__text');
    var $percent      = $circle_diagrams[$i].getAttribute("data-percent");
    
    if($percent < 0) 
      $percent = 0;
    if($percent < 100 && $percent >= 0) 
      $path.setAttribute("d", describe_arc($svg_width/2, $svg_height/2, ($svg_height/2) - ($stroke_width / 2), 0, (360*$percent)/100));
    if($percent >= 100) {
      $path.setAttribute("d", "M "+$svg_width/2+", "+$svg_height/2+" m -"+$radius+", 0 a "+$radius+","+$radius+" 0 1,0 "+$radius*2+",0 a "+$radius+","+$radius+" 0 1,0 -"+$radius*2+",0"); // это выдаст окружность
      $percent = 100;
    }

    $path.setAttribute("stroke", $stroke_color);
    $path.setAttribute("stroke-width", $stroke_width);
    
    $text.textContent = $percent;
    $text.setAttribute("y", $svg_height/2 + 4);
    
    console.log($text);
  }
}

draw_circle_diagram();


//сщртировка таблицы--

    var grid = document.getElementById('grid');

    grid.onclick = function(e) {
      if (e.target.tagName != 'TH') return;

      // Если TH -- сортируем
      sortGrid(e.target.cellIndex, e.target.getAttribute('data-type'));
    };

    function sortGrid(colNum, type) {
      var tbody = grid.getElementsByTagName('tbody')[0];

      // Составить массив из TR
      var rowsArray = [].slice.call(tbody.rows);

      // определить функцию сравнения, в зависимости от типа
      var compare;

      switch (type) {
        case 'string':
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML;
          };
          break;
      }

      // сортировать
      rowsArray.sort(compare);

      // Убрать tbody из большого DOM документа для лучшей производительности
      grid.removeChild(tbody);

      // добавить результат в нужном порядке в TBODY
      // они автоматически будут убраны со старых мест и вставлены в правильном порядке
      for (var i = 0; i < rowsArray.length; i++) {
        tbody.appendChild(rowsArray[i]);
      }

      grid.appendChild(tbody);
    }

//m-navigation--

  $(function(){
    var link = $('.burger');
    var menu = $('.m-navigation');
    var close = $('.close');
    link.on('click', function(event){
      event.preventDefault();
      menu.toggleClass('m-navigation__active')
    });
    close.on('click', function(event){
      event.preventDefault();
      menu.toggleClass('m-navigation__active')
    });
  });

