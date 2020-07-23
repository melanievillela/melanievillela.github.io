//Check if Apple
var isSafari = window.safari !== undefined;
if (isSafari) alert("PISS OFF DESTINY")

//Bounce in effects
const icons = document.getElementsByClassName("icons");

function timedText() {
    setTimeout(function(){ icons[0].classList.add("bounce") }, 500);
    setTimeout(function(){ icons[1].classList.add("bounce") }, 1000);
    setTimeout(function(){ icons[2].classList.add("bounce") }, 1500);
    setTimeout(function(){ icons[0].classList.add("bounce-final") }, 1500);
    setTimeout(function(){ icons[1].classList.add("bounce-final") }, 2000);
    setTimeout(function(){ icons[2].classList.add("bounce-final") }, 2500);
}

//Hover project display effects
const projects = document.getElementsByClassName("projects");

function toggleInfo() {
    for (let i = 0; i < projects.length; i++) {
        projects[i].addEventListener("mouseenter", function() {
            this.firstElementChild.classList.add("project-info-display");
        });
        projects[i].addEventListener("mouseleave", function() {
            this.firstElementChild.classList.remove("project-info-display");
        });
    } 
}

timedText();
toggleInfo();

console.log("Icons made by Freepik at https://www.flaticon.com/authors/freepik")
