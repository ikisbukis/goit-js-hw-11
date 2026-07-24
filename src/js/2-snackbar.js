import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const delay = document.querySelector(`input[name="delay"]`);
const button = document.querySelector("button");

form.addEventListener("submit", createPromis);

function createPromis(e) {
    e.preventDefault();
    const state = form.elements.state.value;
    console.log(state);
    console.log(delay.value);
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled"){
                resolve(delay.value);
            } else {
                reject(delay.value);
            }
        }, `${delay.value}`)
    })
    .then(data => {
        iziToast.show({
        backgroundColor: 'green',
        messageColor: "white",
        position: "topCenter",
        message: `✅ Fulfilled promise in ${data}ms`
    });
    })
    .catch(error => {
        iziToast.show({
        backgroundColor: 'red',
        messageColor: "white",
        position: "topCenter",
        message: `❌ Rejected promise in ${error}ms`
    });
    })
}
