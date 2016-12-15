// This is empty on purpose! Your code to build the resume will go here.
// Header section
var bio = {
    "name": "Slava Ustiuzhanin",
    "role": "Web Developer",
    "contacts": {
        "mobile": "777 777 77 77",
        "email": "ucheba00@gmail.com",
        "github": "https://github.com/ustiuzhanin",
        "location": "West Yellowstone, MT"
    },
    "welcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "skills": [
        "HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"
    ],
    "biopic": "images/fry.jpg"
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName, formattedRole);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedContacts = formattedMobile + formattedEmail + formattedGithub + formattedLocation;
    $("#topContacts, #footerContacts").append(formattedContacts);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedBioPic, formattedMessage);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkills = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkills);
        });
    }

};

bio.display();

// Work section

var work = {
    "jobs": [{
        "employer": "Privet",
        "title": "Poka",
        "location": "Miass, Russia",
        "dates": "2002",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    }, {
        "employer": "KakDela",
        "title": "WEDS",
        "location": "Grand Maris, MN",
        "dates": "2012",
        "description": " Fusce finibus, eros sed interdum faucibus, diam diam rhoncus arcu, vitae condimentum est libero non nisi."
    }]
};

work.display = function() {

    if (work.jobs.length > 0) {
        $("#workExperience").append(HTMLworkStart);

        work.jobs.forEach(function(job) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedWorkDates + formattedWorkLocation + formattedWorkDescription);
        });
    }
};

work.display();

// Projects section

var projects = {
    "projects": [{
        "title": "Sample",
        "dates": "2015",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "images": [
            "images/project1/pic1.jpg",
            "images/project1/pic2.jpg"
        ]
    }, {
        "title": "Sample2",
        "dates": "2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "images": [
            "images/project2/pic1.jpg",
            "images/project2/pic2.jpg"
        ]
    }]
};

projects.display = function() {

    projects.projects.forEach(function(project) {

        if (projects.projects.length > 0) {
            $("#projects").append(HTMLprojectStart);
        }

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedProjectDate = HTMLprojectDates.replace("%data%", project.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedProjectTitle + formattedProjectDate + formattedProjectDescription);

        project.images.forEach(function(img) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", img);
            $(".project-entry:last").append(formattedProjectImage);
        });

    });
};

projects.display();

// Education section

var education = {
    "schools": [{
        "name": "South Ural State University",
        "location": "Chelyabinsk, Russia",
        "degree": "Bachelor",
        "majors": ["Managment"],
        "dates": "2011-2015",
        "url": "https://www.susu.ru/en"
    }, {
        "name": "Lorem ipsum dolor sit amet",
        "location": "Auckland, New Zeland",
        "degree": "Bachelor",
        "majors": ["Ipsum", "Lorem"],
        "dates": "2008 - 2012",
        "url": "http://www.aucklandnz.com/"
    }],
    "onlineCourses": [{
        "title": "Front-end Nanodegree",
        "school": "Udacity",
        "dates": "2016-2017",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }, {
        "title": "Lorem Web Developer",
        "school": "Codeschool",
        "dates": "2015",
        "url": "https://lipsum.com"
    }]
};


education.display = function() {

    //schools

    education.schools.forEach(function(school) {

        if (education.schools.length > 0) {
            $("#education").append(HTMLschoolStart);
        }

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
        var formattedSchooldDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchooldDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchooldMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedSchoolName + formattedSchooldDegree + formattedSchooldDates + formattedSchoolLocation + formattedSchooldMajor);
    });

    //online coursies

    education.onlineCourses.forEach(function(course) {

        if (education.onlineCourses.length > 0) {
            $(".education-entry:last").append(HTMLonlineClasses);

            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
            var formattedOnlineUrl = HTMLonlineURL.replace("%data%", course.url).replace("#", course.url);
            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineUrl);
        }
    });
};

education.display();

// internationalize Button
$("#main").append(internationalizeButton);

// Google map

$("#mapDiv").append(googleMap);
