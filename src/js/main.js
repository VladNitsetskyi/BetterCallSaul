$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});


$( document ).ready(function() {
	$('[data-slider = "header"]').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows:false,
		fade: true,
		dots: true,
		appendDots: $('header .slider-dots'),
		autoplay: true,
  		autoplaySpeed: 2000

	});
						//Menu

	$('[data-menu = "open"]').on('click', function(){
		$(".menu").css('display', 'flex').animateCss('fadeIn');
	})
	$('[data-menu = "close"]').on('click', function(){

		$(".menu").animateCss('lightSpeedOut', () =>{
			$(".menu").css('display', 'none');
			});
		});
					//Solutions Tabs

	$('[data-tab = "button"] a' ).on('click', function(){
		$('[data-tab = "button"] a').removeClass('active');
		let num = $(this).index();
		$(this).addClass('active');

		$('[data-tab = "cont"] li').removeClass('active').eq(num).addClass('active');

		

	});	

	console.log($('[data-tab = "button"] a'))			
});


