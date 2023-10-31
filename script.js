const wines = document.querySelectorAll("#wine1, #wine2, #wine3, #wine4, #wine5");
const contact = document.querySelectorAll("#contact1, #contact2, #contact3, #contact4, #contact5");
const about = document.querySelectorAll("#about1, #about2, #about3, #about4, #about5");



wines.forEach(function(wine) {
    wine.addEventListener("click", function() {
        window.location.href = "./index.html";
    });
});

contact.forEach(function(contact) {
    contact.addEventListener("click", function() {
        window.location.href = "./Contact.html";
    });
});

about.forEach(function(about) {
    about.addEventListener("click", function() {
        window.location.href = "./About.html";
    });
});