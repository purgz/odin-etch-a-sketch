var rows = 16;
var cols = 16;
var defaultColor = "#425463"
var squares;

const container = document.querySelector("#grid")
const squareSlider = document.querySelector("#squareRange")
const CONTAINER_WIDTH = 600;
const clearBtn = document.querySelector("#clear")



//draw initial grid
drawGrid(squareSlider.value)


squareSlider.addEventListener('mouseup', ()=>{
    container.innerHTML = "";
    drawGrid(squareSlider.value)
})



function drawGrid(numRows){
    for (let rows = 0; rows < numRows; rows++){
        //create row
        let row = document.createElement("div");
        row.classList.add("row");

        for (let cols = 0; cols < numRows; cols++){
            //create col
            let col = document.createElement("div");

            //calculate square width
            let width = CONTAINER_WIDTH / numRows;
            col.style.width = `${width}px`;

            col.classList.add("square");

            row.appendChild(col)
        }
        container.appendChild(row);
    }
    squares = document.querySelectorAll(".square")
    addSquareListeners();
}


function addSquareListeners(){
    //hover effect
    squares.forEach((square)=>{
        square.addEventListener('mouseover',(e)=>{
            console.log(e.target)
            e.target.style.backgroundColor = defaultColor
        })
    })
}


clearBtn.addEventListener("click",()=>{
    squares.forEach((square)=>{
        square.style.backgroundColor = "";
    })
})