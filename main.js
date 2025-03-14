const gridContainer = document.querySelector(".gridContainer");
const userInput = document.getElementById("userInput");
const sizeSelectorButton = document.querySelector("#sizeSelectorButton")
const resetButton = document.querySelector("#resetButton")
const blackButton = document.querySelector("#black");
const rgbButton = document.querySelector("#rgb");
let colorMode = "black";


function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function generateGrid(size) {
    // Validate and limit size
    size = Math.min(Math.max(1, size), 100);
    
    clearGrid();
    
    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement("div");
        gridRow.setAttribute("class", "gridRow");
        gridContainer.append(gridRow);
        for (let j = 0; j < size; j++) {
            const gridSquare = document.createElement("div")
            gridSquare.setAttribute("class", "gridSquare");
            gridRow.append(gridSquare);
            gridSquare.addEventListener("mouseover", (event) => {
                if (colorMode === "black") {
                    event.target.style.backgroundColor = "black";
                }
                else if (colorMode === "rgb") {
                    event.target.style.backgroundColor = getRandomColor();
                } else {
                    console.log("ERROR: color mode not selected");
                }
                // // Remove the black class when in RGB mode
                // if (colorMode === "rgb")
                //     event.target.classList.remove("black");
            })
        }
    }
}

generateGrid(16);


function changeSize(newValue) {
    const size = parseInt(newValue);
    if (!isNaN(size)) {
        generateGrid(size);
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

sizeSelectorButton.addEventListener("click", () => changeSize(userInput.value));
resetButton.addEventListener("click", () => {
    clearGrid();
    generateGrid(16);
})
blackButton.addEventListener("click", () => {
    colorMode = "black";
    console.log("Color mode:", colorMode);
})
rgbButton.addEventListener("click", () => {
    colorMode = "rgb";
    console.log("Color mode:", colorMode);
})