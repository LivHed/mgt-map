   function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 3,
         center: new google.maps.LatLng(51.509865, -0.118092),
         mapTypeControl: false,
        });
       
         /*Show markers */       
 /*   var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";   */
       
       var locations = [
          ['London', 51.509865, -0.118092],
          ['Stockholm', 41.084045, -73.874256],
          ['Edinburgh', 55.953848, -3.187799],
          ['Singapore', 1.290270, 103.851959],
          ['Vienna', 48.210033, 16.363449],
          ['Zurich', 47.376015, 8.540490],
          ['Munich', 48.135466, 11.567184],
          ['Oslo', 59.914063, 10.746723],
          ['Hong Kong', 22.302711, 114.177216],
          ['Frankfurt', 50.110924, 8.682127],
         ];   
                   
      
     
     var infowindow = new google.maps.InfoWindow();
     
     var marker, i;
     
      for (i = 0; i < locations.length; i++) {  
       marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });
      
       google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        };
      })(marker, i));
    }
    
   }     
/*     /*create markers 
    var markers = new google.maps.Marker({
          position: {lat: 51.509865, lng: -0.118092},
          map: map,
          title: 'London'
          }); */
          
  /*        var markers = locations.map(function(location, i) {   */
   /*     return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
        */
        
  
  
  
  
  
    /*    for (let i = 0; i < 10; i++);  */
        
   /*     for (var i = 0; i < labels.length; i++)
           
        

   

        
  /*  });   */
  

          
/*  var locations = [
  ['Stockholm', lat:59.334591, lng: 18.063240],
  ['Coogee Beach', -33.923036, 151.259052, 5],
  ['Cronulla Beach', -34.028249, 151.157507, 3],
  ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
  ['Maroubra Beach', -33.950198, 151.259302, 1]
];
/*   stockholm {lat:59.334591, lng: 18.063240}:
        
        position: stockholm,
        map: map,
        title: 'Stockholm'
   
       var ST_MARYS = { lat: 49.914134, lng: -6.314372 };  */
      
/*       var cities = {
 'Stockholm': {
  position: { lat: lat:59.334591, lng: 18.063240,},
  zoom: 4
 }, */




/*  var request = {
    location: london,
    radius: '500',
    query: 'organic'
  };

 var service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
*/




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
      
       
  /*     var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });
        
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
        */
        
        /*    var locations = [
        {lat: 51.509865, lng: -0.118092},  /*London*/
 //       {lat: 41.084045, lng: -73.874256}, /* Stockholm*/
 //       {lat: 55.953848, lng: -3.187799},   /*Edinbugrh*/
  //      {lat: 1.290270, lng: 103.851959},  /*Singapore*/
  //      {lat: 48.210033, lng: 16.363449},  /*Vienna*/
 //       {lat: 47.376015, lng: 8.540490},  /*Zurich*/
 //       {lat: 48.135466, lng: 11.567184},  /*Munich*/
//        {lat: 59.914063, lng: 10.746723},  /*Oslo*/
 //       {lat: 22.302711, lng: 114.177216},  /*Hong Kong*/
  //      {lat: 50.110924, lng: 8.682127},  /*Frankfurt*/
 //    ]; 
 
 /*    function initMap() {
        var myLatLng = new google.maps.LatLng(51.509865, -0.118092);  */

   /*      var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 3,
         center: new google.maps.LatLng(51.509865, -0.118092),
         
        }); */