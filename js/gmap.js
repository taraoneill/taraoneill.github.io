$(document).ready(function(){

var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('tnmap'), {
      center: {lat:35.7144 ,lng:-83.5114},
      zoom:13
    })
  }

});