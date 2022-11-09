//use queryselector when connecting element with a class
//use getelementbyid when connecting element with id
const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  point: document.querySelectorAll(".point"),
  box: document.getElementById("bigblackbox"),
};

function backgroundAndText(background, text) {
  background.style.backgroundColor = "blue";
  text.innerHTML = "This is now a big blue box";
  text.style.fontSize = "50px";
}
backgroundAndText(DOMSelectors.box, DOMSelectors.text);
