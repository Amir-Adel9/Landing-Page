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
var pageSections = document.getElementsByTagName('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
document.addEventListener('DOMContentLoaded', () => {
    // Loops over the page's sections and creates a responsive navbar accordingly
    for (let i = 0; i < pageSections.length; i++) {
        // Creates the needed HTML elements
        const navList = document.getElementById('navbar__list');
        const navListElements = document.createElement('li');
        navList.appendChild(navListElements);
        // Adjusts the properties and attributes of the navbar HTML elements
        const navListElementsSelector = document.querySelectorAll('li');
        navListElementsSelector[i].setAttribute('class', 'menu__link');
        navListElementsSelector[i].setAttribute('id', `navItem_${i+1}`);
        navListElementsSelector[i].innerHTML = `Section ${i+1}`;
    }
});

// Add class 'active' to section when near top of viewport

// Adds an scroll event listener for setting the section in viewport as active
document.addEventListener('scroll', () => {
    // Loops over the page sections and gets they "Y" coordinates within the page according to the viewport
    for (let i = 0; i < pageSections.length; i++) {
        const scrollTracker = pageSections[i].getBoundingClientRect();
        // Sets the active section according to it's location from the viewport
        if (scrollTracker['y'] <= 150) {
            pageSections[i].setAttribute('class', 'your-active-class');
        } if (scrollTracker['y'] <= -150 || scrollTracker['y'] >= 150 ) {
            pageSections[i].removeAttribute('class');
        }
    }
});





// Scroll to anchor ID using scrollTO event

// Adds functionality to the navbar
document.addEventListener('DOMContentLoaded', () => {
    // Handels click events made on the navbar elements
    document.querySelectorAll('.menu__link').forEach(item=> {
        item.addEventListener('click', event => {
          for (let i = 1; i <= pageSections.length; i++) {
            // Uses the click event's data to know which navbar element was clicked and scrolls to the corresponding section
              if (event.srcElement.id === `navItem_${i}`) {
                let sectionAnchor = document.getElementById(`section${i}`);              
                sectionAnchor.scrollIntoView();
              } 
          }
          
        })
      });
});



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


