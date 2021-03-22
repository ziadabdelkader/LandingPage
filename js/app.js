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


const sections = document.querySelectorAll("section");
const menuList = document.querySelector("#navbar__list");
let navigationItems;
let activeSection = sections[0];
let activeNavigationItem;


function addNavigationMenuItems(){
    for(const section of sections){
        const navigationItem = getNavigationItemFromSection(section);
        menuList.append(navigationItem)
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


function isElementInViewport (element) {
    let rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
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
    const newActiveSection = getActiveSection();
    if(newActiveSection !== activeSection){
        activeSection.classList.remove("your-active-class");
        newActiveSection.classList.add("your-active-class");
        activeSection = newActiveSection;
        updateActiveNavigationItem(activeSection)
    }
}

function updateActiveNavigationItem(section){
    if(activeNavigationItem){
        activeNavigationItem.classList.remove("your-active-class");
    }
    for (const navigationItem of navigationItems) {
        if(navigationItem.dataset.sectionId ===  section.id){
            activeNavigationItem = navigationItem;
        }
    }
    activeNavigationItem.classList.add("your-active-class");
}

// Build menu
addNavigationMenuItems();

// select all navigation items after built
navigationItems = document.querySelectorAll(".menu__link");

// mark active item
updateActiveNavigationItem(activeSection);

// Scroll to section on link click
menuList.addEventListener('click',handlerForNavigationItemClicked);

// Set sections as active
document.addEventListener("scroll",scrollWindowHandler);
