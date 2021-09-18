const now = new Date();
const hour = now.getHours();
const minutes = now.getMinutes();
console.log(`${hour}:${minutes}`);

const clock = document.querySelector(".clock");
if (Number(minutes.toString.length) === 1) {
  clock.textContent = `${hour}:0${minutes}`;
}
if (Number(minutes.toString().length) === 2) {
  clock.textContent = `${hour}:${minutes}`;
}
