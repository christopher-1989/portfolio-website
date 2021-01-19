let navMenuButton = document.getElementById('nav-menu-button');
let navMenu = document.getElementById('nav-menu');
let barsTimes = document.getElementById('bars');
let navBar  = document.getElementById('navbar');
let navButtonOne = document.getElementById('button-one');
let navButtonTwo = document.getElementById('button-two');
let navButtonThree = document.getElementById('button-three');

let navActive = false;

const showNav = () => {
    navbar.style.height = "100vh";
    navbar.style.display = "flex";
    navbar.style.flexDirection = "column";

    navMenu.style.width = '100%';
    navMenu.style.float = 'none';
    navMenu.style.top = '20vh';
    navMenu.style.left = '0';
    navMenu.style.height = '90vh';
    navMenu.style.display = 'flex';
    navMenu.style.flexDirection = "column";
    
    navActive = true;
}

const hideNav = () => {
    navMenu.style.top = '-100%';
    navbar.style.height = "4.75rem";
    navbar.style.display = "flex";
    navbar.style.flexDirection = "row";

    navMenu.style.width = '100%';
    navMenu.style.float = 'none';
    navMenu.style.top = '-100%';
    navMenu.style.left = '-200%';
    navMenu.style.height = '100%';
    navMenu.style.display = 'grid';
    navMenu.style.flexDirection = "none";

    // navButtons.removeEventListener('onclick', hideNav);

    navActive = false;
}

const checkBarsClass = () => {
    if (barsTimes.className === 'fas fa-bars' ) {
        return true
    } else {
        return false
    }
}

const handleEvent = () => {
    const updateClass = checkBarsClass() ? 'fas fa-times' : 'fas fa-bars';
    barsTimes.className = updateClass;
    navActive ? hideNav() : showNav();
}

navMenuButton.onclick = handleEvent;

navButtonOne.onclick = function () {
    if (screen.width < 901) {
        handleEvent();
    }
};
navButtonTwo.onclick = function () {
    if (screen.width < 901) {
        handleEvent();
    }
};
navButtonThree.onclick = function () {
    if (screen.width < 901) {
        handleEvent();
    }
};


