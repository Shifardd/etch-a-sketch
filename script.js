// Target elements
const container = document.querySelector('.container');
const changeGrid = document.querySelector('.change');
const resetColor = document.querySelector('.reset');
const changeColor = document.querySelector('input');

// Initial values
let size = 960;
let value = 16;

// Style the container
container.style.cssText = `display:flex; 
  flex-wrap: wrap; 
  width: ${size}px; height: ${size}px;`;

// Event when we clicked the changeGrid button
changeGrid.addEventListener('click', () => {
  value = +prompt('Enter a Number to change no. of squares per side:', 16);
  if (!Number.isInteger(value)|| value > 100 || value <= 0) {
    Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "ERROR! Enter numerical from 1 - 100",
  });
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

    let color = 'black';

    // Change Color
    changeColor.addEventListener('input', ()=> {
      color = changeColor.value;
    });

    // Hover to change bg-color
    gridBox.addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = `${color}`;
    });
  };
}

function reCreate (value) {
  container.textContent = '';
  createGrid(value);
}

// Call grid
createGrid(value);