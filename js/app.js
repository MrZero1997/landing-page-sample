/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/
const navUl = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");




 // End Global Variables





// build the nav


for(let i =1 ; i <= sections.length ; i++){
const list = document.createElement("li");
const link = document.createElement("a");
navUl.appendChild(list);
list.appendChild(link);
link.textContent = `section ${i}`;
link.href=`#section${i}`;

}
const links = document.querySelectorAll("a")


// Add class 'active' to section when near top of viewport
function scrolling(){
  for (const section of sections){
     sectionId = section.getAttribute("id");
     const distanceTop = section.getBoundingClientRect().top;
     console.log(distanceTop);
 // Set sections as active
 // set navigation links as active
    if (distanceTop > 0 && distanceTop < 250){
      section.classList.add("your-active-class");

      document.querySelector (".navbar__menu a[href*=" + sectionId + "]")
      .classList.add("your-active-class");
      }


    else {
    section.classList.remove("your-active-class");
    document.querySelector (".navbar__menu a[href*=" + sectionId + "]")
    .classList.remove("your-active-class");

    }

}
};

// Scroll to anchor ID using scroll event
window.addEventListener("scroll",scrolling)

/**
 * End Main Functions
 * Begin Events
 *
*/

// Scroll to section on link click
for(const ref of links){
ref.addEventListener("click",function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
           behavior: 'smooth'
       });

}
)};

//End Events
