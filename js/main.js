
const toggleSwitch = document.querySelector("#toggleSwitch");
const toggleContent = document.querySelector("#toggle-content");

const lightMode = () => {
    document.documentElement.setAttribute("data-bs-theme", "");
    document.documentElement.setAttribute("data-bs-theme", "light");

    toggleContent.textContent = "Light";

    // To store data in local storage.
    localStorage.setItem("theme", "light");
};

const darkMode = () => {
    document.documentElement.setAttribute("data-bs-theme", "");
    document.documentElement.setAttribute("data-bs-theme", "dark");
    toggleContent.textContent = "Dark";

    // To store data in local storage.
    localStorage.setItem("theme", "dark");
};


toggleSwitch.addEventListener("click", (event) => {
    event.target.checked ? darkMode() : lightMode();
});


const themeChanger = () => {
    document.documentElement.setAttribute("data-bs-theme", "");
};

// When Page Reload this function will reload.
(() => {

    const savedTheme = localStorage.getItem("theme");
    savedTheme === "dark" ? (darkMode(), toggleSwitch.checked = true) : lightMode();
})();