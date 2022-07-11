const dateTime = document.querySelector('.container-profile__info__time-date');
const userName = document.querySelector('.container-profile__info__name');

userName.innerHTML += ' ' + 'John Doe';

setInterval(clock, 1000);

function clock() {
  const date = new Date();
  dateTime.innerHTML =
    date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}
