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
        // Add fade-in span for animation
        if(turn){
            cell.innerHTML = "<span class='show'>O</span>";
            turn = false;
        } else {
            cell.innerHTML = "<span class='show'>X</span>";
            turn = true;
        }

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
            
            // Add winning animation class
            cells[a].classList.add('win');
            cells[b].classList.add('win');
            cells[c].classList.add('win');

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
        cell.classList.remove('win'); // remove winning animation
        cell.style.pointerEvents = "auto"; // enable click
    });
    turn = true; // Reset turn to O
});
