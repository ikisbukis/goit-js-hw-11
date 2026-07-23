import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const selectDataField = document.querySelector("#datetime-picker");
const button = document.querySelector("[data-start]");
const secondsDOM = document.querySelector("[data-seconds]");
const minutesDOM = document.querySelector("[data-minutes]");
const hoursDOM = document.querySelector("[data-hours]");
const daysDOM = document.querySelector("[data-days]");
let dateNow = Date.now()
let selectedDate;

button.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0])
  },
  onChange(selectedDates, dateStr, instance) {
    checkDate(selectedDates[0]);
  }
};

const fp = flatpickr(selectDataField, options);
console.log(fp);

button.addEventListener("click", (event) => {
    setInterval(() => {
      let timeLeft = selectedDate - Date.now();
      let ms = convertMs(timeLeft);
      secondsDOM.textContent = addLeadingZero(ms.seconds);
      minutesDOM.textContent = addLeadingZero(ms.minutes);
      hoursDOM.textContent = addLeadingZero(ms.hours);
      daysDOM.textContent = addLeadingZero(ms.days);

      console.log(ms)
    }, 1000)
})

function checkDate(selectDates) {
    if(selectDates.getTime() < Date.now()) {
      button.disabled = true;
      iziToast.show({
      backgroundColor: 'red',
      messageColor: "white",
      position: "topCenter",
      message: 'Please choose a date in the future'
    });
    return;
  }
  selectedDate = selectDates.getTime();
  button.disabled = false;
  console.log(selectedDate);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).length < 2 ? value.padStart(2, "0") : value;
}