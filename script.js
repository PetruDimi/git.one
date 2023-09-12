console.log("git tutotial");

const button = document.createElement("button");
button.innerHTML = "Click me";
button.style = "background-color:red";

const body = document.querySelector("body");
body.appendChild(button);

const changeColor = () => {

    if (button.style.backgroundColor == 'red'){
        button.style.backgroundColor = 'blue'
        button.style.fontSize = '2em'
    } else if (button.style.backgroundColor == 'blue'){
        button.style.backgroundColor = 'green'
        button.style.fontSize = '3em'

    }
    else if (button.style.backgroundColor == 'green'){
        button.style.backgroundColor = 'red'
        button.style.fontSize = '1em'
    }
};

button.addEventListener("click", changeColor);
