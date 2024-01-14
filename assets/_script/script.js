document.addEventListener("DOMContentLoaded", function () {
    var navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(function (item) {
        item.addEventListener("click", function () {
            navItems.forEach(function (navItem) {
                navItem.classList.remove("nav-selected");
            });
            item.classList.add("nav-selected");
        });
    });
});