console.log("Prince");

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "blue"

// document.getElementById("redbox").style.backgroundColor = "blue"

// document.querySelector(".box").style.backgroundColor = "green" /* ye querySelector class or id ko target karta hai from html and ye sirf "?" jo diya rahega uske jaise first ko he target karega */

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "green"
})
