let p = document.querySelector("p");
let h1 = document.querySelector("#myID");

p.addEventListener("mouseover", (evt) => {
    console.log("You saw it!");
    console.log(evt);
});
h1.addEventListener("click", (evt) => {
    console.log("You saw it! 01");
    console.log(evt);
});
h1.addEventListener("click", (evt) => {
    console.log("You saw it! 02");
    console.log(evt);
});
const handler03 = () => {
    console.log("You don't saw it! Because it removed.");
}
h1.addEventListener("click",handler03)
h1.addEventListener("click", (evt) => {
    console.log("You saw it! 04");
    console.log(evt);
});

h1.removeEventListener("click",handler03)