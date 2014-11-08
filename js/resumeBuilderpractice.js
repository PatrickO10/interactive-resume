$("#main").append("Patrick Orth");

var age = 26;

var awesomeThoughts = " I am Patrick Orth and I am awesome";

// [string].replace([old], [new])
var funThoughts = awesomeThoughts.replace ("awesome", "fun");

$("#main").append(funThoughts);

var name = "Patrick Orth";
var role = "Web Developer";
var skills = ["Awesomeness", "Handsomeness", "Logicness", "Heartfeltness"];

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);



var bio = {
	"name" : " Patrick Orth",
	"role" : " Web Developer",
	"contacts" : {
		"mobile" : " 651-255-5555",
		"email" : " Johndoe@gmail.com",
		"github" : " johndoe",
		"twitter" : " @johndoe",
		"location" : " Minneapolis",
	},
	"welcomeMessage" : " Welcome to my resume",
	"skillz" : [" awesomeness"," Snappyness", " Crytopob", " sirax"],

	"bioPic" : "images/fry.jpg",
	"work": {
		"bank": " Teller",
		"marathon": " Summer Hire",
	},
	"education": {
		"uofm": " BA English",
		"inverhills": " AA degree",
		"normandale": " CS degree",
	}

};
var work = {};
work.position = "Laborer";
work.employer = "Dad";
work.years = "0.3";

/*var education = {};
education["name"] = "University of Minnesota";
education["years"] = "2009-2011"
education["city"] = "Minneapolis, MN USA" */
var education = {
	"schools": [
	{
	"name": "University of Minnesota",
	"city": "Minneapolis, MN USA",
	"degree": "BA",
	"major": "English"
   },
   {
   	"name": "InverHills Community College",
   	"city": "Inver Grove Heights",
   	"degree": "AA",
   	"major": "Generals:MNtransfer curriculum"
   }
  ],
  "onlineSchools": [
  {
  	"title": "Intro to Computer Science",
  	"school": "Udacity",
  	"dates": 2014,
  	"url": "https://www.udacity.com/course/cs101"
  },
  {
  	"title": "Javascript Syntax",
  	"school": "Udacity",
  	"dates": 2014,
  	"url": "https://www.udacity.com/course/ud804"
  },
  {
  	"title": "Intro to HTML and CSS",
  	"school": "Udacity",
  	"dates": 2014,
  	"url": "https://www.udacity.com/course/ud304"
  }
  ]
};
/*
$("#main").append(education.schools[0].name);
$("#main").append(education.schools[1].major);
//$("#main").append(education.name);
//$("#main").append(work["position"]);

$("#header").prepend(bio.contacts.email);
$("#header").prepend(bio.contacts.github);


$("#header").prepend(bio.bioPic);
$("#header").prepend(bio.work["marathon"]);
$("#header").prepend(bio.education.uofm);
*/
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);




