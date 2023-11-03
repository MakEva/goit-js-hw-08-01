// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryMarkup } from "./helper";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

let lightbox = new SimpleLightbox('.gallery a',
    {
        captionsData: "alt",
        captionPosition: 'bottom',
        captionDelay: 250
});
