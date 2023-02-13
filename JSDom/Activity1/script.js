// Activity 1

const toggleBtn = document.getElementById("toggleBtn")
const toggleImg = document.querySelector("#toggleImg")

toggleBtn.addEventListener("click", () => {
    if(toggleImg.style.display === "none"){
        toggleImg.style.display = "block";
    } else {
        toggleImg.style.display = "none";  
    }

})