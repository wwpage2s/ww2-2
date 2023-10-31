let slideIndex = 0;
let transitioning = false;


const imageTexts = [
    {
        heading: "BOZP A OPP",
        description: "Naša firma zmluvne zabezpečuje BOZP a OPP vo firmách s vypracovaním kompletnej dokumentácie z BOZP a OPP vo firme.",
    },
    {
        heading: "PZS - Pracovná zdravotná služba",
        description: "Integrovaný prístup k prevencii chorôb z povolania a pracovných úrazov, k ochrane a podpore zdravia s prihliadnutím na zdravotnú, pracovnú a funkčnú spôsobilosť zamestnancov v priebehu ich pracovného života s cieľom udržať práceschopnosť zamestnancov.",
    },
    {
        heading: "CO - Civilná ochrana",
        description: "Civilná ochrana je sústava úloh a opatrení zameraných na ochranu života, zdravia a majetku obyvateľstva, ako aj národného hospodárstva.",
    },
    {
        heading: "ŠKOLENIA",
        description: "Oboznamovanie zamestnancov s BOZP A OPP",
    },
    {
        heading: "REVÍZIE",
        description: "Odborné prehliadky a skúšky vyhradených technických zariadení",
    },
    {
        heading: "Kontrola a predaj Hasiacich prístrojov a hydrantov",
        description: "Montáž hasiacich prístrojov a hydrantov, Revízia hasiacich prístrojov, Praktická skúška hasiacich prístrojov, Predaj hasiacich prístrojov",
    },
    {
        heading: "Ostatné",
        description: "...",
    },
]; 

function changeSlide(n) {
    if (transitioning) return;
    transitioning = true;
    showSlide((slideIndex += n));
    updateText();
}


function showSlide(n) {
    const slides = document.querySelectorAll(".slider-image");

    if (n >= slides.length) {
        slideIndex = 0;
    }

    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
    }


    updateText();
}



function updateText() {
    const textContainer = document.getElementById("text-container");
    textContainer.style.animation = "none";

    setTimeout(() => {
        document.getElementById("image-heading").textContent = imageTexts[slideIndex].heading;
        document.getElementById("image-description").textContent = imageTexts[slideIndex].description;
        textContainer.style.animation = "scaleText 0.5s";
        transitioning = false; 
    }, 100); 
}



updateText();