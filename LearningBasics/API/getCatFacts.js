let url = "https://catfact.ninja/fact";
let button = document.querySelector(".btn");
let h1 = document.querySelector(".facts");

const getCatFacts = async() =>{
    let response = await fetch(url);
    let data = await response.json();
    console.log("Response JSON:", data);
    h1.innerText = data.fact;
}
    button.addEventListener("click",getCatFacts);