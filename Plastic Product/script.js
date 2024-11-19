// JavaScript to close the modal
function closeModal() {
    document.getElementById("category-modal").style.display = "none";
}

// Optional: Open modal with specific content (if needed in the future)
function showCategory(categoryName) {
    document.getElementById("category-title").innerText = categoryName;
    document.getElementById("category-modal").style.display = "flex";
}
