// For each section I put JSON, display function, and calling the function
// because I want the code to be next to each other when working on them.

var work = {
    "jobs": [
        {
            "employer": "USBANK",
            "title": "Teller",
            "location": "9633 Lyndale Ave S, Bloomington MN",
            "dates": "2012-2013",
            "description": "Sales, customer service, control of branch money"
        },
        {
            "employer": "MARATHON PETROLEUM COMPANY (Now Northern Tier Energy)",
            "title": "Summer Hire",
            "location": "44.867259,-93.000497",
            "city": "St. Paul Park",
            "dates": ["Summer 2009", " Summer 2010"],
            "description": "general maintenance, lawn care, painting, fueling equipment/trucks"
        },
    ]
};

work.display = function() {
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
};

work.display();

var bio = {
	"name": "Patrick Orth",
	"role": "Web Developer",
	"contacts": {
    "mobile": "612-203-1916",
		"email": "patrickorth10@gmail.com",
		"github": "PatrickO10",
		"twitter": "@patrick_orth",
    "blog": "my blog",
    "linkedin": "my linkedin",
		"location": "Edina, MN"
	},
	"welcomeMessage" : " Welcome to my resume",
	"skills" : ["Javascript", "HTML", "CSS", "Python"],
	"bioPic" : "images/profilepic.jpg"
};

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName + formattedRole);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLinkedin + formattedBlog + formattedLocation);
    $("#footerContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedLinkedin + formattedTwitter + formattedLocation);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);
    $("#header").append(HTMLskillsStart);
    if (bio.skills.length > 0) {
      for (var skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    }
  }
};

bio.display();

// Projects 
var projects = {
    "projects" : [
    {
      "title": "Interactive Resume",
      "dates": "2014",
      "description": "Learned Javascript and how to use it with HTML and CSS",
      "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
    },
    {
    "title": "Mock Portfolio",
    "dates": "2014",
    "description": "Learned HTML and CSS by creating a responsive website.",
    "images": ["images/mockimg (2).png", "images/mockimg.png", "images/mockcodeimg.png"]
    },
    {
      "title": "CS101 project",
      "dates": "2014",
      "description": "Learned python while building a social network",
      "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
    }
  ]
};

projects.display = function() {
    for (var project in projects.projects) {
     $("#projects").append(HTMLprojectStart);
     var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
     $(".project-entry:last").append(formattedProjectTitle);
     var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
     $(".project-entry:last").append(formattedProjectDates);
     var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
     $(".project-entry:last").append(formattedProjectDescription);

     if (projects.projects[project].images.length > 0) {
      for (var image in projects.projects[project].images) {
       var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]); 
       $(".project-entry:last").append(formattedImage);
    }

        }
 
    }
};

projects.display();


var education = {
  "schools": [
    {
  "name": "University of Minnesota",
  "city": "Minneapolis, MN",
  "location": "University of Minnesota, Minneapolis, MN 55455",
  "degree": "BA",
  "major": "English",
  "minor": "Japanese",
  "dates": "2009-2011",
  "url": "http://www.umn.edu"
   },
  {
    "name": "Normandale Community College",
    "city": "Bloomington, MN",
    "location": "9710 County Rd 17 Bloomington, Minnesota, Bloomington, MN",
    "geoLocation": "44.828827,-93.3294897",
    "degree": "CS degree",
    "major": "Computer Science",
    "dates": "2014-current",
    "url": "http://www.normandale.edu"
  },
   {
    "name": "Inver Hills Community College",
    "city": "Inver Grove Heights, MN",
    "location": "Inver Hills Community College, Inver Grove Heights, MN",
    "degree": "AA",
    "major": "Generals:MNtransfer curriculum",
    "dates": "2006-2008",
    "url": "https://inverhills.edu/"
   }
  ],
  "onlineSchools": [
  {
    "title": "Intro to Computer Science",
    "school": "Udacity",
    "dates": "2014",
    "url": "https://www.udacity.com/course/cs101",
    "description": "Used python to learn how to build a search engine"
  },
  {
    "title": "Javascript Syntax",
    "school": "Udacity",
    "dates": "2014",
    "url": "https://www.udacity.com/course/ud804",
    "description": "Learned Javascript Basics"
  },
  {
    "title": "Intro to HTML and CSS",
    "school": "Udacity",
    "dates": "2014",
    "url": "https://www.udacity.com/course/ud304",
    "description": "Learned web responsiveness"
  }
  ]
};

