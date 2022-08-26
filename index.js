const mainContainer = document.querySelector(".main-container")
const thanksContainer = document.querySelector(".thank-you")
const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again")

submitButton.addEventListener("click", () => {
	thanksContainer.classList.remove("hidden")
	mainContainer.classList.add("hidden")
})

rateAgain.addEventListener("click", () => {
	thanksContainer.classList.add("hidden")
	mainContainer.classList.remove("hidden")
})