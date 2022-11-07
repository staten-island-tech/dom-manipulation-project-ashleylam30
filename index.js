//use queryselector when connecting element with a class
//use getelementbyid when connecting element with id
const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  point: document.querySelectorAll(".point"),
  pointTwo: document.getElementById(),
};
console.log(DOMSelectors.point);
