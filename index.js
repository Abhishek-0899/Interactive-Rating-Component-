const mainContainer = document.querySelector(".main-container")
const thankContainer = document.querySelector(".thank-you")
const submit = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submit.addEventListener("click", () => {
    thankContainer.classList.remove("hidden")
    mainContainer.style.display = "none";
})


rateAgain.addEventListener("click", () => {
    thankContainer.classList.add("hidden")
    mainContainer.style.display = "block";
})

rates.forEach((rate)=>{
    rate.addEventListener("click",()=>{
        // console.log(rate.innerHTML)
        rating.innerHTML = rate.innerHTML
    })
})