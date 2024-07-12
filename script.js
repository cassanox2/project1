// console.log('hello world')
// let demo =
//   document.getElementById('demo')
// console.log(demo.innertext)
  
// demo.innertext = 'Good morning dear!'
let message = 'Cassano {CEO}'
demo.innerText = message;
demo.style.backgroundColor = 'purple'
demo.innerText = message;
//  console.log(demo.innerText)
const squares = document.querySelectorAll('.colorSquare')

// Assuming 'squares' is an array of DOM elements representing your squares
squares.forEach(square => {
    square.onclick = () => { 
        timesClicked[square.value] += 1;  // Increment the click count for the corresponding color
        square.innerText = timesClicked[square.value] 
          // Update the text inside the square to show the count
        // console.log(square.value);  // Log the color value to the console
    }
});

const timesClicked = {'red': 0, 'yellow': 0,'green': 0};
function clearScores() {
  timesClicked.red = 0
  timesClicked.yellow = 0
  timesClicked.green = 0
  squares.forEach(square => {
    square.innerText = ''
  })
};
const CleargameBtn = document.getElementById('Clear-game')
ClearGameBtn.onclick = () => clearScores()

 
 function clearScores() {
   squares.forEach(square => square.value = '')
};
