const mainDIV = document.getElementById('main');

window.addEventListener('DOMContentLoaded', () => {
  const stepButton = document.getElementById('button');
  const orderList = document.getElementById('list');

  let stepArr = ["Join repo invite", "Clone repo locally", "Create a branch with 'feature{yourName}'", "Add the code to make your name show up"]

  let counter = 0;

  stepButton.addEventListener('click', (e) => {
    e.preventDefault();
    const newLI = document.createElement('li')
    let i = counter
    newLI.innerHTML = stepArr[i];
    orderList.appendChild(newLI);
    stepButton.innerHTML = "Click for next Step";
    counter++
  })


})

function addName {
  const yourName = document.getElementById('yourName');
//ADD YOUR CODE TO MAKE YOUR NAME SHOW UP IN NAMES LIST
  
  
}



