let date = document.getElementById("date");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

let current = new Date();

let currentDate = current.getDate();
if (currentDate < 10) {
  date.innerText = "0" + currentDate;
}
let currentDay = current.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
day.innerText = days[currentDay];

let currentmonth = current.getMonth();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

month.innerText = months[currentmonth];

let year1 = current.getFullYear();
year.innerText = year1;

let time = document.getElementById("time");
function setTime() {
  let current1 = new Date();
  let hour = current1.getHours();
  let minute = current1.getMinutes();
  let second = current1.getSeconds();
  if (hour > 12) {
    hour = hour - 12;
  }
  if (hour < 100) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }

  time.innerText = hour + ":" + minute + ":" + second;
}
setInterval(setTime, 1000);
