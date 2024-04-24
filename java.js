function incrementClickCount(img) {
    var clickCountSpan = img.nextElementSibling.querySelector('span'); // Find the span element next to the clicked image
    var clickCount = parseInt(clickCountSpan.textContent); // Get the current click count
    clickCount++; // Increment the click count
    clickCountSpan.textContent = clickCount; // Update the text content with the new click count
}

var images = document.querySelectorAll('.column img');
images.forEach(function(img) {
    img.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'lightblue';
    });
    img.addEventListener('mouseout', function() {
        this.style.backgroundColor = 'transparent';
    });
});