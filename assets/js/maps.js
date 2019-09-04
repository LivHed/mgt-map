//init map. center set to Zagreb
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: new google.maps.LatLng(45.878782, 15.983716),
        mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var locations = {
        'london': [51.509865, -0.118092],
        'stockholm': [59.330231, 18.068649],
        'edinburgh': [55.963333, -3.187392],
        'singapore': [1.290270, 103.851959],
        'vienna': [48.210033, 16.363449],
        'zurich': [47.376015, 8.540490],
        'munich': [48.135466, 11.567184],
        'oslo': [59.914063, 10.746723],
        'hongkong': [22.302711, 114.177216],
        'frankfurt': [50.110924, 8.682127]
    }

    /* Target ciities for zoom in on them when clicked on in the dropdown menu  */
    var city = document.getElementById("city");
    city.addEventListener("change", function() {
        console.log(city.value)

        if (city.value == "london") {
            console.log(locations.london);
            map.setCenter(new google.maps.LatLng(locations.london[0], locations.london[1]));
            map.setZoom(9);
        }

        if (city.value == "stockholm") {
            console.log(locations.stockholm);
            map.setCenter(new google.maps.LatLng(locations.stockholm[0], locations.stockholm[1]));
            map.setZoom(9);
        }
        
        if (city.value == "edinburgh") {
            console.log(locations.edinburgh);
            map.setCenter(new google.maps.LatLng(locations.edinburgh[0], locations.edinburgh[1]));
            map.setZoom(9);
        }    
        
        if (city.value == "singapore") {
            console.log(locations.singapore);
            map.setCenter(new google.maps.LatLng(locations.singapore[0], locations.singapore[1]));
            map.setZoom(9);
        }
        
        if (city.value == "vienna") {
            console.log(locations.vienna);
            map.setCenter(new google.maps.LatLng(locations.vienna[0], locations.vienna[1]));
            map.setZoom(9);
        }
        
        if (city.value == "zurich") {
            console.log(locations.zurich);
            map.setCenter(new google.maps.LatLng(locations.zurich[0], locations.zurich[1]));
            map.setZoom(9);
        }
        
        if (city.value == "munich") {
            console.log(locations.munich);
            map.setCenter(new google.maps.LatLng(locations.munich[0], locations.munich[1]));
            map.setZoom(9);
        }
        
         if (city.value == "oslo") {
            console.log(locations.oslo);
            map.setCenter(new google.maps.LatLng(locations.oslo[0], locations.oslo[1]));
            map.setZoom(9);
        }
        
        if (city.value == "hongkong") {
            console.log(locations.hongkong);
            map.setCenter(new google.maps.LatLng(locations.hongkong[0], locations.hongkong[1]));
            map.setZoom(9);
        }
        
        if (city.value == "frankfurt") {
            console.log(locations.frankfurt);
            map.setCenter(new google.maps.LatLng(locations.frankfurt[0], locations.frankfurt[1]));
            map.setZoom(9);
        }
        
    });




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
}*/