education.display = function() {
  // schools
  for (var school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedName =  HTMLschoolName.replace("%data%",education.schools[school].name);
    formattedName = formattedName.replace("%url%",education.schools[school].url);
    $(".education-entry:last").append(formattedName);
    var formattedDegree =  HTMLschoolDegree.replace("%data%",education.schools[school].degree);
    $(".education-entry:last").append(formattedDegree);
    var formattedDates =  HTMLschoolDates.replace("%data%",education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedLocation =  HTMLschoolLocation.replace("%data%",education.schools[school].city);
    $(".education-entry:last").append(formattedLocation);
    var formattedMajor =  HTMLschoolMajor.replace("%data%",education.schools[school].major);
    // if the object doesn't have a minor then it will skip to major
    if (education.schools[school].minor) {
      var formattedMinor =  HTMLschoolMinor.replace("%data%",education.schools[school].minor);
      var formattedMajorMinor = formattedMajor + formattedMinor;
      $(".education-entry:last").append(formattedMajorMinor);
    }
    else {
      $(".education-entry:last").append(formattedMajor);
    }
  };
  // onlineSchools
  $(".education-entry:last").append(HTMLonlineClasses);
  for (var school in education.onlineSchools) {
    var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineSchools[school].title);
    $(".education-entry:last").append(formattedTitle);
    var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineSchools[school].school);
    $(".education-entry:last").append(formattedSchool);
    var formattedDates = HTMLonlineDates.replace("%data%",education.onlineSchools[school].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedDescription = HTMLonlineDescription.replace("%data%", education.onlineSchools[school].description);
    $(".education-entry:last").append(formattedDescription);
  }
};

education.display();

function inName(name) {
    name = name.split(" ")
    console.log(name);
    name[1] = name[1].toUpperCase(); 
    name[0] = name[0][0].toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}


$("#name").append(internationalizeButton);

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

$("#mapDiv").append(googleMap);

//testing
/*
function initializePano() {
  // var fenway = new google.maps.LatLng(42.345573, -71.098326);
  var fenway = new google.maps.LatLng(address);

  var panoramaOptions = {
    position: fenway,
    pov: {
      heading: 34,
      pitch: 10
    }
  };
  var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), panoramaOptions);
  map.setStreetView(panorama);
}
*/
//google.maps.event.addDomListener(window, 'load', initializePano); 

//var map;
//var berkeley = new google.maps.LatLng(44.828827,-93.3294897);
/*
var sv = new google.maps.StreetViewService();

var panorama;

function initializePano() {

  panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'));

  // Set up the map
  /*
  var mapOptions = {
    center: berkeley,
    zoom: 16,
    streetViewControl: false
  };
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  */

  // getPanoramaByLocation will return the nearest pano when the
  // given radius is 50 meters or less.
  /*
  google.maps.event.addListener(map, 'click', function(event) {
      sv.getPanoramaByLocation(event.latLng, 50, processSVData);
  });
}

function processSVData(data, status) {
  if (status == google.maps.StreetViewStatus.OK) {
    var marker = new google.maps.Marker({
      position: data.location.latLng,
      map: map,
      title: data.location.description
    });

    panorama.setPano(data.location.pano);
    panorama.setPov({
      heading: 270,
      pitch: 0
    });
    panorama.setVisible(true);

    google.maps.event.addListener(marker, 'click', function() {

      var markerPanoID = data.location.pano;
      // Set the Pano to use the passed panoID
      panorama.setPano(markerPanoID);
      panorama.setPov({
        heading: 270,
        pitch: 0
      });
      panorama.setVisible(true);
    });
  } else {
    alert('Street View data not found for this location.');
  }
}

//google.maps.event.addDomListener(window, 'load', initializePano); */

function svBackground(address) {
  // streetviewUrl gets the url where the streetview is located
  var streetviewUrl = 'https://maps.googleapis.com/maps/api/streetview?size=640x400&location=' + address + '&pitch=-0.76' + '';
  console.log(streetviewUrl);
  var formattedImg = HTMLmapbgImg.replace('%data%', streetviewUrl); // replaces data
  $('body').append(formattedImg); // appends it to body
}