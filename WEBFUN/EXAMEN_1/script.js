document.getElementById('acceptButton').addEventListener('click', function() {
    var footerText = document.getElementById('footerText');
    footerText.style.display = 'none';
});

const centerImage = document.querySelector('.center-image');
const mainImage = document.querySelector('.main-image');
const hoverImage = document.querySelector('.hover-image');

centerImage.addEventListener('mouseenter', () => {
    mainImage.style.opacity = '0';
    hoverImage.style.opacity = '1';
});

centerImage.addEventListener('mouseleave', () => {
    mainImage.style.opacity = '1';
    hoverImage.style.opacity = '0';
});

const cartButton = document.getElementById("cartButton");

cartButton.addEventListener("click", function() {
alert("Your Cart is Empty");
});
