
// -----------------------------------------------------  LOADING
/*
window.onload=function() {
    document.getElementById('loading-mask').style.display='none';
}
*/
jQuery(document).ready(function(){

// -----------------------------------------------------  NAV MOVEMENT
	$("nav").sticky({ topSpacing: 0});
	
// -----------------------------------------------------  FANCYBOX	
	$('.fancybox').fancybox();
	
	
// -----------------------------------------------------  PAGE SCROLL	
	$('#nav').onePageNav();
	
	
// -----------------------------------------------------  HEADER & SLIDER - HEIGHT
	function header() {
		var windowHeight=$(window).height() - 80;
		var header = $("#header");
		var slider = $(".slider");
		header.css("height",windowHeight+"px");
		slider.css("height",windowHeight+"px");

	}
	header();
	 
	$(window).resize(function(){
		header();
	});
	
	
// -----------------------------------------------------  ABOUT > IDEA > ICONS

	$("span.icons").hide();
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 800) {			
			$("span.icons").first().show(250, function showNext() {
				$(this).next("span.icons").show(250, showNext);
			});
		}
		
		if ($(this).scrollTop() > 1100) {
			$("div.approach-line").animate({width:"940px"}, 10000);
			$("div.approach1").animate({opacity:1}, 2000, function(){
				$("div.approach2").animate({opacity:1}, 2000, function(){
					$("div.approach3").animate({opacity:1}, 2000, function(){
						$("div.approach4").animate({opacity:1}, 2000);
					});	
				});
			});
		}
	});

		
// -----------------------------------------------------  SERVICE SPIN
	/*
	var cssPrefix = false, tezlik;
	
	if (jQuery.browser.mozilla) { cssPrefix = "moz"; tezlik = 1;    }
	if (jQuery.browser.msie)    { cssPrefix = "ms"; tezlik = 0;	    }
	if (jQuery.browser.safari)  { cssPrefix = "webkit"; tezlik = 1; }
	if (jQuery.browser.opera)   { cssPrefix = "o"; tezlik = 10;      }
	if (jQuery.browser.webkit)  { cssPrefix = "webkit";	tezlik = 1; }
	
	
	$(function() {
		if(cssPrefix) {
		  
		  var rays = document.getElementById("rays"), degrees = 0, speed = 0.05;
		  setInterval(function() {
			degrees += speed; // degree adjustment each interval
			rays.setAttribute("style","-" + cssPrefix + "-transform:rotate(" + degrees + "deg)");
		  },tezlik);
		  
		  var ser1 = document.getElementById("ser1"), degree = 0, speeds = -0.05;
		  var ser2 = document.getElementById("ser2");
		  var ser3 = document.getElementById("ser3");
		  var ser4 = document.getElementById("ser4");
		  var ser5 = document.getElementById("ser5");
		  var ser6 = document.getElementById("ser6");
		  setInterval(function() {
			degree += speeds; // degree adjustment each interval
			ser1.setAttribute("style","-" + cssPrefix + "-transform:rotate(" + degree + "deg)");
			ser2.setAttribute("style","-" + cssPrefix + "-transform:rotate(" + degree + "deg)");
			ser3.setAttribute("style","-" + cssPrefix + "-transform:rotate(" + degree + "deg)");
			ser4.setAttribute("style","-" + cssPrefix + "-transform:rotate(" + degree + "deg)");
			ser5.setAttribute("style","-" + cssPrefix + "-transform:rotate(" + degree + "deg)");
			ser6.setAttribute("style","-" + cssPrefix + "-transform:rotate(" + degree + "deg)");
		  },tezlik);
		}
	});
	*/
	
});


// -----------------------------------------------------  HEADER SLIDER
$(function($){
		
	$.supersized({
	
		// Functionality
		slide_interval          :   5000,		// Length between transitions
		transition              :   4, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		:	500,		// Speed of transition
												   
		// Components							
		slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		slides 					:  	[			// Slideshow Images
											{image : 'img/slider/5.jpg'},
											{image : 'img/slider/1.jpg'},
											{image : 'img/slider/2.jpg'},
											{image : 'img/slider/3.jpg'},
											{image : 'img/slider/4.jpg'}
									]
		
	});
});	

// ----------------------------------------------------  CONTACT FORM
function submitForm(){
	
    if(document.forms["contactForm"]["name"].value == ""){
        alert("Name must be filled out");
        document.forms["contactForm"]["name"].focus();
        return false;
    }else if(document.forms["contactForm"]["phone"].value == ""){
        alert("Phone must be filled out");
        document.forms["contactForm"]["phone"].focus();
        return false;    	
    }else if(document.forms["contactForm"]["message"].value == ""){
        alert("Message must be filled out");
        document.forms["contactForm"]["message"].focus();
        return false;    	
    }else{
    	//contact form send email start
    	var formData = {
    		'name':$('#name').val(),
    		'phone':$('#phone').val(),
    		'email':$('#email').val(),
    		'message':$('#message').val(),
    	};
    	
    	//console.log(formData);
    	
		$.ajax({
			type: 'POST',
			url: 'contact/contact.php',
			data: formData,
			beforeSend: function(){
				$("#contactFormButton").addClass("disableSendButton");
			},
			complete: function(){
				$("#contactFormButton").removeClass("disableSendButton");
			},
			dataType: 'json',
			encode: true
		}) // end ajax
			
		.done(function(data){
			//console.log(data.message);
			var successMessage = data.message;
    		$('#successMessage').empty();
    		$('#successMessage').append(successMessage);
    		
    		$('#name').val('');
    		$('#phone').val('');
    		$('#email').val('');
    		$('#message').val('');    		
	 
		});    	
    	//contact form send email end
    	
    }
}	

// -----------------------------------------------------  GOOGLE MAP		
jQuery(document).ready(function(){ 
	var myLatlng = new google.maps.LatLng(31.58061981201172,74.38059997558594);
	var myOptions = {
	  center: myLatlng,
	  zoom: 15,
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  scrollwheel: false
	};
	var map = new google.maps.Map(document.getElementById("map"),  myOptions);
	var marker = new google.maps.Marker({
	  position: myLatlng,
	  map: map,
	  title:"SIDDIQUE AND SONS"
	});
	
	var infowindow = new google.maps.InfoWindow({});
	
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent("SIDDIQUE AND SONS"); //sets the content of your global infowindow to string "Tests: "
		infowindow.open(map,marker); //then opens the infowindow at the marker
	});
	marker.setMap(map);
});