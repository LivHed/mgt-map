//var markers = [];
//var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'; //change beachflag later
var map;
//var infowindow;

//Init map. center set to London
function initMap() {
     var london = {lat: 51.509865, lng: -0.118092};
     map = new google.maps.Map(document.getElementById('map'), {
        center: london,
        zoom: 13
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
    function citymap(city, zoom) {
        map.setCenter(new google.maps.LatLng(locations[city.value][0], locations[city.value][1]));
        map.setZoom(zoom);
    }
    
    city.addEventListener("change", function() {
        console.log(city.value);
        citymap(city, 14);

/*        if (city.value == "london") {
            console.log(locations.london);
            map.setCenter(new google.maps.LatLng(locations.london[0], locations.london[1]));
            map.setZoom(14);
        }

        if (city.value == "stockholm") {
            console.log(locations.stockholm);
            map.setCenter(new google.maps.LatLng(locations.stockholm[0], locations.stockholm[1]));
            map.setZoom(14);
        }

        if (city.value == "edinburgh") {
            console.log(locations.edinburgh);
            map.setCenter(new google.maps.LatLng(locations.edinburgh[0], locations.edinburgh[1]));
            map.setZoom(14);
        }

        if (city.value == "singapore") {
            console.log(locations.singapore);
            map.setCenter(new google.maps.LatLng(locations.singapore[0], locations.singapore[1]));
            map.setZoom(14);
        }

        if (city.value == "vienna") {
            console.log(locations.vienna);
            map.setCenter(new google.maps.LatLng(locations.vienna[0], locations.vienna[1]));
            map.setZoom(14);
        }

        if (city.value == "zurich") {
            console.log(locations.zurich);
            map.setCenter(new google.maps.LatLng(locations.zurich[0], locations.zurich[1]));
            map.setZoom(14);
        }

        if (city.value == "munich") {
            console.log(locations.munich);
            map.setCenter(new google.maps.LatLng(locations.munich[0], locations.munich[1]));
            map.setZoom(14);
        }

        if (city.value == "oslo") {
            console.log(locations.oslo);
            map.setCenter(new google.maps.LatLng(locations.oslo[0], locations.oslo[1]));
            map.setZoom(14);
        }

        if (city.value == "hongkong") {
            console.log(locations.hongkong);
            map.setCenter(new google.maps.LatLng(locations.hongkong[0], locations.hongkong[1]));
            map.setZoom(14);
        }

        if (city.value == "frankfurt") {
            console.log(locations.frankfurt);
            map.setCenter(new google.maps.LatLng(locations.frankfurt[0], locations.frankfurt[1]));
            map.setZoom(14);
        }

    });  */
    

// Create the places service.
        var service = new google.maps.places.PlacesService(map);
        var getNextPage = null;
        var moreButton = document.getElementById('more');
        moreButton.onclick = function() {
          moreButton.disabled = true;
          if (getNextPage) getNextPage();
        };

        // Perform a nearby search.
        service.nearbySearch(
            {location: locations, radius: 900, type: ['restaurants']},
            function(results, status, pagination) {
              if (status !== 'OK') return;

              createMarkers(results);
              moreButton.disabled = !pagination.hasNextPage;
              getNextPage = pagination.hasNextPage && function() {
                pagination.nextPage();
              };
            });
      
      
     
      function createMarkers(places) {
        var bounds = new google.maps.LatLngBounds();
        var placesList = document.getElementById('places');

        for (var i = 0, place; place = places[i]; i++) {
          var image = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
          };

          var marker = new google.maps.Marker({
            map: map,
            icon: image,
            title: place.name,
            position: place.geometry.location
          });

          var li = document.createElement('li');
          li.textContent = place.name;
          placesList.appendChild(li);

          bounds.extend(place.geometry.location);
        }
        map.fitBounds(bounds);
      }
      


/*    var infoWindow = new google.maps.InfoWindow({
        content: document.getElementById('info-content')
    });   */
    



 // When the user selects a city that have been zoomed in to, as the code above works for, I click one of the radiobuttons(for restaurants or accommodation in my case),
 // and with this code below hopefully when clicking on a radiobutton the search function will be called and the places(restaurants or accommodations) 
 //will show with markers on the map, within the viewport. And hopefully show in the table-list below the map. 
 // this is a code-snippet from the autocomplete-example from google maps api doc, already slightly modified. 
 // how do I change the autocomplete to my needs? and how do I call the search fucntion?

 /*      function onPlaceChanged() {
        var place = search.getPlace();
        if (place.geometry) {
          map.panTo(place.geometry.location);
          map.setZoom(14);
          search();
        } else {
          document.getElementById('searchPlaces');
        }
      } */
 /*     function search() {  
        var search = {
          radius: 5000,
          type: ['lodging']
        };
       }   */

//Target accommodations and restaurants with the name SearchBy to check if it´s true when clicked on. 
/*    places = new google.maps.places.PlacesService(map); */
  
    var places = document.getElementById("searchPlaces");
    places.addEventListener("click", function(onPlaceChanged) {

        var accommodation = document.getElementsByName("searchBy")[0].checked;
        
        var restaurants = document.getElementsByName("searchBy")[1].checked;

        if (accommodation) {
            console.log(places);
            
        }
    });
            
 /*      function search() {  
        var search = {
          radius: 5000,
          type: ['lodging']
        };
       } */
    /*    }  */
        
   /*     places.nearbySearch(search, function(results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    clearResults();
                    clearMarkers();    
                }  
                });   */
                
                // Create a marker for each hotel found, and
            // assign a letter of the alphabetic to each marker icon.
/*            for (var i = 0; i < results.length; i++) {
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
            
            function clearMarkers() {
        for (var i = 0; i < markers.length; i++) {
          if (markers[i]) {
            markers[i].setMap(null);
          }
        }
        markers = [];
      }
       }  
      
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




// maybe not needed?
/*        infowindow = new google.maps.InfoWindow();
            places = new google.maps.places.PlacesService(map);
            places.nearbySearch(request, callback); 
        */
            
        
    
        


//Use later on when the first function works..
 /*       if (restaurants ) {
            console.log(places);
            search = new google.maps.LatLng('restaurant');
        }
    
*/



        // Search for hotels and restaurants in the selected cities.
         
  /*       function searchHotels() {
             var search = {
                location: 'city',
                radius: 5000,
                types: ['lodging']
            };   */
         
         
            
  /*           function searchReastaurants () {
            var search = {
                location: 'city',
                radius: 5000,
                types: ['restaurant']
            }; 
              */
              
                





 /*                       // Use marker animation to drop the icons incrementally on the map.
                        markers[i] = new google.maps.Marker({
                            position: results[i].geometry.location,
                            animation: google.maps.Animation.DROP,
                            icon: markerIcon
                        });
        }
*/



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



/*    function addResult(result, i) {
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
    }*/
/*
    function clearResults() {
        var results = document.getElementById('results');
        while (results.childNodes[0]) {
            results.removeChild(results.childNodes[0]);
        }
    }
*/


    // Get the place details for a hotel. Show the information in an info window,
    // anchored on the marker for the hotel that the user selected.
/*    function showInfoWindow() {
        var marker = this;
        places.getDetails({ placeId: marker.placeResult.place_id },
            function(place, status) {
                if (status !== google.maps.places.PlacesServiceStatus.OK) {
                    return;
                }
                infoWindow.open(map, marker);
                buildIWContent(place);
            });
    } */

/*
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
        }
        else {
            document.getElementById('iw-phone-row').style.display = 'none';
        } 
  }      */
    });
}