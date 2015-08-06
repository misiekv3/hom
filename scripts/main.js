// Sticky header bg color animation

$(document).ready(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
	$("#sticky-header").addClass("blue-bg");
	} else {
		$("#sticky-header").removeClass("blue-bg");
	}
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
	$("#sticky-header").addClass("blue-bg");
	} else {
		$("#sticky-header").removeClass("blue-bg");
	}
});


// Owl Carousels

$(document).ready(function() {

	var owl = $("#gallery-slider");

	  owl.owlCarousel({
		  items : 1, //1 item above 1000px browser width
		  itemsDesktop : [1000,1], //1 item between 1000px and 901px
		  itemsDesktopSmall : [900,1], // 1 item betweem 900px and 601px
		  itemsTablet: [768,1], //1 item between 600 and 0
		  itemsMobile : [480,1], // itemsMobile disabled - inherit from itemsTablet option
		  navigation : true,
		  pagination : false
	  });
	  
	  // Custom Navigation Events
	  $("#next").click(function(){
		owl.trigger('owl.next');
	  })
	  $("#back").click(function(){
		owl.trigger('owl.prev');
	  })
	  
	   $("#header-slider").owlCarousel({
		  items : 1, //1 item above 1000px browser width
		  itemsDesktop : [1000,1], //1 item between 1000px and 901px
		  itemsDesktopSmall : [900,1], // 1 item betweem 900px and 601px
		  itemsTablet: [768,1], //1 item between 600 and 0
		  itemsMobile : [480,1], // itemsMobile disabled - inherit from itemsTablet option
		  navigation : false,
		  autoPlay   : 4000,
		  pagination : false
	  });
});

// Owl navigation arrows 

jQuery(document).ready(function($){
	var $whatever=$(".container");
	var marginright=($(window).width()-($whatever.offset().left+$whatever.outerWidth())+15);
		var marginleft=($(window).width()-($whatever.offset().left+$whatever.outerWidth())+15);

	$("#navigation #back").attr('style','left:'+marginleft+'px !important');
	$("#navigation #next").attr('style','right:'+marginright+'px !important');

	$(window).resize(function(){
		var $whatever=$(".container");
		var marginright=($(window).width()-($whatever.offset().left+$whatever.outerWidth())+15);
		var marginleft=($(window).width()-($whatever.offset().left+$whatever.outerWidth())+15);
	
		$("#navigation #back").attr('style','left:'+marginleft+'px !important');
		$("#navigation #next").attr('style','right:'+marginright+'px !important');
	});	
});

// Responsive menu
	
$(function(){	
	var dropdown = 'hidden';
	
	$(document).ready(function() {
		$('#burger').click(function() { 
			if (dropdown == 'hidden'){
				$('#sticky-header .col-xs-12').fadeIn();
				$('body').addClass("menu-responsive-open");
				$('#menu').addClass("menu-menu-responsive-open");
				$('#burger').fadeOut();
				$('#x-close').fadeIn();
				dropdown = 'visible';
			}
		 });
		 
		 $('#x-close').click(function() { 
			if (dropdown == 'visible'){
				$('#sticky-header .col-xs-12').fadeOut();
				$('body').removeClass("menu-responsive-open");
				$('#burger').fadeIn();
				$('#x-close').fadeOut();
				$('#menu').removeClass("menu-menu-responsive-open");
				dropdown = 'hidden';
			}
		 });
	});
	
	$('#menu.menu-menu-responsive-open ul li a').click(function() { 
		if (dropdown = 'visible') {
			$('#sticky-header .col-xs-12').fadeOut();
			$('body').removeClass("menu-responsive-open");
			$('#x-close').fadeOut();
			$('#burger').fadeIn();
			dropdown = 'hidden';
		}
	});
});

// Active hover menu

jQuery(window).bind('scroll resize', function() {	
	var currentSection = null;
	
	jQuery('.section').each(function(){
		var element = jQuery(this).attr('id');	
		if (jQuery('#'+element).is('*')){
			if(jQuery(window).scrollTop() >= jQuery('#'+element).offset().top - 100)
			{
				currentSection = element;
			}
		}
	});
		
	jQuery('#sticky-header ul li').removeClass('active').find('a[href="#'+currentSection+'"]').parent().addClass('active');		
});

// Perfect location section

jQuery( document ).ready(function( $ ) {
	
	var $whatever = $(".container");
	var paddingLeft = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()) + 15);

	$("#step-into").attr('style', 'padding-left:' + paddingLeft + 'px !important');

	$(window).resize(function() {
		var $whatever = $(".container");
		var paddingLeft = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()) + 15);

		$("#step-into").attr('style', 'padding-left:' + paddingLeft + 'px !important');
	});
});	

jQuery( document ).ready(function( $ ) {

	$(".photo").css({'height':($("#location").height()+200+'px')});
	
	$(window).resize(function() {
		$(".photo").css({'height':($("#location").height()+200+'px')});
	});
});
