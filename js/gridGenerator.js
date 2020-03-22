// import { number } from "prop-types";

// design pattern
let pattern1 = " " + "#";
let pattern2 = "#" + " ";

// create function to generate grid and test if odd number with modulus operator
function getGrid(gridWidth) {
//  let output1 = pattern1.repeat(gridWidth) + "\n";
 let output1 = pattern1.repeat(gridWidth) + "<br/>";


//  let output2 = pattern2.repeat(gridWidth) + "\n";
 let output2 = pattern2.repeat(gridWidth) + "<br/>";

 let output3 = output1 + output2;
 let result = output3.repeat(gridWidth/2);
 
//  use modulus operator to test if grid is even numbered
  let gridHeight = gridWidth % 2;

  if (gridHeight == 0) {
    console.log(result);
    document.getElementById("getGrid").innerHTML = result;

    // if it isn't even, then add code from 1st line
  } else { console.log(result + output1)
    document.getElementById("getGrid").innerHTML = result + output1;
         }
}

function submitButtonFunction() {
   event.preventDefault();
   let number = document.getElementById("number").value;
    console.log(number);
    getGrid(number);
  
}
