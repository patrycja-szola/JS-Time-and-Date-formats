function sayHello() {
  // alert("Hello");

  let helloBox = document.querySelector("#hello");
  // it chooses the element IN html with #hello ID
  helloBox.innerHTML = "Bonjour!";
  // variable helloBox will changed in HTML to "Bonjour"
}
setTimeout(sayHello, 5000);
// ! it will run the function 1000 milisek (=1sek) after reload the page

function displayDate() {
  let date = document.querySelector("#date");
  date.innerHTML = new Date();
  // variable date will now show the current date
}
displayDate();
setInterval(displayDate, 1000);
// this function will show the date every second => we will have the digital clock with real-time
// for minutes we should use 60000ms instead of 1000ms

// ! new section:  "DATA FORMAT" using MOMENT()

let todayElement = document.querySelector("#today");
let today = moment().format("dddd Do MMMM, YYYY H:m");
todayElement.innerHTML = `Today is ${today}`;

let tomorrowElement = document.querySelector("#tomorrow");
let tomorrow = moment().add(1, "day").format("dddd Do, MMMM");
tomorrowElement.innerHTML = `Tomorrow will be ${tomorrow}`;

let nextWeekElement = document.querySelector("#nextWeek");
let nextWeek = moment().add(7, "day").format("dddd Do, MMMM");
nextWeekElement.innerHTML = `In 7 days we will have ${nextWeek}`;

// ! new section:  "TIME ZONES"  using MOMENT()

let LosAngelesTime = moment().tz("America/Los_Angeles").format("MMM D, YYYY h:mm A (ddd)");
let LosAngelesElement = document.querySelector("#los-angeles");
LosAngelesElement.innerHTML = `Los Angeles, USA: ${LosAngelesTime}`;

let colombiaTime = moment().tz("America/Bogota").format("MMM D, YYYY h:mm A (ddd)");
let colombiaElement = document.querySelector("#colombia");
colombiaElement.innerHTML = `Bogota, Colombia: ${colombiaTime}`;

let dohaTime = moment().tz("Asia/Qatar").format("MMM D, YYYY h:mm A (ddd)");
let dohaElement = document.querySelector("#doha");
dohaElement.innerHTML = `Doha, Qatar: ${dohaTime}`;

let tokyoTime = moment().tz("Asia/Tokyo").format("MMM D, YYYY h:mm A (ddd)");
let tokyoElement = document.querySelector("#tokyo");
tokyoElement.innerHTML = `Tokyo, Japan: ${tokyoTime}`;

let sydneyTime = moment().tz("Australia/Sydney").format("MMM D, YYYY h:mm A (ddd)");
let sydneyElement = document.querySelector("#sydney");
sydneyElement.innerHTML = `Sydney, Australia: ${sydneyTime}`;

let localTimezone = moment.tz.guess();
let localElement = document.querySelector("#local");
localElement.innerHTML = `Your current time zone is ${localTimezone} and the current time is ${moment().format(
  "H:mm A"
)}`;
