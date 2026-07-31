const KEY = "56842497-86210550798b8b78fed208621";

export function getImages(query) {
    const params = new URLSearchParams({
        key: KEY,
        q: query,
        image_type: `photo`,
        orientation: `horizontal`,
        safesearch: `true`
    })

    return fetch(`https://pixabay.com/api/?${params}`)
    .then(response => {
        if(!response.ok) {
            throw new Error("Search error");
        }
        return response.json();
    })
}