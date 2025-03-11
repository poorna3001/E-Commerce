document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Hero Buttons Alert Actions
    document.querySelector(".hero-buttons button:first-child").addEventListener("click", () => {
        alert("Redirecting to Seller Registration");
    });
    
    document.querySelector(".hero-buttons button:last-child").addEventListener("click", () => {
        alert("Exploring Products");
    });
    
    // Buyer Section Alert
    document.querySelector("#buyer button").addEventListener("click", () => {
        alert("Start Shopping Now");
    });
    
    // Mobile Menu Toggle (If needed)
    const navToggle = document.createElement("button");
    navToggle.innerText = "☰";
    navToggle.classList.add("nav-toggle");
    document.querySelector("header").prepend(navToggle);

    navToggle.addEventListener("click", () => {
        document.querySelector(".nav-links").classList.toggle("active");
    });
});
