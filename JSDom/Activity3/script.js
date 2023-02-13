// Activity 3

const colHeading = document.getElementById("colHeading");
const inputCol = document.querySelector("#inputCol");
const submitCol = document.getElementById("submitCol");

submitCol.addEventListener("click", () => {
    colHeading.style.color = inputCol.value;
})
