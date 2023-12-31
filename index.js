const warmcolor = [
  "#c71585",
  "#FF0000",
  "#ff5349",
  "#FFA500",
  "#f2ba49",
  "#FFFF00",
];
const coldcolor = [
  "#8F00FF",
  " #8A2BE2",
  "#0000FF",
  "#0D98BA",
  "#00FF00",
  "#9ACD32",
];

document.querySelectorAll(".block").forEach((e, index) => {
  e.innerHTML = `<div class="color" style="background-color:${warmcolor[index]}"> <div class="text">${warmcolor[index]}</div>`;
});

var checkbox = document.querySelector("input[type=checkbox]");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    document.querySelector("h1").innerHTML = ` <span style="color: #312fcc;
    text-shadow: 1px 0px 3px #0b0b8a;">Cold Colors</span>`;
    document.querySelectorAll(".block").forEach((e, index) => {
      e.innerHTML = `<div class="color" style="background-color:${coldcolor[index]}"> <div class="text">${coldcolor[index]}</div>`;
    });
  } else {
    document.querySelector(
      "h1"
    ).innerHTML = ` <span style="color: #ff0000; text-shadow: 1px 0px 2px #ff6700">Warm Colors</span>`;
    document.querySelectorAll(".block").forEach((e, index) => {
      e.innerHTML = `<div class="color" style="background-color:${warmcolor[index]}"> <div class="text">${warmcolor[index]}</div>`;
    });
  }
});
