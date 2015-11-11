function initialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: new google.maps.LatLng(44.5403, -78.5463),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      backgroundColor: '#b9ad72'
    }
 //    stylers: [
	//   { color: "#b9ad72" }
	// ]
    var map = new google.maps.Map(mapCanvas, mapOptions);
  }
  google.maps.event.addDomListener(window, 'load', initialize);
  
$('.menu-icon').click(function(e) {
    e.stopPropagation();
    if($(this).hasClass('open')){
        $(this).removeClass('open');
        $('.nav-bar-mob').slideToggle();
    } else {
       $(this).addClass('open'); 
       $('.nav-bar-mob').slideToggle();
    }
      
});
