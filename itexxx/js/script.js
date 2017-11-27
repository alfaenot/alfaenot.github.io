//slider

$('.slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
});

//accordion 

$('#info').click(function(){  
    $(this).toggleClass('active');      
    $(this).next('p').slideToggle(200); 
});

$('#characteristics').click(function(){ 
    $(this).toggleClass('active');      
    $(this).next('ul').slideToggle(200);  
});


//radio

$("input").on('click', function(){
    if($("#radio-1").is(":checked")){
        $("#out").html("125.000 P.");
    }
    else if($("#radio-2").is(":checked")){
        $("#out").html("150.000 P.");
    }
    else if($("#radio-3").is(":checked")){
        $("#out").html("200.000 P.");
    }
})

//todo

$(document).ready(function(){
    $('#add').click(function(){
        var toAdd = $('#item').val();
        $('#add__container').append('<li>' + toAdd + '</li>');
    });
   
    $("#item").keyup(function(event){
        if(event.keyCode == 13){
            $("#add").click();
        }         
  });
  
$(document).on('dblclick','li', function(){
    $(this).toggleClass('strike').fadeOut('slow');    
});
  
    $('#remove').click(function() {
         $('input').val('');
    });
});