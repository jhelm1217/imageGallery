const displayedImage = document.querySelector('.displayed-img');


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
const thumbBar = document.querySelector('.thumb-bar');

imageFileNames.foreach(filename => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imageFileNames);
    newImage.setAttribute('alt', imageAltText);
    img.addEventListener('click', () => {
        displayedImg.src = imageFileNames;
        displayedImg.alt = imageAltText;
    })
    thumbBar.appendChild(newImage);
})
/* Wiring up the Darken/Lighten button */

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

btn.setAttribute('data-dark', 'button-class');
btn.textContent = isDarkened;

let isDarkened = flase;
darkenBtn.addEventListner('click', () => {
    isDarkened = !isDarkened;
    if (isDarkened) {
        displayedImg.classList.add('darken'); /*this will apply the dark feature*/
    } else {
        displayedImg.classList.remove('darken'); /* this will remove the dark effect*/
    }
});
