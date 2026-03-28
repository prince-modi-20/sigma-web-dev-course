let random = Math.random();
console.log(random);

let boxes = document.getElementsByClassName("box");
console.log(boxes);

if (random <= 0.33) {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "red";
    boxes[i].style.color = "white";
  }
} 

else if (random <= 0.66 && random > 0.33) {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "blue";
    boxes[i].style.color = "aqua";
  }
} 

else {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "black";
    boxes[i].style.color = "white";
  }
}
