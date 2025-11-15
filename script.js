let circle = document.querySelector(".circle");

let original = document.querySelector(".btn1");
let change = document.querySelector(".btn2");

let hex = document.querySelector(".hexid");

change.addEventListener("click", function () {
  let random1 = Math.floor(Math.random() * 256);
  let random2 = Math.floor(Math.random() * 256);
  let random3 = Math.floor(Math.random() * 256);
  circle.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;

  hex.innerHTML =
    `#${random1.toString(16).padStart(2, "0")}` +
    `${random2.toString(16).padStart(2, "0")}` +
    `${random3.toString(16).padStart(2, "0")}`;
});

original.addEventListener("click", function () {
  circle.style.backgroundColor = "transparent";
  hex.innerHTML = "#cbcbcb";
});
