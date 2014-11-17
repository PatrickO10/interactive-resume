// For each section I put JSON, display function, and then called the function
// because I want the code to be next to each other when working on them.

var work = {
    "jobs": [
        {
            "employer": "USBANK",
            "title": "Teller",
            "location": "9633 Lyndale Ave S, Bloomington MN",
            "url": "http://www.usbank.com",
            "dates": "2012-2013",
            "description": "Sales, customer service, control of branch money"
        },
        {
            "employer": "MARATHON PETROLEUM COMPANY (Now Northern Tier Energy)",
            "title": "Summer Hire",
            "location": "459 3rd St, St Paul Park, MN 55071",
            "city": "St. Paul Park",
            "url": "http://www.ntenergy.com/",
            "dates": ["Summer 2009", " Summer 2010"],
            "description": "general maintenance, lawn care, painting, fueling equipment/trucks"
        },
    ]
};

work.display = function() {
  $("#workExperience").append(HTMLworkStart);
  for (var job in work.jobs) {
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    formattedEmployer = formattedEmployer.replace("%url%",work.jobs[job].url);
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
		"github": "https://github.com/PatrickO10",
		"twitter": "https://twitter.com/patrick_orth",
    "blog": "http://findingthingsout.blogspot.com/",
    "linkedin": "https://www.linkedin.com/pub/patrick-orth/97/91a/221",
		"location": "Edina, MN"
	},
	"welcomeMessage" : " Welcome to my resume. I love learning new things, taking on new challenges, and exploring new roads.",
	"skills" : ["Javascript", "HTML", "CSS", "Python"],
	"bioPic" : "images/profilepic1.jpg"
};

bio.display = function() {
    var formattedRole = HTMLnameRoleRole.replace("%data%", bio.role);
    var formattedName = HTMLnameRoleName.replace("%data%", bio.name);
    var formattednameRoleMobile = HTMLnameRoleMobile.replace("%data%", bio.contacts.mobile);
    var formattednameRoleEmail = HTMLnameRoleEmail.replace("%data%", bio.contacts.email);
    $("#main").prepend(formattedName + formattedRole + formattednameRoleMobile + formattednameRoleEmail);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLinkedin + formattedBlog + formattedLocation);
    $("#footerContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedLinkedin + formattedTwitter);
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
      "description": "Learned Javascript, JSON, AJAX, and how to use them with HTML and CSS",
      "url": "http://patricko10.github.io",
      "images": ["images/interactiveresumeimg1.png", "images/interactiveresumeimg.png", "images/interactiveresumecert.png"]
    },
    {
    "title": "Mock Portfolio",
    "dates": "2014",
    "description": "Learned HTML and CSS by creating a responsive website.",
    "url": "http://patricko10.github.io",
    "images": ["images/mockimg (2).png", "images/mockimg.png", "images/mockimg3.png"]
    },
    {
      "title": "CS101 project",
      "dates": "2014",
      "description": "Learned python while building a social network",
      "url": "https://www.udacity.com/course/cs101",
      "images": ["images/pythonimg1.png", "images/pythonimg2.png", "images/pythonimg3.png"]
    }
  ]
};

projects.display = function() {
    for (var project in projects.projects) {
     $("#projects").append(HTMLprojectStart);
     var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
     formattedProjectTitle = formattedProjectTitle.replace("%url%", projects.projects[project].url);
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
    "location": "Normandale Community College, Bloomington, MN",
    "degree": "CS Classes",
    "major": "Computer Science",
    "dates": "2014",
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
    "title": "JavaScript Basics",
    "school": "Udacity",
    "dates": "2014",
    "url": "https://www.udacity.com/course/ud804",
    "description": "Learned JavaScript fundamentals while building my interactive resume"
  },
  {
    "title": "Intro to HTML and CSS",
    "school": "Udacity",
    "dates": "2014",
    "url": "https://www.udacity.com/course/ud304",
    "description": "Learned how to approach page layout, how to break down a design mockup into page elements, and how to implement that in HTML and CSS."
  },
  {
    "title": "Intro to Computer Science",
    "school": "Udacity",
    "dates": "2014",
    "url": "https://www.udacity.com/course/cs101",
    "description": "Learned python to build a search engine and a social network"
  }
  ]
};

education.display = function() {
  $("#education").append(HTMLschoolStart);
  // onlineSchools
  $(".education-entry:last").append(HTMLonlineClasses);
  for (var school in education.onlineSchools) {
    var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineSchools[school].title);
    formattedTitle = formattedTitle.replace("%url%", education.onlineSchools[school].url);
    $(".education-entry:last").append(formattedTitle);
    var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineSchools[school].school);
    $(".education-entry:last").append(formattedSchool);
    var formattedDates = HTMLonlineDates.replace("%data%",education.onlineSchools[school].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedDescription = HTMLonlineDescription.replace("%data%", education.onlineSchools[school].description);
    $(".education-entry:last").append(formattedDescription);
  };
  // schools
  $(".education-entry:last").append(HTMLschoolUniversity);
  for (var school in education.schools) {
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
  }
};

education.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

$("#mapDiv").append(googleMap);