let URL = "https://dog.ceo/api/breeds/image/random";
let clickBtn = document.querySelector(".btn");
let img = document.querySelector(".dogImage");

const getDogImage = async () => {
    console.log("Fetching......");
        let response = await fetch(URL);
        console.log(response.status);
        let data = await response.json();
        console.log("Response JSON:", data);
        img.src = data.message;
    };
    clickBtn.addEventListener("click", getDogImage);