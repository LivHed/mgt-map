var map;
var z = 12; // zoom level
var loc = { lat: 51.509865, lng: -0.118092 };
var search_for = [];
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

//Init map. center set to London
 function initMap() {
    map = new google.maps.Map(document.getElementById('map'), { center: loc, zoom: z });
}

// Target cities to zoom in on them when clicked on.
var city = document.getElementById("city");

function citymap(city, zoom) {
    map.setCenter(new google.maps.LatLng(locations[city.value][0], locations[city.value][1]));
    map.setZoom(zoom);
}

city.addEventListener("change", function() {
    console.log(city.value);
    citymap(city, z);
     $('input[type="radio"]').prop('checked', false);  //unselect the radiobuttons when choosing another city in the dropdown menu.
     $("#places").empty();    //empty the result list when changing city.
});



// Search for hotels or restaurants depending on which radiobutton is checked. 
$("#searchPlaces").click(function() {

    if ($("#accomodationRadio").is(':checked')) {
        search_for = ['lodging'];

    }
    else if ($("#restaurantRadio").is(':checked')) {
        search_for = ['restaurant'];
    }
    
    $('input[name=searchBy]:checked').val();   // To return the value (show icons on the map) only from the selected radiobutton.
    getExtScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDdUZr-tm7Rmc-0meyJj_jH3VtTzk7FBaU&libraries=places&callback=initMap2");
    loc = { lat: locations[city.value][0], lng: locations[city.value][1] };
     
});


function getExtScript(url) { 
    var js_script = document.createElement('script');
    js_script.type = "text/javascript";
    js_script.src = url;
    js_script.async = true;
    document.getElementsByTagName('head')[0].appendChild(js_script);
}

//

function initMap2() {

    // Create the map. 
    map = new google.maps.Map(document.getElementById('map'), { center: loc, zoom: z });

    // Create the places service. Code sample for nearbySearch from Google maps Javascript API, from this page https://developers.google.com/maps/documentation/javascript/examples/place-search-pagination
    var service = new google.maps.places.PlacesService(map);
    var getNextPage = null;
    var moreButton = document.getElementById('more');
    moreButton.onclick = function() {
        moreButton.disabled = true;
        if (getNextPage) getNextPage();
    };

    // Perform a nearby search.
    service.nearbySearch({ location: loc, radius: 600, type: search_for },
        function(results, status, pagination) {
            if (status !== 'OK') return;

            createMarkers(results);
            moreButton.disabled = !pagination.hasNextPage;
            getNextPage = pagination.hasNextPage && function() {
                pagination.nextPage();
            };
        }
    );
}



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
