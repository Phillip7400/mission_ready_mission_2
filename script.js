console.log("mission 2 connected")

let displayElement = document.getElementById("display-text")

const numBtns = document.querySelectorAll('.number-btn');
const clearBtn = document.getElementById("clear-btn")
const operationBtns = document.querySelectorAll(".operation-btn")
const solarBtn = document.getElementById('solar-btn');


let results = []



clearBtn.addEventListener("click", e => {
    location.reload()
})

// Solar fading functions 
window.onload = function() {
    setTimeout(function() {
      displayElement.style.opacity = 0;
    }, 1000); 
};
  
let clickCount = 0;
  
  solarBtn.addEventListener('click', function() {
    if (clickCount < 5) {
      clickCount++;
      displayElement.style.opacity = clickCount * 0.2;
    }
  });


// This function is to create a number in the display.
function clickNumber(event) {

    const buttonValue = event.target.textContent.trim();
    const currentDisplay = displayElement.textContent.trim();
    if (currentDisplay.length >= 8) {
        console.log("maxium 8 characters")
    } else {
        let totalNumber; 
        if (Number(currentDisplay) === 0) {
            totalNumber = buttonValue
            
        } else {
            totalNumber = displayElement.textContent + buttonValue
        }

        displayElement.textContent = totalNumber
        console.log(buttonValue)

        }
    
}


function clickOperation(event) {
   
    if (results.length > 1 && results[1] === results[0]) {
        results.splice(0,1)
    }
    // Adds the current number to the results array and clears the display
    results.push(parseFloat(currentDisplay = displayElement.textContent.trim()));
    const operation = event.target.textContent.trim()
    displayElement.textContent = ""
    if (operation === "=") {
        let finalResultStr = results.join(' ')
        console.log(`This is finalResultsStr: ${finalResultStr} this is results ${results}`)
        let finalResult = eval(finalResultStr)
        displayElement.textContent = finalResult
        results = []
        results.push(parseFloat(finalResult))
        console.log(`This is results now: ${results}`)
        
    } else {
        results.push(operation)
        console.log(results)
    }  
    
}


numBtns.forEach(num => {
    num.addEventListener("click", clickNumber);
});

operationBtns.forEach(opp => {
    opp.addEventListener("click", clickOperation)
})