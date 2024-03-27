const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFileNames =['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const imageAltText ={
    'pic1.jpg' : 'Image 1 Alt Text',
    'pic2.jpg' : 'Image 2 Alt Text',
    'pic3.jpg' : 'Image 3 Alt Text',
    'pic4.jpg' : 'Image 4 Alt Text',
    'pic5.jpg' : 'Image 5 Alt Text'
};

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */

