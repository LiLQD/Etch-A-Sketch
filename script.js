const container = document.createElement("div")
container.classList.add("container")
const body = document.querySelector("body")


for(let i = 0; i < 256; i++){
    const squareDiv = document.createElement("div")
    squareDiv.textContent = i + 1
    squareDiv.classList.add("squareDivs")
    container.appendChild(squareDiv)
}
body.appendChild(container)
const squareDivGrid = document.querySelectorAll(".squareDivs")
squareDivGrid.forEach((elem) => {
    elem.addEventListener("mouseover", (e) => {
        e.target.classList.add("blueItems")
    })
})

