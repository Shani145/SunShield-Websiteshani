// Handle Thumbnail Image Clicks
const mainImage = document.getElementById('main-image');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function () {
        mainImage.src = this.src; // Change main image source
    });
});

// Handle Add to Cart Button
document.getElementById('add-to-cart').addEventListener('click', () => {
    const quantity = document.getElementById('quantity').value;
    alert(`Added ${quantity} items to your cart.`);
});