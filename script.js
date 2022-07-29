const wrapper = document.querySelector(".big-wrapper");

const switcher = document.querySelector(".slider");

window.addEventListener("DOMContentLoaded", function () {
    wrapper.classList.add("dark");
});

switcher.addEventListener("click", function () {
    wrapper.classList.toggle("light");
});

