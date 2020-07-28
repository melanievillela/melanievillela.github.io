//Bounce in effects
const icons = document.querySelectorAll(".icons");

function timedIcons() {
    setTimeout(function(){ icons[0].classList.add("animate__animated", "animate__bounceInDown") }, 500);
    setTimeout(function(){ icons[1].classList.add("animate__animated", "animate__bounceInDown") }, 1000);
    setTimeout(function(){ icons[2].classList.add("animate__animated", "animate__bounceInDown") }, 1500);
}

//Loop through skills
const skills = ["JAVASCRIPT","PYTHON","ILLUSTRATOR","FLASK","NODE","PHOTOSHOP","REACT","AMAZON AWS","EXPRESS","WORDPRESS","JQUERY"];
const skillsContainer = document.querySelector(".skills");

function timedText() {
    let i = 0;

    setInterval(function(){
            skillsContainer.textContent = skills[i];
            i++;
            if(i>=skills.length) {
                i = 0;
                timedText();
            }
    }, 1000);    
}

//Project display effects
const projects = document.querySelectorAll(".projects");

//Check visibility
function isScrolledIntoView(el) {
    let rect = el.getBoundingClientRect();
    let elTop = rect.top;
    let elBottom = rect.bottom;
    let isVisible = elTop < window.innerHeight && elBottom >= 0;
    return isVisible;
}

//Check visibility
function checkVisibility() {
    projects.forEach(project => {
        if(isScrolledIntoView(project)) {
            project.classList.add("animate__animated", "animate__slideInRight");
        }
    });
}

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

timedIcons();
timedText();
toggleInfo();
window.addEventListener('scroll', checkVisibility);

console.log("Icons made by Freepik at https://www.flaticon.com/authors/freepik")