const calc = document.querySelector(".calc_container");
const screen = document.querySelector("#screen");

//functions

const clear = function () {
  screen.textContent = "";
};
const addToScreen = function (value) {
  screen.textContent = screen.textContent + value;
};

let del = function () {
  let currentValue = screen.textContent;
  screen.textContent = currentValue.substring(0, currentValue.length - 1);
};

function equ() {
  try {
    let calculation = math.evaluate(screen.textContent);
    screen.textContent = calculation;
  } catch (error) {
    screen.textContent = "invalid";
    console.error(error);
  }
}

calc.addEventListener("click", (e) => {
  if ((e.target.nodeName === "BUTTON")) {
    switch (e.target.textContent) {
      case "AC":
        clear();
        break;
      case "Del":
        del();
        break;
      case "=":
        equ();
        break;
      default:
        addToScreen(e.target.textContent);
    }
  }
});
