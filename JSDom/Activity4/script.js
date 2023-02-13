// Activity 4

const coords = document.getElementById("coords");

document.addEventListener("click", (event) => {
    coords.textContent = `Coordinates of click are: X-${event.clientX} Y-${event.clientY}`
})