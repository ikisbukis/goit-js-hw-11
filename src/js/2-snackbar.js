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
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled"){
                resolve(`✅ Fulfilled promise in ${delay.value}ms`);
            } else {
                reject(`❌ Rejected promise in ${delay.value}ms`);
            }
        }, `${delay.value}`)
    })
    .then(data => {
        iziToast.show({
        backgroundColor: 'green',
        messageColor: "white",
        position: "topCenter",
        message: data
    });
    })
    .catch(error => {
        iziToast.show({
        backgroundColor: 'red',
        messageColor: "white",
        position: "topCenter",
        message: error
    });
    })
}
