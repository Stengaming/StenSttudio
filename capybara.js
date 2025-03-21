// Functie om de cookie in te stellen
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

// Functie om de cookie op te halen
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Controleren of ?snow in de URL staat of of de cookie bestaat
if (window.location.search.includes("?capybara") || getCookie("capybara") === "true") {
    setCookie("capybara", "true", 30); // Cookie instellen voor 30 dagen
    startSnowfall();
}

function startSnowfall() {
    const snowContainer = document.createElement("div");
    snowContainer.style.position = "fixed";
    snowContainer.style.top = "0";
    snowContainer.style.left = "0";
    snowContainer.style.width = "100%";
    snowContainer.style.height = "100%";
    snowContainer.style.pointerEvents = "none";
    snowContainer.style.zIndex = "9999";
    document.body.appendChild(snowContainer);

    function createSnowflake() {
        const snowflake = document.createElement("img");
        snowflake.src = "https://vikie.teammaatje.nl/images/vikie_zonderbackground.png"; // Pas aan met je eigen PNG
        snowflake.style.position = "absolute";
        snowflake.style.width = Math.random() * 100 + 10 + "px";
        snowflake.style.top = "-50px";
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.opacity = Math.random();
        snowflake.style.transition = "top 5s linear, opacity 5s";
        snowContainer.appendChild(snowflake);

        setTimeout(() => {
            snowflake.style.top = window.innerHeight + "px";
            snowflake.style.opacity = "0";
        }, 50);

        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }

    setInterval(createSnowflake, 200);
}
