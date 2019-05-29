
	/* Loader
	-----------------------------------------------------------------------------------*/

	$(window).on('load', function() {

		"use strict";
		// Load the page and wait 1s.
	    $('#loader').delay( 1000 ).fadeOut('slow');	

	});

$(document).ready(function() {

	"use strict";

	function setCookie(cname,cvalue,exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires=" + d.toGMTString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
	
	/* AOS
	-----------------------------------------------------------------------------------*/

	if ( $("[data-aos]").length ) {
		AOS.init();
	}

	/* Vegas Slider
	-----------------------------------------------------------------------------------*/

    if ($("#slider").length) {
    	$("#slider").vegas({
    		delay: 4000,
    		timer: true,
    		shuffle: true,
    		firstTransition: 'fade2',
    		firstTransitionDuration: 1000,
    		transition: 'fade2',
    		transitionDuration: 3000,
    		slides: [
    			//{ src: "images/portfolio_1.JPG" },
				{ src: "images/portfolio_2.jpg" },
    			{ src: "images/portfolio_3.JPG" },
    			{ src: "images/portfolio_4.JPG" },
    			{ src: "images/portfolio_5.JPG" },
    			{ src: "images/portfolio_6.JPG" },
    			{ src: "images/portfolio_7.JPG" }
    		]
    	});
    }

	/* Scroll Up
	-----------------------------------------------------------------------------------*/
	$(window).on('scroll', function(){
		if ($(this).scrollTop() > 500) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').on('click', function(){
		$("html, body").animate({ scrollTop: 0 }, 1000);
		return false;
	});

	/* Scroll To
	-----------------------------------------------------------------------------------*/

	/* activate scrollspy menu */
	$('body').scrollspy({ 
		target: '.navbar', offset:74
	});

	//$.scrollTo works EXACTLY the same way, but scrolls the whole screen
	$('.navbar-nav a').on('click', function(){ 
		$.scrollTo( 
			this.hash, 1000,
			{ offset:-73 }
		);
	});	

	$('.scroll-link').on('click', function(){ 
		$.scrollTo( 
			this.hash, 1000,
			{ offset:-73 }
		);				
	});	

	/* Simple Count Down 
	-----------------------------------------------------------------------------------*/
		
	if( $('#countdown').length ) {
		// Set the date we're counting down to
		var countDownDate = Date.parse('16 Sept 2019 10:30:00');
		
		// Update the count down every 1 second
		var x = setInterval(function() {

		  // Get todays date and time
		  var now = new Date().getTime();

		  // Find the distance between now an the count down date
		  var distance = countDownDate - now;

		  // Time calculations for days, hours, minutes and seconds
		  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		  // Display the result in the element with class="countdown"
		  document.getElementById('countdown').innerHTML = 
		  "<ul>" + 
			  "<li>" + "<h2>" + days + "</h2>" + "<h4>days</h4>" + "</li>" +
			  "<li>" + "<h2>" + hours + "</h2>" + "<h4>hours</h4>" + "</li>"+
			  "<li>" + "<h2>" + minutes + "</h2>" + "<h4>min</h4>" + "</li>"+
			  "<li>" + "<h2>" + seconds + "</h2>" + "<h4>sec</h4>"+"</li>"+			  
		  "</ul>";
		  
		  // If the count down is finished, write some text 
		  if (distance < 0) {
		  	clearInterval(x);
		  	document.getElementById('countdown').innerHTML = "EXPIRED";
		  }
		}, 1000);
	}


	/* Sticky Nav
	-----------------------------------------------------------------------------------*/
	
	$(window).on('scroll', function() {

		var sliderHeight = $("#slider").outerHeight();
		var blogHeight = $("#blog-header").outerHeight();
		var videoHeight = $("#video-bg").outerHeight();
				
		/* Full Width */
		($(window).scrollTop() > sliderHeight) ? $('#primary-navbar').addClass('affix') : $('#primary-navbar').removeClass('affix');		
		($(window).scrollTop() > blogHeight) ? $('#primary_navbar_blog').addClass('affix') : $('#primary_navbar_blog').removeClass('affix');
	
		/* Box Layouth */
		($(window).scrollTop() > sliderHeight) ? $('#primary-navbar-box').addClass('affix') : $('#primary-navbar-box').removeClass('affix');		
		($(window).scrollTop() > blogHeight) ? $('#primary_navbar_blog_box').addClass('affix') : $('#primary_navbar_blog_box').removeClass('affix');
		
		/* Video Layouth */
		($(window).scrollTop() > videoHeight) ? $('#primary-navbar-video').addClass('affix') : $('#primary-navbar-video').removeClass('affix');		
				
	});







	/* Bootstrap Collapse
	-----------------------------------------------------------------------------------*/
	
	(function() {
  
	  $(".panel").on("show.bs.collapse hide.bs.collapse", function(e) {
		if (e.type === 'show'){
		  $(this).addClass('active');
		}else{
		  $(this).removeClass('active');
		}
	  });  

	}).call(this);
	


});