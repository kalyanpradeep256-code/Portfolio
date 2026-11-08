javascript
// Display a message in the browser console
console.log("Welcome to my portfolio!");

// Highlight the navigation link for the current section
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.style.color = "";

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.style.color = "#00d9ff";
        }
    });
});