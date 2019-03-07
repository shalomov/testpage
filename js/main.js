$(document).ready(function(){

    $('.search-btn').click(function(){
        $('body').addClass('hidden')
        $('.search-popup').fadeIn(500);
    });
    
    $('.close-bnt').click(function(){
        $('.search-popup').fadeOut(500);
        $('body').removeClass('hidden')
    });


    $('.contact-link').click(function(event){
        event.preventDefault()
        $('body').addClass('hidden')
        $('.contactus-popup').fadeIn(500);
    });

    $('.contactclose-bnt').click(function(){
        $('.contactus-popup').fadeOut(500);
        $('body').removeClass('hidden')
    });

    $('.top-slider').owlCarousel({
        items:1,
        autoplay:true,
        autoplayTimeout: 5000,
        loop:true,
        animateOut: 'fadeOut',
        dots: false,
    });

    $(".contactus-btn").click(function(event) {

        var form = $("#contact-form")
    
        if (form[0].checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        
        form.addClass('was-validated');

    });
    


});