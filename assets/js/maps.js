var map;
var service;
var infowindow;

function initMap() {
  var london = new google.maps.LatLng(51.509865, -0.118092);

  map = new google.maps.Map(document.getElementById('map'), {
      center: london,
      zoom: 3
    });

  var request = {
    location: london,
    radius: '500',
    query: 'organic'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }


}


/* var map;
 var service;    
 var infowindow;
     
     /* center of the map is located in Zagreb, and zoom level is set to 3 */
      
/*      function initMap() {
         map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 45.878782, lng: 15.983716},
          zoom: 3
        }); 
      
   

/* copied from google maps javascript api documentation, places library for Text Search request */

/*  function initialize() {
  var london = new google.maps.LatLng(51.509865, -0.118092); */

 /*   map = new google.maps.Map(document.getElementById('map'), {
      center: london,
      zoom: 4
    });  */

/*  var request = {
    location: london,
    radius: '500',
    query: 'organic'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}
}      
*/


     /*Show markers */       
 /*          var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
           
           var locations = [{     /*this map method here is a built-in JavaScript method. Don't get it confused with the Google Map that we're working with. comment from the teacher in the video*/
   /*            lat: 40.785091,
                lng: -73.968285
            }, {
                lat: 41.084045,
                lng: -73.874256
            }, {
                lat: 40.754932,
                lng: -73.984016
            }];         /*Example of places, add others later
            
            
             var markers = locations.map(function(location, i) {  /*check out lesson 5 in google maps section, to understand the details and adjust for my needs*/
     /*           return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length] /*The reason for using the %operator is so that if we have more than 26 locations, then it will loop around to the start of our string again and go from Z back to A, instead of throwing an error.*/
      /*          });
            }); */
          
  /*        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});   /*This adds a marker clusterer to the map*/  
            
      /*  } */
      
      
       /*     var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
       
       var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });
        
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
        
      var locations = [
        {lat: 51.509865, lng: -0.118092}, /*London, how do I add the title to the marker? change the rest below to my own cities */
        
  /*      {lat: -31.563910, lng: 147.154312},
        {lat: -33.718234, lng: 150.363181},
        {lat: -33.727111, lng: 150.371124},
        {lat: -33.848588, lng: 151.209834},
        {lat: -33.851702, lng: 151.216968},
        {lat: -34.671264, lng: 150.863657},
        {lat: -35.304724, lng: 148.662905},
        {lat: -36.817685, lng: 175.699196},
        {lat: -36.828611, lng: 175.790222},
        {lat: -37.750000, lng: 145.116667},
        {lat: -37.759859, lng: 145.128708},
        {lat: -37.765015, lng: 145.133858},
        {lat: -37.770104, lng: 145.143299},
        {lat: -37.773700, lng: 145.145187},
        {lat: -37.774785, lng: 145.137978},
        {lat: -37.819616, lng: 144.968119},
        {lat: -38.330766, lng: 144.695692},
        {lat: -39.927193, lng: 175.053218},
        {lat: -41.330162, lng: 174.865694},
        {lat: -42.734358, lng: 147.439506},
        {lat: -42.734358, lng: 147.501315},
        {lat: -42.735258, lng: 147.438000},
        {lat: -43.999792, lng: 170.463352}
      ]
      */