(function() {
var waypoints = {};
waypoints.app = {};
waypoints.app.LIMES = new google.maps.LatLng(22.107111, 113.775722);
waypoints.app.TONIC = new google.maps.LatLng(22.2133, 113.722736);
waypoints.app.CEDAR = new google.maps.LatLng(22.270153, 113.7717);
waypoints.app.RW07L = new google.maps.LatLng(22.310917, 113.897967);
waypoints.app.STELA = new google.maps.LatLng(22.198136, 113.730308);
waypoints.app.VH720 = new google.maps.LatLng(22.25165, 113.760989);
waypoints.app.RW07R = new google.maps.LatLng(22.296675, 113.899444);

var routes = {};
routes.app = {};
routes.app.RWY07L = new google.maps.Polyline({
  path: [waypoints.app.LIMES, waypoints.app.TONIC, waypoints.app.CEDAR, waypoints.app.RW07L],
  map: map, strokeColor: '#FFFFFF', strokeOpacity: 0.6, strokeWeight: 1});
routes.app.RWY07R = new google.maps.Polyline({
  path: [waypoints.app.STELA, waypoints.app.VH720, waypoints.app.RW07R],
  map: map, strokeColor: '#FFFFFF', strokeOpacity: 0.6, strokeWeight: 1});
alert('loaded!');
})();

// waypoints.app. = new google.maps.LatLng(, );
