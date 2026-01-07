// Target elements
const container = document.querySelector('.container');
const changeGrid = document.querySelector('.change');
const resetColor = document.querySelector('.reset');
const changeColor = document.querySelector('input');

// Initial values
let size = 960;
let value = 16;
let color = 'black';

// Style the container
container.style.cssText = `display:flex; 
  flex-wrap: wrap; 
  width: ${size}px; height: ${size}px;`;

// Event when we clicked the changeGrid button
changeGrid.addEventListener('click', () => {
  let tempVal = value; // Create variable to revert to the appropriate prompt input
  value = +prompt('Enter a Number to change no. of squares per side:', 16);

  if (value > 100 || value <= 0 || !Number.isInteger(value)) {
    Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "ERROR! Enter numerical from 1 - 100",
  });
    value = tempVal; // Store the appropriate prompt input
    reCreate(value);
  } else {
    reCreate(value);
  }
});

// Event when we click the resetColor button
resetColor.addEventListener('click', ()=> {
  reCreate(value);
});


// Function to create grid
function createGrid(value) {
  for(let i = 0; i < value * value; i++) {
    let gridBox = document.createElement('div');
    gridBox.style.cssText = `height: ${size / value - 4}px; 
    width: ${size / value - 4}px; 
    border: 2px solid black;`;

    container.appendChild(gridBox);

    // Change Color
    changeColor.addEventListener('input', ()=> {
      colorChange();
    });

    // Hover to change bg-color
    gridBox.addEventListener('mouseenter', (e) => {
      changeSquareColor(e);
    });
  };
}

// Function to change color
function colorChange() {
  color = changeColor.value;
}

// Function to change 
function changeSquareColor(e) {
  e.target.style.backgroundColor = `${color}`;
}

// Function to remove contents of container and recreate new one
function reCreate (value) {
  container.textContent = '';
  createGrid(value);
}

// Call grid
createGrid(value);