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
 * Define Global Variables
 *
 */

const sections = document.querySelectorAll("section");
const menuList = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

function addNavigationMenuItems(){
    for(const section of sections){
        menuList.append(getNavigationItemFromSection(section))
    }
}

function getNavigationItemFromSection(section){
    const sectionId = section.id;
    const navigationItemName = section.dataset.nav;
    const navigationItem = document.createElement('li');
    navigationItem.textContent = navigationItemName;
    navigationItem.dataset.sectionId = sectionId;
    navigationItem.classList.add("menu__link");
    return navigationItem;
}

function handlerForNavigationItemClicked(event){
    const navigationItem = event.target;
    const sectionId = navigationItem.dataset.sectionId;
    const section = document.getElementById(sectionId);
    section.scrollIntoView();
}



/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
addNavigationMenuItems();

// Scroll to section on link click
menuList.addEventListener('click',handlerForNavigationItemClicked);


// Set sections as active
