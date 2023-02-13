// Activity 2

const imageToChange = document.getElementsByClassName("imageToChange")[0];
const inputImg = document.querySelector(".inputImg");
const submitImg = document.getElementById("submitImg");

submitImg.addEventListener("click", () => {
    imageToChange.src = inputImg.value;
    inputImg.value = "";
})