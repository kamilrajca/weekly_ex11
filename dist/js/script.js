// płynne przewijanie menu
     $('a').click(
    function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800)});

// hamburger
$(document).ready(function(){
  $('.menu-toggler').click(function(e){
    e.preventDefault();
    $('.menu').toggleClass('visible');
  });
});