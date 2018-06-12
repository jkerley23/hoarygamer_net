$('.navbar-right li').on('click', function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
});

$('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});