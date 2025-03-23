function checkLogin() {
    if (!sessionStorage.getItem("loggedIn")) {
        window.location.href = "index.html";
    }
}

function loadPage(page) {
    document.getElementById("page-frame").src = page;
}

function logout() {
    sessionStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}
