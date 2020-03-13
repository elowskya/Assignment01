//create a player object 

let player = {
    life: 50,
    defense: 1,
    strength: 5,
}

//create enemy object
let beginningEnemy = {
    life: 5,
    defense: 0,
    strength: 2
}

let beginningEnemy2 = {
    life: 7,
    defense: 0,
    strength: 3
}

// beginning levels objects
let castle = {
    name: "castle",
    enemies: 5,
    enemyAttack: function(beginningEnemy) {
    console.log("haha 1st attack!")
    }
}

let woods = {
    name: "woods",
    enemies: 7,
    enemyAttack: function(beginningEnemy2) {
    console.log("haha woods attack!")
    }
}

function area3(choice) {
    console.log("Welcome to area " + choice.name + " you have " + choice.enemies + " enemies to kill");
    

    
}

// start game
function area1 () {
    let proceed = window.confirm("do you want to proceed?");
    console.log(proceed);
    if (proceed == true) {
        player.life += 1;
        function area2 () {
            let direction = window.confirm("do you wish to go to the castle?");
            if (direction == true) {
                console.log("great you are going to the castle" + direction);
               let choice = castle;
               area3(choice);
            } else {
                console.log("great! You are going to the woods" + direction);
                let choice = woods;
                area3(choice);
            }
        }
        console.log(player.life + " life");
        area2();
    } else {
        player.life -= 1;
        console.log("too bad " + player.life);
    }
}

area1();
