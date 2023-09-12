console.log("git tutotial");

const head = document.createElement('h1')
const button = document.createElement("button");
const body = document.querySelector("body");

button.innerHTML = "Click me";
button.style.backgroundColor = "red";
body.appendChild(button);

const changeColor = () => {
    head.innerHTML = `<strong>This is a simple heading</strong>`
    head.style.textAlign = 'center'
    body.appendChild(head)

  if (button.style.backgroundColor == "red") {
    button.style.backgroundColor = "blue";
    button.style.fontSize = "2em";
  } else if (button.style.backgroundColor == "blue") {
    button.style.backgroundColor = "green";
    button.style.fontSize = "3em";
  } else if (button.style.backgroundColor == "green") {
    button.style.backgroundColor = "red";
    button.style.fontSize = "1em";
    body.removeChild(head)
  }
};

button.addEventListener("click", changeColor);




