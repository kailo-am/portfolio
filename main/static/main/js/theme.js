const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    themeToggle.addEventListener("click", () => {

        const currentTheme =
            document.documentElement.getAttribute("data-theme");

        if (currentTheme === "light") {
            document.documentElement.removeAttribute("data-theme");
            themeIcon.className = "bi bi-sun-fill";
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            themeIcon.className = "bi bi-moon-fill";
        }

    });