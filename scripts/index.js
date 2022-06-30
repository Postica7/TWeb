function imgSlider(anything) {
  document.querySelector(".starbucks").src = anything;
}

function changeCircleColor(color) {
  const circle = document.querySelector(".circle");
  circle.style.background = color;
}

function showMore(item){
  dv = document.getElementById(item);
  dv.classList.remove("hidden");
}

function closeMore(item){
  dv = document.getElementById(item);
  dv.classList.add("hidden");
}