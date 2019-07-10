//For popup responsive image


$(document).ready(function(){
    $('.popoverimage').click(function(event){
      event.preventDefault();
      $('.modal img').attr('src', $(this).attr('href'));
      $('.modal').modal('show');
    })   

});
