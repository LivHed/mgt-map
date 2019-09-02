/* function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 12,
                center: {lat: 46.619261, lng: -33.13476} 
            }); */
         
            
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