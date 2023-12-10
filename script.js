
const target = document.querySelector(".container"); // Container
const elementsInTarget = document.querySelectorAll(".animated"); // 3 images

const observer = new IntersectionObserver(callbackFunction);

function callbackFunction (entries) {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            console.log("Detection classe");
            elementsInTarget[0].classList.add("fadeInLeft");
            elementsInTarget[1].classList.add("fadeInTop");
            elementsInTarget[2].classList.add("fadeInRight");
        } 
    });
    
}

observer.observe(target);