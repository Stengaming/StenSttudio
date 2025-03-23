function checkLogin() {
    if (!sessionStorage.getItem("loggedIn")) {
        window.location.href = "index.html";
    }
}

function loadPage(page) {
    let content = document.getElementById("page-content");
    if (page === "home") {
        content.innerHTML = "<h2>🏠 Home</h2><p>Welkom op de homepagina van je dashboard!</p>";
    } else if (page === "profile") {
        content.innerHTML = "<h2>👤 Profiel</h2><p>Hier kun je je profielgegevens bekijken en wijzigen.</p>";
    } else if (page === "settings") {
        content.innerHTML = "<h2>⚙️ Instellingen</h2><p>Pas hier je voorkeuren en instellingen aan.</p>";
    }
}

function logout() {
    sessionStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}
