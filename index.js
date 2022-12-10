let display = document.getElementById("display");

let operator = ["+", "-", "*", "/"];
let btns = document.getElementsByClassName("pad");
let displayValue = "";
let last = "";

const btnPressed = (e) => {
  let pressed = e.target.id;

  if (displayValue.length >= 20) return;

  if (operator.includes(pressed)) {
    if (operator.includes(last)) return;
    if (last === "") return;
  }

  if (pressed == "=") {
    let calculated = eval(displayValue).toString();
    setValue(calculated);
    return;
  }

  if (pressed == "c") {
    let del = displayValue.split("");
    let deleted = del.slice(0, -1).toString().replace(/,/g, "");
    setValue(deleted);
    return;
  }

  if (pressed == "cc") {
    setValue("0");
    displayValue = "";
    return;
  }

  last = pressed;
  displayValue += pressed;
  display.setAttribute("value", displayValue);
};

for (let btn of btns) {
  btn.addEventListener("click", btnPressed);
}

function setValue(e) {
  displayValue = e;
  display.setAttribute("value", e);
}
