var rows = 16;
var cols = 16;
const container = document.querySelector("#container")

for (let i = 0; i < rows; i++){
    let row = document.createElement('div');
    row.classList.add('row');
    
    for (let j = 0; j < cols; j++){
        let col = document.createElement('div');
        col.classList.add('square');

        row.appendChild(col);
    }
    container.appendChild(row);
}