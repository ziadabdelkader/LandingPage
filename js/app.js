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
let activeSection = sections[0];

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function isElementInViewport (element) {

    let rect = element.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}

function getActiveSection(){
    for(const section of sections){
        if(isElementInViewport(section))
            return section;
    }
    return activeSection;
}

function scrollWindowHandler(){
    console.log("scrollWindowHandler")
    const newActiveSection = getActiveSection();
    if(newActiveSection !== activeSection){
        activeSection.classList.remove("your-active-class")
        newActiveSection.classList.add("your-active-class")
        activeSection = newActiveSection
    }
}

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
    section.scrollIntoView({behavior: "smooth",block: 'start'});
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
document.addEventListener("scroll",scrollWindowHandler)

// Set sections as active
