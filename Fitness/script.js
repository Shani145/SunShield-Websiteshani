// script.js

function toggleDetails(detailId) {
    const details = document.getElementById(detailId);
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}