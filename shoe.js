"use strict";
document.addEventListener("DOMContentLoaded", start);

let back;
let logo;

async function start() {
  let response = await fetch("shoe.svg");
  let mySvgData = await response.text();
  document.querySelector("#shoecontainer").innerHTML = mySvgData;

  back = document.querySelector("#back");
  logo = document.querySelector("#logo");

  init();
}

let currentcolor = "yellow";
function setColor(element, colorString) {
  console.log(element);
  element.style.fill = colorString;
}

function init() {
  console.log("init works");

  setColor(back, currentcolor);
  setColor(logo, currentcolor);

  back.addEventListener("click", (event) => {
    setColor(event.target, currentcolor);
    console.log("I pressed back");
  });
  logo.addEventListener("click", (event) => {
    setColor(event.target, currentcolor);
    console.log("I pressed logo");
  });
  document.querySelectorAll("rect").forEach((element) => {
    element.addEventListener("click", (event) => {
      console.log(event);
      currentcolor = event.target.style.fill;
      console.log(currentcolor);
    });
  });
}
