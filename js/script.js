$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
$(function() {
    // Owl Carousel
      let owl = $(".owl-carousel");
      owl.owlCarousel({
        center: true,
        items: 3,
        slideBy: 1,
        nav: true,
        navText: ["",""],
        loop: true,
        stagePadding: 80,
        pullDrag: true,
        margin: 300,
        autoWidth: true,
        autoHeight: false,
        responsive:{
            600:{
                items:1
            }
        }
    });
  })

