

const barIcon = document.querySelector(".bar-icon").addEventListener("click", toggleNavbar);


function toggleNavbar () {
    const navLinks = document.querySelector(".navbar-links");
    navLinks.classList.toggle("show");
}