
function changeTab(tabName) {
    var tabs = document.getElementsByClassName("tab");

    for(var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "block";

    var navLinks = document.getElementsByTagName("a");
    for(var j = 0; j < navLinks.length; j++) {
        navLinks[j].classList.remove("active");
    }
    event.target.classList.add("active");
    
}
//makes home the homepage
window.addEventListener("load", function() {
    changeTab('home');
});
