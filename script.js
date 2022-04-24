var rows = 16;
var cols = 16;
var drawColor = "#425463"
var squares;
var randomColors = false;
var darken = false;

const container = document.querySelector("#grid")
const squareSlider = document.querySelector("#squareRange")
const CONTAINER_WIDTH = 600;
const clearBtn = document.querySelector("#clear")
const colorSelect = document.querySelector("#colorSelect")
const randomColorBtn = document.querySelector("#randomColors");
const pickColorBtn = document.querySelector("#pickColors")
const darkenBtn = document.querySelector("#darken")

colorSelect.value = drawColor;

//draw initial grid
drawGrid(squareSlider.value)

//options
squareSlider.addEventListener('mouseup', ()=>{
    container.innerHTML = "";
    drawGrid(squareSlider.value)
})

clearBtn.addEventListener("click",()=>{
    squares.forEach((square)=>{
        square.style.backgroundColor = "";
    })
})

//color input
colorSelect.addEventListener("input",(e)=>{
    drawColor = colorSelect.value;
})

randomColorBtn.addEventListener("click",()=>{
    randomColors = true;
    darken = false;
})

pickColorBtn.addEventListener("click",() =>{
    randomColors = false;
    darken = false;
})

darkenBtn.addEventListener("click",()=>{
    darken = true;
    randomColors = false;
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

var mouseDown = false;
document.body.onmousedown = ()=>{ mouseDown = true; }
document.body.onmouseup = ()=>{ mouseDown = false; }

function addSquareListeners(){
    //hover effect
    squares.forEach((square)=>{

        //stop dragstart affecting drawing
        square.addEventListener("dragstart",(e)=>{
            e.preventDefault();
        })
        //colors the first click
        square.addEventListener("mousedown",changeColor)

        //colors squares if dragged over
        square.addEventListener('mouseover',(e)=>{
            if (!mouseDown){return;}
            changeColor(e)
        })
    })
}

function changeColor(e){

    if (!randomColors && !darken){
        e.target.style.backgroundColor = drawColor;
    
    } else if (randomColors){
        //generate random rgb values
        let randomColor = `${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},
                ${Math.floor(Math.random() * 255)}` 
        e.target.style.backgroundColor = `rgb(${randomColor})`;

    } else if (darken){
        decreaseBrightness(e);
    }
}

function decreaseBrightness(e){
    let rgb = e.target.style.backgroundColor.match(/\d+/g);
    
    newrgb = rgb.map((value)=>{
        return (parseInt(value) * 0.9).toString()
    })
    
    e.target.style.backgroundColor = `rgb(${newrgb})`
}


