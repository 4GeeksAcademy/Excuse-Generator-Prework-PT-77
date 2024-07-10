/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  loadExcuse();
  setInterval(liveExcuse, 1000);
  clickExcuse();
};

function randomNumber(length) {
  let number = Math.floor(Math.random() * length);
  return number;
}

function getString(array) {
  let length = array.length;
  let random = randomNumber(length);
  let string = array[random];
  return string;
}

function getExcuse() {
  let whoString = getString(who);
  let actionString = getString(action);
  let whatString = getString(what);
  let whenString = getString(when);

  let excuse = `${whoString} ${actionString} ${whatString} ${whenString}`;

  return excuse;
}

function loadExcuse() {
  let excuseLoad = document.querySelector("#excuse-onload");
  let excuse = getExcuse();
  excuseLoad.innerHTML = excuse;
}

function liveExcuse() {
  let excuseLive = document.querySelector("#excuse-onlive");
  let excuse = getExcuse();
  excuseLive.innerHTML = excuse;
}
function clickExcuse() {
  let excuseClick = document.querySelector("#excuse-onclick");
  excuseClick.addEventListener("mouseover", () => {
    let excuse = getExcuse();
    excuseClick.innerHTML = excuse;
  });
}
