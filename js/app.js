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

// Define Global Variables
const navUl = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
let options = {threshold : [0.4] , rootMargin : "-25px 150px"};
const links = document.querySelectorAll("a");

 // End Global Variables

//check if an element is in viewport then toggle active class
const observer = new IntersectionObserver(entries => {entries.forEach(entry =>{
  entry.target.classList.toggle("your-active-class",entry.isIntersecting);
  const targetID = entry.target.id ;
  if (entry.isIntersecting){
// set navigation links as active
document.querySelector (".navbar__menu a[href*=" + targetID + "]")
.classList.add("your-active-class");
}
else {
  document.querySelector (".navbar__menu a[href*=" + targetID + "]")
  .classList.remove("your-active-class");
}
})
},options);

// build the nav


for(let i =1 ; i <= sections.length ; i++){
list = document.createElement("li");
link = document.createElement("a");
navUl.appendChild(list);
list.appendChild(link);
link.textContent = `section ${i}`;
link.href=`#section${i}`;
link.id=`#section${i}`;
}



// Add class 'active' to section when near top of viewport
function scrolling(){
  for (const section of sections){
    // Set sections as active
    observer.observe(section);

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

