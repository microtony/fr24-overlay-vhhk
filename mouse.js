(function() {
  var hko = new google.maps.LatLng(22.3, 114.17);
  google.maps.event.addListener(map, 'mousemove', function(e) {
    var mousepos = e.latLng;
    var dist = Math.round(google.maps.geometry.spherical.computeDistanceBetween(mousepos, hko) / 1000);
    var bearing = Math.round(google.maps.geometry.spherical.computeHeading(mousepos, hko) + 180);
    if (bearing < 10) {
      bearing = '00' + bearing;
    } else if (bearing < 100) {
      bearing = '0' + bearing;
    }
    $('#mousepos').html(mousepos.lat().toFixed(2) + ", " + mousepos.lng().toFixed(2);// + ' (' +  dist + 'km / ' + bearing + '°)');
  });
})();