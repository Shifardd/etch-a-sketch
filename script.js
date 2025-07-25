const container = document.querySelector('.container');

let size = 960;
let value = 16

container.style.cssText = `display:flex; 
                      flex-wrap: wrap; 
                      width: ${size}px; 
                      height: ${size}px;`

for(let i = 0; i < value * value; i++) {
  let gridBox = document.createElement('div');
  gridBox.style.cssText = `height: ${size / value - 2}px; 
                      width: ${size / value - 2}px; 
                      border: 1px solid black;`

  container.appendChild(gridBox);

  gridBox.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = 'black';
  })
}


