// This is empty on purpose! Your code to build the resume will go here.


// Header section

var bio = {
  "name": "Slava Ustiuzhanin",
  "role": "Web Developer",
  "contactInfo": {
    "email": "ucheba00@gmail.com",
    "github": "https://github.com/ustiuzhanin",
    "mobile": "777 777 77 77",
    "location": "West Yellowstone, MT"
  },
  "WelcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "skills": [
    "pulvinar", "vulputate", "viverra", "malesuada", "accumsan"
  ],
  "biopic": "images/fry.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedRole);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedName);

var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
$("#header").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
$("#header").append(formattedGithub);

var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
$("#header").append(formattedMobile);

var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
$("#header").append(formattedLocation);

var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMessage);
$("#header").append(HTMLskillsStart);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBioPic);

if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  bio.skills.forEach(function(skill) {
    var formattedSkills = HTMLskills.replace("%data%", skill);
    $("#skills").append(formattedSkills);
  });
}



// var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
// var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
// var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
// var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
//
// var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMessage);
// var formattedSkills = HTMLskills.replace("%data%", bio.skills);
// var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
//
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);
//
// $("#header").append(formattedEmail);
// $("#header").append(formattedGithub);
// $("#header").append(formattedMobile);
// $("#header").append(formattedLocation);
// $("#header").append(formattedMessage);
// $("#header").append(HTMLskillsStart);
// $("#header").append(formattedSkills);
// $("#header").append(formattedBioPic);

// Work section

var work = {
  "jobs": [
    {
      "employer": "Privet",
      "title": "Poka",
      "location": "Miass, Russia",
      "dates": "2002",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
      "employer": "KakDela",
      "title": "WEDS",
      "location": "Grand Maris, MN",
      "dates": "2012",
      "description": " Fusce finibus, eros sed interdum faucibus, diam diam rhoncus arcu, vitae condimentum est libero non nisi."
    }
  ]
};

function workSection() {
  if(work.jobs.length > 0) {
    $("#workExperience").append(HTMLworkStart);
    work.jobs.forEach(function(job) {
      var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
      $(".work-entry:last").append(formattedEmployer + formattedTitle);

      var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
      $(".work-entry:last").append(formattedWorkLocation);

      var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
      $(".work-entry:last").append(formattedWorkDates);

      var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
      $(".work-entry:last").append(formattedWorkDescription);
    })
  }
}

workSection();


// for (jobs in work.jobs) {
//   $("#workExperience").append(HTMLworkStart);
//
//   var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobs].employer);
//   var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobs].title)
//   var formattedEmployerTitle = formattedEmployer + formattedTitle;
//   $(".work-entry:last").append(formattedEmployerTitle);
//
//   var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[jobs].location);
//   $(".work-entry:last").append(formattedWorkLocation);
//
//   var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[jobs].dates);
//   $(".work-entry:last").append(formattedWorkDates);
//
//   var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[jobs].description);
//   $(".work-entry:last").append(formattedWorkDescription);
// }

// Projects section

var projects = {
  "projects": [
    {
      "title": "Sample",
      "dates": "2015",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      "img": [
        "images/project1/pic1.jpg",
        "images/project1/pic2.jpg"
      ]
    },
    {
      "title": "Sample2",
      "dates": "2016",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      "img": [
        "images/project2/pic1.jpg",
        "images/project2/pic2.jpg"
      ]
    }
  ]
};

projects.display = function() {

  projects.projects.forEach(function(project){
    if(projects.projects.length > 0) {
      $("#projects").append(HTMLprojectStart);
    };

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
    $(".project-entry:last").append(formattedProjectTitle);

    var formattedProjectDate = HTMLprojectDates.replace("%data%", project.dates);
    $(".project-entry:last").append(formattedProjectDate);

    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append(formattedProjectDescription);

    if(project.img.length > 0) {
      project.img.forEach(function(img) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", img);
        $(".project-entry:last").append(formattedProjectImage);
      })
    }
  })
}

projects.display();

// Education section

var education = {
  "schools": {
    "name": "South Ural State University",
    "location": "Chelyabinsk, Russia",
    "degree": "Bachelor",
    "major": "Managment",
    "dates": "2011-2015",
    "url": "https://www.susu.ru/en"
  },
  "online coursies": {
    "title": "Front-end Nanodegree",
    "school": "Udacity",
    "dates": "2016-2017",
    "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
  }
};

// internationalize Button
$("#main").append(internationalizeButton);

// Google map

$("#mapDiv").append(googleMap);
