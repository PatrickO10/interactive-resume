/*

This file contains all of the code running in the background that makes resumeBuilder.js possible.
 We call these helper functions 
because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course.
 You won't need to make any changes to it until you 
start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = "<h1 id='name'>%data%</h1>";
var HTMLheaderRole = "<span class='white-text'>%data%</span><hr/>";

var HTMLcontactGeneric = "<li class='flex-item'><span class='white-text'>%contact%</span><span class='light-teal-text'>%data%</span></li>";
var HTMLmobile = "<li class='flex-item'><span class='white-text'><i class='ion-android-call'></i> mobile</span><a href='tel: +1-612-203-1916' class='contacts-a'><span class='light-teal-text'>%data%</span></a></li>";
var HTMLemail = "<li class='flex-item'><span class='white-text'><i class='ion-email'></i> email</span><a href='mailto:patrickorth10@gmail.com' class='contacts-a'><span class='light-teal-text'>%data%</span></a></li>";
var HTMLtwitter = "<li class='flex-item'><span class='white-text'><a href='%data%' class='contacts-a'><i class='ion-social-twitter'></i> twitter</a></span></li>";
var HTMLgithub = "<li class='flex-item'><span class='white-text'><a href='%data%' class='contacts-a'><i class='ion-social-github'></i> github</a></span></li>";
var HTMLblog = "<li class='flex-item'><span class='white-text'><a href='%data%' class='contacts-a'><i class='ion-android-book'></i> blog</a></span></li>";
var HTMLlocation = "<li class='flex-item'><span class='white-text' class='contacts-a'><i class='ion-map'></i> location</span><span class='light-teal-text'>%data%</span></li>";
var HTMLlinkedin = "<li class='flex-item'><span class='white-text'><a href='%data%' class='contacts-a'><i class='ion-social-linkedin'></i> linkedIn</a></span></li>";


var HTMLbioPic = "<img src='%data%' class='biopic'>";
var HTMLWelcomeMsg = "<span class='welcome-message'>%data%</span>";

var HTMLskillsStart = "<h3 id='skillsH3'>Skills at a Glance:</h3><ul id='skills' class='flex-box'></ul>";
var HTMLskills = "<li class='flex-item-skills'><span class='light-teal-text'>%data%</span></li>"; // changed it to flex-item-skills so it wouldn't have the hover

var HTMLworkStart = "<div class='work-entry'></div>";
var HTMLworkEmployer = "<a href='%url%' class='text-large'>%data%";
var HTMLworkTitle = " - %data%</a>";
var HTMLworkDates = "<div class='date-text'>%data%</div>";
var HTMLworkLocation = "<div class='location-text'>%data%</div>";
var HTMLworkDescription = "<p class='text-medium'><br>%data%</p>";

var HTMLprojectStart = "<div class='project-entry'></div>";
var HTMLprojectTitle = "<a href='%url%' class='text-large'>%data%</a>";
var HTMLprojectDates = "<div class='date-text'>%data%</div>";
var HTMLprojectDescription = "<p><br>%data%</p>";
var HTMLprojectImage = "<img src='%data%' class='img-content' alt='project image content'>";

var HTMLschoolStart = "<div class='education-entry'></div>";
var HTMLschoolUniversity = "<h3>University and Colleges Attended</h3>";
var HTMLschoolName = "<a href='%url%' class='text-large'>%data%";
var HTMLschoolDegree = " --  %data%</a>";
var HTMLschoolDates = "<div class='date-text'>%data%</div>";
var HTMLschoolLocation = "<div class='location-text'>%data%</div>";
var HTMLschoolMajor = "<em><br>Major: %data%</em>";
var HTMLschoolMinor = "<em><br>Minor: %data%</em>";  // added minor


var HTMLonlineClasses = "<h3>Online Classes</h3>";
var HTMLonlineTitle = "<a href='%url%' class='text-large'>%data%";
var HTMLonlineSchool = " - %data%</a>";
var HTMLonlineDates = "<div class='date-text'>%data%</div>";
var HTMLonlineDescription = "<p><br>%data%</p>"

var internationalizeButton = "<button>Internationalize</button>";
var googleMap = "<div id='map'></div>";
var HTMLmapbgImg = "<img class='mapbgimg' src='%data%' alt='map background image'>"; // var that will add background image to mapDiv


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this 
helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName('Patrick Orth') || function(){};
    $('#name').html(iName);  
  });
})


/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      "x": x,
      "y": y
    }
  );
  console.log("x location: " + x + "; y location: " + y);
}

$(document).click(function(loc) {
  // your code goes here!
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});


var map; // declares a global map variable
var panorama; // declares a global panorama variable
var eventLoc; // declares a global eventLoc variable
var panoID; // declares a global panoID variable


/*
Start here! initializeMap() is called when page is loaded.
*/

function initializeMap() {
  var sv = new google.maps.StreetViewService();


  var mapOptions = {
    scrollwheel: false,
    disableDefaultUI: true
  };


  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  /*
  svBackground(address) sets the background of a streetview when you click on a pin, 
  appending it to the body.
  */
  function svBackground() {
    // streetviewUrl gets the url where the streetview is located
    var streetviewUrl = 'https://maps.googleapis.com/maps/api/streetview?size=640x400&pano=' + panoID + '&pitch=-0.76' + '';
    console.log(streetviewUrl);
    var formattedImg = HTMLmapbgImg.replace('%data%', streetviewUrl); // replaces data
    $('body').append(formattedImg); // appends it to body
  }

  /*
  processSVData(data, status) makes sure there is a streetview. If so, it sets 
  the pano and settings; otherwise, it recursively goes through until it finds one.
  */
  function processSVData(data, status) {
    if (status == google.maps.StreetViewStatus.OK) {
      var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'));
      panorama.setPano(data.location.pano); // Sets the panorama to the unique pano id
      panoID = data.location.pano;  // Changes the panoID to the unique pano id that was clicked
      svBackground();   // Calls the svBackground function.
      panorama.setPov({
        heading: 25,
        pitch: -0.76
      });
      panorama.setVisible(true);
      if (meters != 50) {
        alert('Street View data not found for this location, but here is a Street View data ' + meters + ' meters near it.');
      }
    } else {
        meters = meters + 50; // increases the meters to search wider.
        sv.getPanoramaByLocation(eventLoc, meters, processSVData);
    }
  }


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.

  I added a background image and a streetview panorama map when you click on a pin.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.k; // latitude from the place service
    var lon = placeData.geometry.location.B; // longitude from the place service
    var name = placeData.formatted_address; // name of the place from the place service
    var bounds = window.mapBounds; // current boundaries of the map window
    //var address = lat + ',' + lon; // lat/lng for google maps background image
    var pinImg = 'images/Map-Marker-Ball-Azure-icon.png'; // Image for the pins

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      icon: pinImg,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });


    // hmmmm, I wonder what this is about...
    // getPanoramaByLocation will return the nearest pano when the
    // given radius is 50 meters or less.
    google.maps.event.addListener(marker, 'click', function(event) {
      infoWindow.open(map, marker);
      eventLoc = event.latLng; // gives the latlng of where user clicked
      meters = 50;
      sv.getPanoramaByLocation(eventLoc, meters, processSVData);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0])
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */

  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      }

      // Actually searches the Google Maps API for location data and runs the callback 
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }
  

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

};

/*
Uncomment all the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window 
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});

