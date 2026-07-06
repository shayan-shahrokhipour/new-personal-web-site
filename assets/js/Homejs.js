let index = 0;

const dotSlider = document.querySelectorAll(".dot");
const img = document.querySelectorAll(".sliderImg");
console.log(img);

dotSlider.forEach((item) => {
  item.addEventListener("click", () => {
    dotSlider.forEach((dot) => {
      dot.classList.remove("dotActive");
    });
    item.classList.add("dotActive");
  });
});

dotSlider.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
    console.log(dot);
    console.log(idx);

    img.forEach((item) => {
      item.classList.remove("showImg");
    });
    img[idx].classList.add("showImg");
  });
});

const available = document.querySelectorAll(".forAnimation");
const hamburgerButton = document.querySelector(".hamburger");
const responsive = document.querySelector(".responsive");
const overlay = document.querySelector(".overlay");
const icon = document.querySelectorAll(".icon");
const heightOfViewport = window.innerHeight * 0.8;

hamburgerButton.addEventListener("click", () => {
  responsive.classList.toggle("active");
  overlay.classList.toggle("overlayactive");
  hamburgerButton.classList.toggle("change");
});

window.addEventListener("scroll", () => {
  available.forEach((item) => {
    const boundingClient = item.getBoundingClientRect().top;

    if (boundingClient < heightOfViewport) {
      item.classList.add("addAnimation");
    }
  });
});


const linkAnchor =document.querySelectorAll("a[href='#']")
console.log(linkAnchor);
//menu Links
const aboutmeAnchor=document.querySelector(".aboutme")
const myskillsAnchor = document.querySelector(".Skills")
const myservicesAnchor=document.querySelector(".Services")
const myeducationAnchor = document.querySelector(".Education")
const myJobAnchor =document.querySelector(".Job")

//sections
const myskillssection =document.querySelector("#skills")
const aboutmesection = document.querySelector("#aboutMe")
const myservicessection=document.querySelector("#services")
const myeducation =document.querySelector("#education")
const myjob = document.querySelector("#myJob")

 let start=0
 let viewportstartfromclick=0
 let distance = 0
 let startTime=null
  const duration = 1000
aboutmeAnchor.addEventListener("click",(e)=>{
   e.preventDefault()
   start=window.pageYOffset
   viewportstartfromclick=aboutmesection.getBoundingClientRect().top + window.pageYOffset;
   distance=viewportstartfromclick - start
   startTime=null
  
    requestAnimationFrame(animation);

})

myeducationAnchor.addEventListener("click",(e)=>{
   e.preventDefault()
   start=window.pageYOffset
   viewportstartfromclick=myeducation.getBoundingClientRect().top + window.pageYOffset;
   distance=viewportstartfromclick - start
   startTime=null
  
    requestAnimationFrame(animation);

})

myJobAnchor.addEventListener("click",(e)=>{
   e.preventDefault()
   start=window.pageYOffset
   viewportstartfromclick=myjob.getBoundingClientRect().top + window.pageYOffset;
   distance=viewportstartfromclick - start
   startTime=null
  
    requestAnimationFrame(animation);

})


myskillsAnchor.addEventListener("click",(e)=>{
   e.preventDefault()
   start=window.pageYOffset
   viewportstartfromclick=myskillssection.getBoundingClientRect().top + window.pageYOffset;
   distance=viewportstartfromclick - start
      startTime=null

  
    requestAnimationFrame(animation);

})

myservicesAnchor.addEventListener("click",(e)=>{
   e.preventDefault()
   start=window.pageYOffset
   viewportstartfromclick=myservicessection.getBoundingClientRect().top + window.pageYOffset;
   distance=viewportstartfromclick - start
    startTime=null

  
    requestAnimationFrame(animation);

})

function animation(currentTime) {
    if (startTime === null) startTime = currentTime; //start the animation from bottom

    const time = currentTime - startTime; //how many of animation done
    const progress = Math.min(time / duration, 1); //calculate between 0 to 1 

    const ease = easeOutSine(progress); //calling the easing function

    window.scrollTo(0, start + distance * ease); //the way scrolled from zero arriving to value of start plus distance of first scroll minus position of true ellement triple of easing function for smothing 

    if (time < duration) { //value of animation is gone < time of animation 
      requestAnimationFrame(animation);
    }
  }

function easeOutSine(x) {
  return Math.sin((x * Math.PI) / 2);
}







