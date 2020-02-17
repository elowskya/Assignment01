// design pattern
let pattern1 = " " + "#";
let pattern2 = "#" + " ";

// create function to generate grid and test if odd number with modulus operator
function getGrid(gridWidth) {
 let output1 = pattern1.repeat(gridWidth) + "\n";
 let output2 = pattern2.repeat(gridWidth) + "\n";
 let output3 = output1 + output2;
 let result = output3.repeat(gridWidth/2);
 
//  use modulus operator to test if grid is even numbered
  let gridHeight = gridWidth % 2;

  if (gridHeight == 0) {
    console.log(result);

    // if it isn't even, then add code from 1st line
  } else { console.log(result + output1)
         }
}

getGrid(4);