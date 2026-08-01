import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { getImages } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form")
const input = document.querySelector(`input[name="search-text"]`)
let searchWord;

input.addEventListener("input", (e) => {
    searchWord = e.target.value;
})

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(!searchWord || !searchWord.trim()) return;
    clearGallery();
    showLoader();

    getImages(searchWord)
    .then(data => {
        if(data.hits.length === 0){
            iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            messageColor: 'white',
            iconColor: 'white',
            position: 'topRight',
            color: 'red',
            class: 'my-custom-toast',
        });
        return
        }
        createGallery(data.hits)
    })
    .catch(error => {
         iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            messageColor: 'white',
            iconColor: 'white',
            position: 'topRight',
            color: 'red',
            class: 'my-custom-toast',
        });
    })
    .finally(() => hideLoader())
})
