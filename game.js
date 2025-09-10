// let cell = document.querySelectorAll(".cell");
// let reset = document.querySelector(".rect");

// let turn = true;

// const winpattern = [
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8]
// ];
// cell.forEach((cell) =>{
//  cell.addEventListener("click", ()=>{
//  console.log("button was clicked");
//  if(turn){
//     cell.innerText = "O";
//     turn = false;
//  }else{
//     cell.innerText="X";
//     turn = true;

//  }
//  cell.disabled= true;
//  });
// });

// const checkWinner = () =>{
//     for(let pattern of winpattern){
        
//     }
// }
let cells = document.querySelectorAll(".cell");
let reset = document.querySelector(".reset");

let turn = true; // true = O, false = X

const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// Add click event to all cells
cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if(turn){
            cell.innerText = "O";
            turn = false;
        } else {
            cell.innerText = "X";
            turn = true;
        }
        // cell.disabled = true;
        cell.style.pointerEvents = "none"; // prevent multiple clicks
        checkWinner();
    });
});

// Check winner
const checkWinner = () => {
    for(let pattern of winpattern){
        const [a,b,c] = pattern;
        if(cells[a].innerText && 
           cells[a].innerText === cells[b].innerText && 
           cells[a].innerText === cells[c].innerText){
            alert(`${cells[a].innerText} Wins!`);
            // Disable all cells
            cells.forEach(cell => cell.style.pointerEvents = "none");
            return;
        }
    }

    // Check for tie
    if([...cells].every(cell => cell.innerText !== "")){
        alert("It's a Tie!");
    }
}

// Reset button
reset.addEventListener("click", () => {
    cells.forEach(cell => {
        cell.innerText = "";
        cell.style.pointerEvents = "auto"; // enable click
    });
    turn = true; // Reset turn to O
});
