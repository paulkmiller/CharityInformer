$(document).ready(function() {
	  $("#owl-charities").owlCarousel({
	 

		//Basic Speeds
    slideSpeed : 300,
    paginationSpeed : 650,
 
    //Autoplay
    autoPlay : true,
    goToFirst : true,
    goToFirstSpeed : 1000,
 
    // Responsive 
    responsive: true,
    items : 5,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsMobile : [479,1],
 

	});
});