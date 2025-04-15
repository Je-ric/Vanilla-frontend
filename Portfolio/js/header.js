
function openCity(evt, sectionName) {
var i, tabcontent, tablinks;

// hide
tabcontent = document.getElementsByClassName("section-content");
for (i = 0; i < tabcontent.length; i++) {
tabcontent[i].style.display = "none"; 
}

// reemove active
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
tablinks[i].classList.remove("active");
}

// show
document.getElementById(sectionName).style.display = "block";

// aadd active
evt.currentTarget.classList.add("active");
}

// display
document.addEventListener("DOMContentLoaded", function() {
document.querySelector(".tablinks").click(); 
});