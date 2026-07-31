import SimpleLightbox from "simplelightbox";

const gallery = document.querySelector(".gallery")
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
})
;
const loader = document.querySelector(".loader")

export function createGallery(images){
    const markup = images.map( image => {
        return `
        <li class="list-item">
                <a class="gallery-img" href=${image.largeImageURL}>
                    <img src=${image.webformatURL} alt="${image.tags}"></img>
                </a>
                <div class="info">
                    <div class="info-element" style="margin-right:28px;width=34px;height=40px">
                        <p class="tags-container-text">Likes</p>
                        <p class="tags-container-value">${image.likes}</p>
                    </div>
                    <div class="info-element" style="margin-right:28px;width=48px;height=40px">
                        <p class="tags-container-text">Views</p>
                        <p class="tags-container-value">${image.views}</p>
                    </div>
                    <div class="info-element" style="margin-right:32px;width=72px;height=40px">
                        <p class="tags-container-text">Comments</p>
                        <p class="tags-container-value">${image.comments}</p>
                    </div>
                    <div class="info-element" style="width=74px;height=40px">
                        <p class="tags-container-text">Downloads</p>
                        <p class="tags-container-value">${image.downloads}</p>
                    </div>
                </div>
        </li>`;
    }).join("")
    gallery.insertAdjacentHTML("beforeend", markup)

    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = "";
}

export function showLoader() {
    loader.classList.remove("hidden")
}

export function hideLoader() {
    loader.classList.add("hidden")
}
