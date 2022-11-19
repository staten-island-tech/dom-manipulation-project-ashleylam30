const DOMSelectors = {
  button: document.getElementById("btn"),
  input: document.getElementById("input"),
};

function displayInput() {
  const userInput = DOMSelectors.input.value;
  const text = document.createElement("p");
  text.innerText = userInput;
  document.body.appendChild(text);
}

function clearInput() {
  DOMSelectors.input.value = "";
}

function createElement() {

  displayInput();
  clearInput();
}

DOMSelectors.button.addEventListener("click", createElement); // when clicked, call createElement()