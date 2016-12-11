(function ($) {
  "use strict";

  //Run function when document ready
  $(document).ready(function () {
	initialize();
  });

  
  
  
  	function initialize() {
    var latlng = new google.maps.LatLng(40.703383,-74.012796);
    var myOptions = {
        zoom: 15,
        center: latlng,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"),
            myOptions);

	  var marker = new google.maps.Marker({
		position: {lat: 40.703383, lng: -74.012796},
		map: map
	  });
	}
	
	google.maps.event.addDomListener(window, "load", initialize);
	

	
	})(jQuery);