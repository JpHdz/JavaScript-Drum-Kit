"use strict";
// //My solution
// window.addEventListener("keydown", function (e) {
//   console.log(e);

//   const { keyCode } = e;
//   const btns = document.querySelectorAll(".key");
//   btns.forEach((btn) => {
//     const data = +btn.getAttribute("data-key");
//     const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
//     if (data === keyCode) {
//       btn.classList.add("playing");
//       audio.play();
//       setTimeout(() => {
//         btn.classList.remove("playing");
//       }, 100);
//     }
//   });
// });

//Teachers solution

const removeTransition = function (e) {
  // console.log(e);
  if (e.propertyName !== "transform") return;
  console.log(e);
  this.classList.remove("playing");
};

const playSound = function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.add("playing");
};

window.addEventListener("keydown", playSound);

const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});
