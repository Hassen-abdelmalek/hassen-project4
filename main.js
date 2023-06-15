let btn = document.querySelector(".goup");

let skil = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".progs span");

let stat = document.querySelector(".stats");
let boxs = document.querySelectorAll(".boxes .hoh");
let started = false;

window.onscroll = function () {
  // Start Fill in the width of prog when scrolling
  if (window.scrollY >= skil.offsetTop - 100) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // End Fill in the width of prog when scrolling

  // Start Fill in the number of Stats when scrolling
  if (window.scrollY >= stat.offsetTop - 100) {
    if (!started) {
      boxs.forEach((hoh) => startCount(hoh));
    }
    started = true;
  }
  // End Fill in the number of Stats when scrolling

  // Start Event Button Up Top
  if (window.scrollY >= 1000) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// End Event Button Up Top

// start counter when scrolling
function startCount(ele) {
  let goal = ele.dataset.goal;
  let count = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
// End counter when scrolling
// #############

// Start countdown Event
let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

let counter = setInterval(() => {
  // Get Time Now
  let datNow = new Date().getTime();
  // The diference between Now and countdown date
  let dateDif = countDownDate - datNow;
  // Get Time units
  let days = Math.floor(dateDif / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDif % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDif % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDif < 0) {
    clearInterval(counter);
  }
}, 1000);

// End countdown Event
