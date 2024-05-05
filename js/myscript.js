let navButton = document.getElementById("nav-menu-button");
let navList = document.getElementById("nav-menu-list");

if (navButton){
    navButton.addEventListener("click", function(event){
        if (navList.style.display === "" || navList.style.display === "none")
            navList.style.display = "grid";
        else
            navList.style.display = "none";
    });
}

const mediumMediaQuery = window.matchMedia("(min-width: 550px)");

mediumMediaQuery.addEventListener("change", function(event){
    if (event.matches)
        navList.style.display = "grid";
    else
        navList.style.display = "none";
});