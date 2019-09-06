var places, search, infoWindow;
    var markers = [];
    var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'; //change beachflag later

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
    };

    /* Target cities to zoom in on them when clicked on, in the dropdown menu  */
    var city = document.getElementById("city");
    city.addEventListener("change", function() {
        console.log(city.value);

        if (city.value == "london") {
            console.log(locations.london);
            map.setCenter(new google.maps.LatLng(locations.london[0], locations.london[1]));
            map.setZoom(10);
        }

        if (city.value == "stockholm") {
            console.log(locations.stockholm);
            map.setCenter(new google.maps.LatLng(locations.stockholm[0], locations.stockholm[1]));
            map.setZoom(10);
        }
        
        if (city.value == "edinburgh") {
            console.log(locations.edinburgh);
            map.setCenter(new google.maps.LatLng(locations.edinburgh[0], locations.edinburgh[1]));
            map.setZoom(11);
        }    
        
        if (city.value == "singapore") {
            console.log(locations.singapore);
            map.setCenter(new google.maps.LatLng(locations.singapore[0], locations.singapore[1]));
            map.setZoom(11);
        }
        
        if (city.value == "vienna") {
            console.log(locations.vienna);
            map.setCenter(new google.maps.LatLng(locations.vienna[0], locations.vienna[1]));
            map.setZoom(11);
        }
        
        if (city.value == "zurich") {
            console.log(locations.zurich);
            map.setCenter(new google.maps.LatLng(locations.zurich[0], locations.zurich[1]));
            map.setZoom(11);
        }
        
        if (city.value == "munich") {
            console.log(locations.munich);
            map.setCenter(new google.maps.LatLng(locations.munich[0], locations.munich[1]));
            map.setZoom(11);
        }
        
         if (city.value == "oslo") {
            console.log(locations.oslo);
            map.setCenter(new google.maps.LatLng(locations.oslo[0], locations.oslo[1]));
            map.setZoom(11);
        }
        
        if (city.value == "hongkong") {
            console.log(locations.hongkong);
            map.setCenter(new google.maps.LatLng(locations.hongkong[0], locations.hongkong[1]));
            map.setZoom(11);
        }
        
        if (city.value == "frankfurt") {
            console.log(locations.frankfurt);
            map.setCenter(new google.maps.LatLng(locations.frankfurt[0], locations.frankfurt[1]));
            map.setZoom(10);
        }
        
    });
    


 infoWindow = new google.maps.InfoWindow({
          content: document.getElementById('info-content')
        });
        



// This code snippet works! adjust it to my needs below

/* const accommodation = document.getElementById('accommodationRadio'); 

// Add a handler for the 'click' event by providing a callback function.
// Whenever the element is clicked, a pop-up with "Element clicked!" will
// appear.

accommodation.addEventListener('click', function (event) {
  alert('Element clicked through function!');
});  */



const accommodationRadio = document.getElementById('accommodationRadio');
   accommodationRadio.addEventListener('click', function (search) {
  console.log('accommodation');
  
  // Search for hotels in the selected city, within the viewport of the map.
  function search() {
   search = {
          bounds: map.getBounds(),
          types: ['lodging']
        };
        
         places.nearbySearch(search, function(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();
            
            // Create a marker for each hotel found, and
            // assign a letter of the alphabetic to each marker icon.
            for (var i = 0; i < results.length; i++) {
              var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
              var markerIcon = MARKER_PATH + markerLetter + '.png';
              
               // Use marker animation to drop the icons incrementally on the map.
              markers[i] = new google.maps.Marker({
                position: results[i].geometry.location,
                animation: google.maps.Animation.DROP,
                icon: markerIcon
              });
              
              // If the user clicks a hotel marker, show the details of that hotel
              // in an info window.
              markers[i].placeResult = results[i];
              google.maps.event.addListener(markers[i], 'click', showInfoWindow);
              setTimeout(dropMarker(i), i * 100);
              addResult(results[i], i);
            }
          }
  
});
}


function clearMarkers() {
        for (var i = 0; i < markers.length; i++) {
          if (markers[i]) {
            markers[i].setMap(null);
          }
        }
        markers = [];
      } 
});



/*
//maybe not needed, since I now have the code with infoWindow example from google maps api doc
    var infowindow = new google.maps.InfoWindow();
    var marker, i;

    // To loop through the locations    
    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][0], locations[i][1]),
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
    */
    
    
    
     function addResult(result, i) {
        var results = document.getElementById('results');
        var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
        var markerIcon = MARKER_PATH + markerLetter + '.png';

        var tr = document.createElement('tr');
        tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
        tr.onclick = function() {
          google.maps.event.trigger(markers[i], 'click');
        };

        var iconTd = document.createElement('td');
        var nameTd = document.createElement('td');
        var icon = document.createElement('img');
        icon.src = markerIcon;
        icon.setAttribute('class', 'placeIcon');
        icon.setAttribute('className', 'placeIcon');
        var name = document.createTextNode(result.name);
        iconTd.appendChild(icon);
        nameTd.appendChild(name);
        tr.appendChild(iconTd);
        tr.appendChild(nameTd);
        results.appendChild(tr);
      }

      function clearResults() {
        var results = document.getElementById('results');
        while (results.childNodes[0]) {
          results.removeChild(results.childNodes[0]);
        }
      }



 // Get the place details for a hotel. Show the information in an info window,
      // anchored on the marker for the hotel that the user selected.
      function showInfoWindow() {
        var marker = this;
        places.getDetails({placeId: marker.placeResult.place_id},
            function(place, status) {
              if (status !== google.maps.places.PlacesServiceStatus.OK) {
                return;
              }
              infoWindow.open(map, marker);
              buildIWContent(place);
            });
      }   


      // Load the place information into the HTML elements used by the info window.
      function buildIWContent(place) {
        document.getElementById('iw-icon').innerHTML = '<img class="hotelIcon" ' +
            'src="' + place.icon + '"/>';
        document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
            '">' + place.name + '</a></b>';
        document.getElementById('iw-address').textContent = place.vicinity;

        if (place.formatted_phone_number) {
          document.getElementById('iw-phone-row').style.display = '';
          document.getElementById('iw-phone').textContent =
              place.formatted_phone_number;
        } else {
          document.getElementById('iw-phone-row').style.display = 'none';
        }    
 } 
}