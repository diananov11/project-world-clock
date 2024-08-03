function dinamic() {
  let londonDate = document.querySelector("#london-date");
  let londonTime = document.querySelector("#london-time");
  let currentLondonDate = moment().tz("Europe/London").format("MMMM Do YYYY");
  let currentLondonTime = moment()
    .tz("Europe/London")
    .format("hh:mm:ss [<small>]A[</small>]");

  londonDate.innerHTML = currentLondonDate;
  londonTime.innerHTML = currentLondonTime;

  let parisDate = document.querySelector("#paris-date");
  let parisTime = document.querySelector("#paris-time");
  let currentParisDate = moment().tz("Europe/paris").format("MMMM Do YYYY");
  let currentParisTime = moment()
    .tz("Europe/paris")
    .format("hh:mm:ss [<small>]A[</small>]");

  parisDate.innerHTML = currentParisDate;
  parisTime.innerHTML = currentParisTime;

  let tokyoDate = document.querySelector("#tokyo-date");
  let tokyoTime = document.querySelector("#tokyo-time");
  let currentTokyoDate = moment().tz("Asia/tokyo").format("MMMM Do YYYY");
  let currentTokyoTime = moment()
    .tz("Asia/tokyo")
    .format("hh:mm:ss [<small>]A[</small>]");

  tokyoDate.innerHTML = currentTokyoDate;
  tokyoTime.innerHTML = currentTokyoTime;
}

setInterval(dinamic, 1000);

function changeClock(event) {
  let timezone = event.target.value;
  let city = event.target.value.replace("_", " ").split("/")[1];
  let date = moment().tz(timezone).format("MMMM Do YYYY");
  let time = moment().tz(timezone).format("hh:mm:ss [<small>]A[</small>]");

  let clock = document.querySelector("#clock");

  clock.innerHTML = `
          <div class="cities">
          <div>
            <h2 class="city">${city}</h2>
            <div class="date">${date}</div>
          </div>
          <div class="time">${time}</div>
        </div>
        <br/>
        <a href="/" class="back">Back to home</a>
  `;
}
let selectCity = document.querySelector("#select-city");
selectCity.addEventListener("change", changeClock);
