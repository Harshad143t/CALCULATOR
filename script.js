let string = "";
const buttons = document.querySelectorAll("button");
const display = document.querySelector("input");

function calculate() {
  buttons.forEach(buttons => {
    buttons.addEventListener('click', function(event) {
      event.preventDefault();
    })
  })
}
calculate()
buttons.forEach(button => {
  button.addEventListener('click', function(event) {
    const valu = event.target.innerText;
    if (valu === "CLEAR") {
      string = "";
      display.value = string
    }
    else if (valu === "DELETE") {
      string = string.slice(0, -1)
      display.value = string;
    } else if (valu === "=") {
      try {
        char = eval(string);
        str = char.toString()
        string = str;
        display.value = string
      } catch (error) {
        display.value = "error"
      }
    } else if (valu === "X") {
      string += "*"
      display.value = string;
    }
    else {
      string += valu;
      display.value = string;
    }
  })
})