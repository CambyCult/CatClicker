var gameData = {
    cats:0,
    catsPerClick:0,
    firstUpgradeCost: 10
}

function catchCat(){
    gameData.cats += gameData.catsPerClick;
    document.getElementById("catsCaught").innerHTML = "You have " + gameData.cats + " cats.";
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
        document.getElementById("catsCaught").innerHTML = gameData.cats + " Cats Caught"
        document.getElementById("buyCatPheromones").innerHTML = "Upgrade Cat Pheromones (Current Level " + gameData.catsPerClick + ") Cost: " + gameData.firstUpgradeCost + " Cats"
    }
}

var mainGameLoop = window.setInterval(
    function(){
        catchCat()
    }, 1000
    )

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("catCatcherSave", JSON.stringify(gameData))
    }, 15000)

var savegame = JSON.parse(localStorage.getItem("catCAtcherSave"))
    if (savegame !== null) {
        gameData = savegame
    }