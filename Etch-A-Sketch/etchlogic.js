let gridRows = 32;
let gridCols = 32;

createDivGrid(gridRows, gridCols);
mouseDownEffect();

let sizeButton = document.querySelector(".change-size");
sizeButton.addEventListener("click", event => {
    let rows = prompt("Enter the number of rows you want for the grid: ");
    let cols = prompt("Enter the number of columns you want: ");
    removeGrid();
    gridRows = rows;
    gridCols = cols;
    createDivGrid(rows, cols);
    mouseDownEffect();
});

let resetButton = document.querySelector(".reset-board");
resetButton.addEventListener("click", event => {
    removeGrid();
    createDivGrid(gridRows, gridCols);
    mouseDownEffect();
})
  
function removeGrid() {
    document.querySelectorAll(".square").forEach(e => e.remove());
}

function createDivGrid(rowsGiven, colsGiven) {
    const rows = rowsGiven;
    const cols = colsGiven;

    for (let i=0; i < rows; i++) {
        for (let j=0; j < cols; j++) {
            let div = document.createElement("div");
            div.classList.add("square");

            let container = document.querySelector(".grid-container");
            let containerWidth = container.offsetWidth;

            div.style.width = containerWidth / cols + "px";
            div.style.height = containerWidth / rows + "px";
            div.style.opacity = 0.1;
            div.dataset.colored = false;
            container.appendChild(div);
        }
    }
}

function mouseDownEffect() {
    let isMouseDown = false;
    document.addEventListener("mousedown", () => {
        isMouseDown = true;
    });
    document.addEventListener("mouseup", () => {
        isMouseDown = false;
    });

    

    let squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mousemove", event => {
            if (isMouseDown) {
                //square.style.backgroundColor = "blue";
                if (square.dataset.colored === "false") {
                    let redValue = Math.floor((Math.random() * 256));
                    let greenValue = Math.floor((Math.random() * 256));
                    let blueValue = Math.floor((Math.random() * 256));
                    square.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

                    square.dataset.colored = true;
                }

                let currentOpacity = parseFloat(window.getComputedStyle(square).opacity);
                let nextOpacity = Math.min(currentOpacity + 0.1, 1); 
                square.style.opacity = nextOpacity;
            }
        })

        square.addEventListener("mousedown", event => {
            let redValue = Math.floor((Math.random() * 256));
            let greenValue = Math.floor((Math.random() * 256));
            let blueValue = Math.floor((Math.random() * 256));
            /*square.style.backgroundColor = "blue";*/
            square.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
            square.dataset.colored = "true"; // Mark the square as colored
        });
    });
}
