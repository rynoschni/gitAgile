const mainDIV = document.getElementById('main');

window.addEventListener('DOMContentLoaded', () => {
  const stepButton = document.getElementById('button');
  const orderList = document.getElementById('list');

  let stepArr = ["Join repo invite", "Clone repo locally", "Create a branch with 'feature{yourName}'", "Add the code to the JS file to make your name show up"]

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

<<<<<<< HEAD
addName()
=======
  addName()
>>>>>>> 9e4e937e313309d86d110ff34e4c1b76cac3643c
})

function addName() {
  const yourName = document.getElementById('yourName');
<<<<<<< HEAD
  //ADD YOUR CODE TO MAKE YOUR NAME SHOW UP IN NAMES LIST
  yourName.innerHTML = "Erick"
  
=======
  
  yourName.innerHTML = "Ryan"
>>>>>>> 9e4e937e313309d86d110ff34e4c1b76cac3643c
}




