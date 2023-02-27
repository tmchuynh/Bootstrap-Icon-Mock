var copy_icon = document.querySelector(".bi-clipboard");

copy_icon.addEventListener("click", () => {
    copy_icon.classList.remove("bi-clipboard");
    copy_icon.classList.add("bi-clipboard-check");
    copy_icon.style.color = "green";

    setInterval(() => {
        copy_icon.classList.add("bi-clipboard");
        copy_icon.style.color = "white";
    }, 1000);
});