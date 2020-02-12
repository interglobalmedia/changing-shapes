function changeShape() {
  const square = document.getElementById("square");
  if (square.style.backgroundColor === "red") {
    square.style.backgroundColor = "blue";
    square.style.borderRadius = "50%";
    square.style.border = "1px dashed #fff";
    document.body.style.backgroundColor = "#a96500";
  } else if (square.style.backgroundColor === "blue") {
    square.style.backgroundColor = "transparent";
    square.style.borderRadius = "0";
    square.style.width = "0";
    square.style.height = "0";
    square.style.border = "0";
    square.style.borderLeft = "25vh solid transparent";
    square.style.borderRight = "25vh solid transparent";
    square.style.borderBottom = "50vh solid #7fbc03";
    document.body.style.backgroundColor = "#7b5b80";
  } else {
    square.style.backgroundColor = "red";
    square.style.borderRadius = "0";
    square.style.border = "0";
    document.body.style.backgroundColor = "grey";
    square.style.borderBottom = "0";
    square.style.width = "50vh";
    square.style.height = "50vh";
    square.style.border = "0";
  }
}

function refreshMe() {
  const square = document.getElementById("square");
  square.style.borderRadius = "0";
  square.style.backgroundColor = "red";
  square.style.border = "0";
  square.style.height = "50vh";
  square.style.width = "50vh";
  document.body.style.backgroundColor = "#fff";
}

const btnSquare = document.getElementById("btn-square");
const btnRefresh = document.getElementById("btn-refresh");

btnSquare.addEventListener("click", changeShape);
btnRefresh.addEventListener("click", refreshMe);
