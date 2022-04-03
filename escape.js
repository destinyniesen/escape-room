const readline = require("readline-sync");

const playerName = readline.question("What is your name? ");

const welcomeMessage=`Welcome, ${playerName}, to the Escape Room Game Simulator!`;


console.log(welcomeMessage);


let isAlive = true;

let hasKey = false;

while(isAlive == true){
    const menuOptions = readline.keyIn(`Press 1 to put hand in hole, Press 2 to find the key, Press 3 to open the door: `, {limit: `$<1-3>`});
switch(menuOptions) {
    case "1":
        console.log(`${playerName}, you are dead! Unfortunatly the game is over for you.`);
        isAlive = false;
        break;
        case "2":
            if(hasKey == false){
            console.log(`${playerName}, you have found the key, Awesome!!! Please continue to the menu options to exit the game.`);
            hasKey = true;}
            else
                {console.log(`${playerName}, you have already found the key. Hurry and continue through the menu options. You are waisting time!`);}
                break;
                case "3":
                    if(hasKey == false){
                    console.log(`${playerName}, you have not yet found the key, please go back to the menu and find the key first.`);}
                    else
                        {console.log(`${playerName}, you have opened the door! Congratulations you have WON the game!!!`);
                        isAlive = false;}
                        break;
                        default: console.log(`${playerName}, sorry, you have made an invalid entry.`);
}
}
