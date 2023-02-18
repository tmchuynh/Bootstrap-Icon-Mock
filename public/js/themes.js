var dropdown_menu = document.querySelector(".dropdown-menu");

var theme = window.localStorage.getItem("theme");

var displayed = document.querySelector(".dropdown-toggle i");

if (theme == "dark") {
    document.body.classList.add("dark");
}

dropdown_menu.addEventListener("click", function (event) {
    if (event.target.classList.contains("dark")) {

        displayed.removeAttribute("class");
        displayed.classList.add("bi");
        displayed.classList.add("bi-moon-stars.fill");
        window.localStorage.setItem("theme", "dark");


    } else {
        displayed.removeAttribute("class");
        displayed.classList.add("bi");
        displayed.classList.add("bi-brightness-high-fill");
        window.localStorage.setItem("theme", "light");

    }
    window.location.reload();

});