// AREA OF TRAPEZOID ASSIGNMENT

// EVENT LISTENERS
document.getElementById ('calculate-btn').addEventListener ('click', calcTrapArea);

//EVENT FUNCTIONS
function calcTrapArea() {
    // Find what user typed in the boxes
    let topbase = Number (document.getElementById ('numbox1').value)
    let bottombase = Number (document.getElementById ('numbox2').value)
    let trapezoid =  Number (document.getElementById ('numbox3').value)
// CONVERT WHAT THE USER HAS TYPED IN 
    let area = ((topbase+bottombase)*trapezoid/2)

// ANSWER DISPLAY WHERE DASHES ARE 
document.getElementById('area-result').innerHTML= area;
}

