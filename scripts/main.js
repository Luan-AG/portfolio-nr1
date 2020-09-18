/*let btn = document.querySelector(".about");
btn.addEventListener ("click", turnOn);
btn.addEventListener ("dblclick", turnOff);

function turnOn(){
    document.querySelector("nav").style.backgroundColor = "red";
}

function turnOff(){
    document.querySelector("nav").style.backgroundColor = "#2f4947b7";
} */


//code to find out the height of the page.
/*window.addEventListener("scroll", scrollDown);

function scrollDown () {
    let axisY = window.scrollY;
    console.log(axisY);
}*/

//My Skills is on y = 476px

window.addEventListener("scroll", scrollDown);
function scrollDown() {
    let axisY = window.scrollY;
    let about = document.querySelector(".about");
    let skills = document.querySelector(".skills");
    let projects = document.querySelector(".projects");
    let contact = document.querySelector(".contact");
    
    if (axisY < 476) {
        about.setAttribute("id", "current");
        skills.removeAttribute("id");
        projects.removeAttribute("id");
        contact.removeAttribute("id");
    } else if (axisY >= 476 && axisY < 700) {
        about.removeAttribute("id");
        skills.setAttribute("id", "current");
        projects.removeAttribute("id");
        contact.removeAttribute("id");
    } else if (axisY >= 700 && axisY < 1000) {
        about.removeAttribute("id");
        skills.removeAttribute("id");
        projects.setAttribute("id", "current");
        contact.removeAttribute("id");
    } else {
        about.removeAttribute("id");
        skills.removeAttribute("id");
        projects.removeAttribute("id");
        contact.setAttribute("id", "current");
    }
}