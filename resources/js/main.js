let navMenuButton = document.getElementById('nav-menu-button');
let navMenu = document.getElementById('nav-menu');
let barsTimes = document.getElementById('bars');
let navBar  = document.getElementById('navbar');
let aboutButton = document.getElementById('button-one');
let skillsButton = document.getElementById('button-two');
let projectsButton = document.getElementById('button-three');

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

    navActive = false;
}

const checkBarsClass = () => {
    if (barsTimes.className === 'fas fa-bars' ) {
        return true
    } else {
        return false
    }
}

const handleCloseNavMenu = () => {
    const updateClass = checkBarsClass() ? 'fas fa-times' : 'fas fa-bars';
    barsTimes.className = updateClass;
    console.log(screen.width)
    navActive ? hideNav() : showNav();
}

const handleNavMenuClick = () => {
    if (screen.width < 901) {
        const updateClass = checkBarsClass() ? 'fas fa-times' : 'fas fa-bars';
        barsTimes.className = updateClass;
        console.log(screen.width)
        navActive ? hideNav() : showNav();
    }
}

navMenuButton.onclick = handleCloseNavMenu;

aboutButton.onclick = handleNavMenuClick;
skillsButton.onclick = handleNavMenuClick;
projectsButton.onclick = handleNavMenuClick;


