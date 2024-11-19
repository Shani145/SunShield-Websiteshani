// Get references to the thumbnails and main image
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('mainImage');

// Function to change the main image
function changeMainImage(event) {
    const newSrc = event.target.src;
    mainImage.src = newSrc;

    // Remove active class from all thumbnails and add to the clicked thumbnail
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    event.target.classList.add('active');
}

// Add click event listeners to all thumbnails
thumbnails.forEach(thumb => {
    thumb.addEventListener('click', changeMainImage);
});
