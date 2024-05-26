let result = document.querySelector("p");
console.log(result);
console.log(result.getAttribute("class"));
console.log(result.classList.add("newClass"));
console.log(result.classList);









// let newBtn = document.createElement("h1");
// newBtn.innerText = "CLICK ME!";
// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";
// document.querySelector("body").prepend(newBtn);
// document.querySelector("body").append(newBtn);
// document.querySelector("body").before(newBtn);
// document.querySelector("body").after(newBtn);
//newBtn.remove();






// let h4 = document.querySelector("h2");
// console.dir(h4.innerText);
// h4.innerText = h4.innerText + " From MehdiKhosa";

// let boxes = document.querySelectorAll(".boxes");
// console.log(boxes);
// let i=1;
// for(box of boxes){
//     box.innerText = `NewBoxes ${i}`;
//     i++
// }


// console.log(boxes[0].innerText);
// console.log(boxes[1].innerText);
// console.log(boxes[2].innerText);
// console.log(boxes[3].innerText);

// boxes[0].innerText = "NewBoxes01";
// boxes[1].innerText = "NewBoxes02";
// boxes[2].innerText = "NewBoxes03";
// boxes[3].innerText = "NewBoxes04";


// let myId = document.querySelector("#intro");
// console.log(myId);
// console.dir(myId);
// let myClass = document.querySelector(".myClass");
// console.log(myClass);
// console.dir(myClass);
// console.log("From here we are going to use InnerHTMl");
// console.log(document.body.innerHTML);
// console.log("From here we are going to start InnerText");
// console.log(document.body.innerText);
// console.log("From here we are going to start textConetnt to show private tags");
// console.log(document.body.textContent);
// let el = document.body.childNodes[2].innerText = "ABCD";
// let el1 = document.body.childNodes[2].innerHTMl = "<div></div>";
// let el2 = document.body.childNodes[2].textContent = "You're Hidden!";
// console.log(el);
// console.log(el1);
// console.log(el2);