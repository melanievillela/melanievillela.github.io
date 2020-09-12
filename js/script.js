//Bounce in effects
const icons = document.querySelectorAll(".icons");

function timedIcons() {
    setTimeout(function(){ icons[0].classList.add("animate__animated", "animate__rubberBand") }, 500);
    setTimeout(function(){ icons[1].classList.add("animate__animated", "animate__rubberBand") }, 1000);
    setTimeout(function(){ icons[2].classList.add("animate__animated", "animate__rubberBand") }, 1500);
}

//Project display effects
const projects = document.querySelectorAll(".project");

//Check visibility
function isScrolledIntoView(el) {
    let rect = el.getBoundingClientRect();
    let elTop = rect.top;
    let elBottom = rect.bottom;
    let isVisible = elTop < window.innerHeight && elBottom >= 0;
    return isVisible;
}

//Apply animations
function applyAniations() {
    projects.forEach(project => {
        if(isScrolledIntoView(project) && screen.width <= 1200) {
            setTimeout(function(){ project.classList.add("animate__animated", "animate__flash") }, 800);
        } else if(isScrolledIntoView(project) && screen.width > 1200) {
            setTimeout(function(){ project.classList.add("animate__animated", "animate__pulse") }, 500);
        }
    });
}

timedIcons();
//toggleInfo();
window.addEventListener('scroll', applyAniations);

console.log("Icons made by Freepik at https://www.flaticon.com/authors/freepik")