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
    $('#container').highcharts({
    chart: {
	    plotBackgroundColor: null,
	    plotShadow: false
    },
    title: {
      text: 'Charity Name Expense Report, 2014'
    },
    credits: {
   		enabled: false
  	},
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          }
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Charity Expenses',
      data: [
          ['Charity Objective',  	  	179,835,191],
          ['Admin & Overhead',     		  2,733,144],
          ['Marketing & Fundraising',	 24,435,335],
      ]

    }]
  });
});

