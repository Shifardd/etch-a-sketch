const container = document.querySelector('.container');
const changeGrid = document.querySelector('.change');

let size = 960;
let value = 16;

container.style.cssText = `display:flex; flex-wrap: wrap; 
          width: ${size}px; height: ${size}px;`;

changeGrid.addEventListener('click', () => {
  value = +prompt('Enter a Number to change no. of squares per side:', 16);
  if (value > 100 || value <= 0 || !Number.isFinite(value)) {
    alert('ERROR! Enter from 1 - 100');
  } else {
    container.textContent = '';
    createGrid(value);
  }
})

function createGrid(value) {
  for(let i = 0; i < value * value; i++) {
    let gridBox = document.createElement('div');
    gridBox.style.cssText = `height: ${size / value - 2}px; 
                        width: ${size / value - 2}px; 
                        border: 1px solid black;`;

    container.appendChild(gridBox);

    gridBox.addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = 'black';
    })
  };
}

createGrid(value)