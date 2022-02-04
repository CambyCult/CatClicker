
var gameData = {
    cats: Math.trunc(0),
    catsPerClick:0,
    firstUpgradeCost: 10,
    secondUpgradeCost: 100,
    lastTick: Date.now()
}

const upgradeLevels = [1, 1];

function catchCat(){
    gameData.cats += gameData.catsPerClick;
    document.getElementById("catsCaught").innerHTML = "You have " + Math.trunc(gameData.cats) + " Cats.";
}


function showHide() {
    var x = document.getElementById("shopMenu")
    if (x.style.visibility = "hidden"){
        x.style.visibility = "visible"
        } else {
            x.style.visibility = "hidden"}
    }


        function buyCatNet(){
            if (gameData.catsPerClick <= 0) {
                gameData.catsPerClick += 1
            }
            if (gameData.catsPerClick >= 1) {
                document.getElementById("buyCatNet").style.visibility = "hidden";
            }
        }

        function buyCatPheromones(){
            if (gameData.cats >= gameData.firstUpgradeCost) {
                gameData.cats -= gameData.firstUpgradeCost
                gameData.catsPerClick += 1
                gameData.firstUpgradeCost *= 2
                upgradeLevels[0] += 1,
                document.getElementById("catsCaught").innerHTML = "You have " + gameData.cats + " Cats"
                document.getElementById("buyCatPheromones").innerHTML = "Upgrade Cat Pheromones (Level " + upgradeLevels[0] + ") Cost: " + gameData.firstUpgradeCost + " Cats"
            }
        }

        function buyFeatherWand(){

            if( gameData.cats >= gameData.secondUpgradeCost) {
                gameData.cats -= gameData.secondUpgradeCost
                gameData.catsPerClick += 10
                gameData.secondUpgradeCost *= 2
                upgradeLevels[1] += 1,
                document.getElementById("buyFeatherWand").innerHTML = "Upgrade Feather Wand (Level " + upgradeLevels[1] + ") Cost: " + gameData.secondUpgradeCost + " Cats"
            }
        }

var mainGameLoop = window.setInterval( function(){
        catchCat(),
        diff = Date.now() - gameData.lastTick;
        gameData.lastTick = Date.now()
        gameData.cats += gameData.catsPerClick * (diff/1000)
        document.getElementById("catsCaught").innetHTML = "You have " + gameData.cats + " Cats"
    }, 1000)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("catCatcherSave", JSON.stringify(gameData))
    }, 15000)


var saveGame = JSON.parse(localStorage.getItem("catCatcherSave"))
    if (saveGame !== null) {
        gameData = saveGame
    }
 
   




    /*
function format(number, type) {
    let exponent = Math.floor(Math.log10(number))
    let mantissa = number / Math.pow(10, exponent)
    if (exponent < 3) return number.toFixed(1)
    if (type == "scientific") return mantissa.toFixed(2) + "e" + exponent
    if (type == "engineering") return (Math.pow(10, exponent % 3) * mantissa).toFixed(2) + "e" + (Math.floor(exponent / 3) * 3)
}
*/