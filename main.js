// Start Event Button Up Top
let btn = document.querySelector(".goup");

console.log(btn);

window.onscroll = function () {
  if (window.scrollY >= 1620) {
    // console.log(window.scrollY);
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
