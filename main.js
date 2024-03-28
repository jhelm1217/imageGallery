const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images =['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altTexts = ['close up of eye', 'beige waves', 'purple flowers', 'hieroglyphics', 'butterfly'];

/* Looping through images */
images.forEach((filename, index) => { 
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + filename);
    newImage.setAttribute('alt', altTexts[index]);
    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', 'images/' + filename);
        displayedImage.setAttribute('alt', altTexts[index]);
    });
    thumbBar.appendChild(newImage);
});

/* Wiring up the Darken/Lighten button */

const btn= document.querySelector('button');

btn.addEventListener('click', function() {
    if (btn.event.type.contains('dark')) {
        btn.event.type.remove('dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }   else {
        btn.event.type.add('light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }
});
