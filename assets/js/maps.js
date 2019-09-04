//init map. center set to Zagreb, zoomlevel to 3
   function initMap() {  
        var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 2,
         center: new google.maps.LatLng(45.878782, 15.983716), 
         mapTypeControl: false,
         mapTypeId: google.maps.MapTypeId.ROADMAP
        });




/* Trying to target id´s from html dropdown menu, when clicked on a city I want the map to zoom in on that city.. 
Is this the right way to make one click function for each city?  */


      google.maps.event.addListener(document.getElementById('london1'), 'click', function () {
      map.setCenter(new google.maps.LatLng(51.509865, -0.118092));
      map.setZoom(9);
});
   /*    google.maps.event.addListener(document.getElementById('stockholm2'), 'click', function () {
      map.setCenter(new google.maps.LatLng(59.330231, 18.068649));
      map.setZoom(9);
       });
}  */



//Or is it better to do it this way? but what to add to be able to zoom in on the right city?
         
     /*     map.addListener('center_changed', function() {
            map.panTo(marker.getPosition());
        });  */
        
   /*      map.addListener('center_changed', function() {
         map.panTo(marker.getPosition());
         map.setZoom(8);
        });   */

       
       
       var locations = [
          ['London', 51.509865, -0.118092],
          ['Stockholm', 59.330231, 18.068649], 
          ['Edinburgh', 55.963333, -3.187392],
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

// To loop through the locations    
      for (i = 0; i < locations.length; i++) {  
       marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });
      
      
      
      // To show infowindow with the name of the city when clicked on the marker

       google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        };
      })(marker, i));
    }
 
 
   }
  
   
   
   
      
         
         
/*         //Resets the map and all the input fields. remember to look if I have missed some input fields here..it does not mwork at the moment.  
function reset() {
 clearResults();
 $('#city')[0].selectedIndex = 0;
 $('#results-heading').innerHTML("");
 map.setZoom(2);
 map.setCenter(45.878782, 15.983716);
 place = "";
}
         */
                   
     

 
 
 
// Use this if I want a Text search function with pre chosen words in a list.  

/*  //Text search request          
  var request = {
    location: 'London',
    radius: '500',
    query: 'organic'
  };

 var service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
  

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }     */





/* map.addListener('center_changed', function() {
          // 3 seconds after the center of the map has changed, pan back to the
          // marker.
          window.setTimeout(function() {
            map.panTo(marker.getPosition());
          }, 3000);
        }); */

/*Listen for click on the map for zoom
        marker.addListener(map, 'click', function(event) {
          map.setZoom(8);
          map.setCenter(marker.getPosition());
        });


/* // Set the country restriction based on user input.
// Also center and zoom the map on the given country.
function setAutocompleteCountry() {
 var city = $('#city').val();
 if (city == 'all') {
  autocomplete.setComponentRestrictions({ 'city': [] });
  map.setCenter({ lat: 15, lng: 0 });
  map.setZoom(2);
 }
 else {
  autocomplete.setComponentRestrictions({ 'city': city });
  map.setCenter(cities[city].center);
  map.setZoom(cities[city].zoom);
 }
*/



/*what I want to be returned in the PlaceResult (info window or in the list?) 
formatted_adress 
name
types
opening_hours

  
  
         */
  

/* copied from google maps javascript api documentation, places library for Text Search request */

/*  function initialize() {
  var london = new google.maps.LatLng(51.509865, -0.118092); */

 /*   map = new google.maps.Map(document.getElementById('map'), {
      center: london,
      zoom: 4
    });  */

/*  var request = {
    location: London,
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
}      */