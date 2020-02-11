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
    square.style.borderLeft = "75px solid transparent";
    square.style.borderRight = "75px solid transparent";
    square.style.borderBottom = "150px solid #7fbc03";
    document.body.style.backgroundColor = "#7b5b80";
  } else {
    square.style.backgroundColor = "red";
    document.getElementById("square").style.borderRadius = "0";
    square.style.border = "0";
    document.body.style.backgroundColor = "grey";
    square.style.borderBottom = "0";
    square.style.width = "150px";
    square.style.height = "150px";
    square.style.border = "0";
    square.style.display = "block";
  }
}

const button = document.getElementById("btn-square");

button.addEventListener("click", changeShape);
