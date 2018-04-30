//maps
var map = [
    [6, 0, 3, 3, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1],
    [0, 13, 0, 3, 3, 0, 9, 1, 1, 2, 1, 0, 0, 1],
    [3, 3, 12, 3, 0, 0, 12, 11, 2, 2, 0, 8, 0, 1],
    [3, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 1],
    [3, 0, 0, 8, 0, 0, 0, 5, 4, 0, 0, 0, 9, 0],
    [3, 8, 0, 1, 1, 1, 2, 2, 0, 0, 0, 0, 0, 0],
    [3, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0, 7, 0],
    [3, 0, 0, 2, 2, 1, 1, 1, 0, 7, 0, 0, 1, 1],
    [1, 0, 0, 5, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 2, 2, 0, 0, 8, 0, 0, 0, 0, 0, 0, 1],
    [2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 7, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  var gameObjects = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 14, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10]
  ];
  //control
  var stage = document.querySelector("#stage"),
      output = document.querySelector("#output"),
      info = document.querySelector("#info"),
      input = document.querySelector("#input"),
      btn = document.querySelector("button"),
      playerInput = 0,
      health_indicator = document.querySelector("#health_indicator"),
      dragon_health_indicator = document.querySelector("#dragon_health_indicator"),
      gameMassage = "Welcome to mistery forest! Your aim here is to reach mountain area and get treasure, that is protected by dragon. Use arrow keys to move. Red line above is your health, blue - dragon's health";
  
  //objects
  var GRASS = 0,
      FOREST = 1,
      RIVER = 2,
      MOUNTAINS = 3,
      TROLL = 4,
      BRIDGE = 5,
      TREASURE = 6,
      GOLD = 7,
      RABBIT = 8,
      FIRE = 9,
      PLAYER = 10,
      SWORD = 11,
      BLACK_MAGE = 12,
      DRAGON = 13,
      WOLF = 14;
  
  var ROWS = map.length,
      COLUMNS = map[0].length;
  
  var SIZE = 50;
  var step = 71;
  //keys
  var UP = 38,
      DOWN = 40,
      RIGHT = 39,
      LEFT = 37,
      ONE = 49,
      TWO = 50;
  //player pos
  var playerRow,
      playerColumn, 
      wolfRow,
      woldColumn;
  
  //game info
  var gold = 0,
      rabbits = 0,
      health = 10,
      dragonsHealth = 10,
      hasSword = false,
      sword = "No",
      gameWon = false;
  
  var playerSkill,
      rabbitSkill,
      enemySkill;
  
  
  window.addEventListener("keydown", keydownHandler, false);
  function keydownHandler(event){
    switch(event.keyCode) {
      case UP:
        if(playerRow > 0){
          if(map[playerRow - 1][playerColumn] !== RIVER && map[playerRow - 1][playerColumn] !== MOUNTAINS && map[playerRow - 1][playerColumn] !== FOREST){
             gameObjects[playerRow][playerColumn] = 0;
             playerRow--;
             gameObjects[playerRow][playerColumn] = PLAYER;
          }
        }
        break;
       case DOWN:
        if(playerRow < ROWS -1){
          if(map[playerRow + 1][playerColumn] !== RIVER && map[playerRow + 1][playerColumn] !== MOUNTAINS && map[playerRow + 1][playerColumn] !== FOREST) {
            gameObjects[playerRow][playerColumn] = 0;
            playerRow++;
            gameObjects[playerRow][playerColumn] = PLAYER;
          }
        }
        break;
      case LEFT:
        if(playerColumn > 0){
          if(map[playerRow][playerColumn - 1] !== RIVER && map[playerRow][playerColumn - 1] !== MOUNTAINS && map[playerRow][playerColumn - 1] !== FOREST && map[playerRow][playerColumn - 1] !== BRIDGE) {
            gameObjects[playerRow][playerColumn] = 0;
            playerColumn--;
            gameObjects[playerRow][playerColumn] = PLAYER;
          }
        }
        break;
      case RIGHT:
        if(playerColumn < COLUMNS - 1) {
          if(map[playerRow][playerColumn + 1] !== RIVER && map[playerRow][playerColumn + 1] !== MOUNTAINS && map[playerRow][playerColumn + 1] !== FOREST && map[playerRow][playerColumn + 1] !== BRIDGE) {
            gameObjects[playerRow][playerColumn] = 0;
            playerColumn++;
            gameObjects[playerRow][playerColumn] = PLAYER;
          }
        }
        break;
      case ONE:
        bribe();
        break;
      case TWO:
        fightGoblin();
        break;
    }
    switch(map[playerRow][playerColumn]){
      case GOLD:
        fight();
        console.log("fight the goblin to get his gold");
        break;
      case RABBIT:
        catchRabbit();
        break;
      case TROLL:
        gameMassage = "To go through the brige you can bribe the troll, if you have enough money, or fight. Write 1 to bribe, 2 - to fight.";
        
        break;
      case FIRE:
        addHealth();
        break;
      case BLACK_MAGE:
        fightBlackMage();
        break;
      case DRAGON:
        fightDragon();
        break;
      case SWORD:
        takeSword();
        break;
      case TREASURE:
        gameWon = true;
        endGame();
        break;
    }
  
    if(health == 0) {
      endGame();
    }
    render();
    
  }
  
  function moveWolf() {
    var UP = 1, 
        DOWN = 2,
        LEFT = 3,
        RIGHT = 4;
    var validDirections = [];
    var direction = undefined;
    if(wolfRow > 0) {
      var thingAbove = map[wolfRow - 1][wolfColumn];
      if(thingAbove === GRASS) {
        validDirections.push(UP);
      }
    }
     if(wolfRow < ROWS - 1) {
     var thingBelove = map[wolfRow + 1][wolfColumn];
        if(thingBelove === GRASS) {
          validDirections.push(DOWN);
        }
    }
     if(wolfColumn > 0) {
     var thingToTheLeft = map[wolfRow][wolfColumn - 1];
      if(thingToTheLeft === GRASS) {
        validDirections.push(LEFT);
      }
    }
     if(wolfColumn < COLUMNS - 1) {
     var thingToTheRight = map[wolfRow][wolfColumn + 1];
      if(thingToTheRight === GRASS) {
        validDirections.push(RIGHT);
      }
    }
    var randomNumber = Math.floor(Math.random()*validDirections.length);
    direction = validDirections[randomNumber];
  
    switch(direction){
      case UP:
        gameObjects[wolfRow][wolfColumn] = 0;
        wolfRow--;
        gameObjects[wolfRow][wolfColumn] = WOLF;
        break;
      case DOWN:
        gameObjects[wolfRow][wolfColumn] = 0;
        wolfRow++;
        gameObjects[wolfRow][wolfColumn] = WOLF;
        break;
       case LEFT:
        gameObjects[wolfRow][wolfColumn] = 0;
        wolfColumn--;
        gameObjects[wolfRow][wolfColumn] = WOLF;
        break;
       case RIGHT:
        gameObjects[wolfRow][wolfColumn] = 0;
        wolfColumn++;
        gameObjects[wolfRow][wolfColumn] = WOLF;
        break;
      }
      if(gameObjects[playerRow][playerColumn] === WOLF){
       gameMassage = "Be careful, wolf can kill you!";
       health -= 2;
  }
    console.log(playerRow, playerColumn, wolfRow, wolfColumn);
  }
  
  function render(){
    if(stage.hasChildNodes()){
      for(var i = 0; i < ROWS*COLUMNS; i++){
        stage.removeChild(stage.firstChild);
      }
    }
    for(var row = 0; row < ROWS; row++){
      for(var column = 0; column < COLUMNS; column++){
        if(gameObjects[row][column] === PLAYER) {
          playerRow = row;
          playerColumn = column;
        }
        if(gameObjects[row][column] === WOLF) {
          wolfRow = row;
          wolfColumn = column;
        }
        var cell = document.createElement("img");
        cell.setAttribute("class", "cell");
        stage.appendChild(cell);
        switch(map[row][column]){
          case GRASS:
            cell.src = "https://static1.squarespace.com/static/56bcfd7607eaa0ef9e56d1e9/t/56d838142fe131758d03e490/1457010712082/stripe+background-light+grey.png?format=1500w";
            break;
          case FOREST: 
            cell.src = "img/shrub-lg.png";
            break;
          case RIVER: 
            cell.src = "img/water.png";
            break;
          case MOUNTAINS:
            cell.src = "img/stone.png";
            break;
          case TROLL:
            cell.src = "img/troll.png";
            break;
          case BRIDGE:
            cell.src = "img/bridge.jpg";
            break;
          case TREASURE:
            cell.src = "img/treasure.png";
            break;
          case GOLD:
            cell.src = "img/gold-goblin.png";
            break;
          case RABBIT:
            cell.src = "img/rabbit.png";
            break;
          case FIRE:
            cell.src = "img/fireplace.jpg";
            break;
          case SWORD:
            cell.src = "img/sword.png";
            break;
          case BLACK_MAGE:
            cell.src = "img/black-mage.png";
            break;
          case DRAGON:
            cell.src = "img/dragon.gif";
            break;
        }
        switch(gameObjects[row][column]){
          case PLAYER:
            cell.src = "img/player.png";
            break;
           case WOLF:
            cell.src = "http://pngimg.com/uploads/wolf/wolf_PNG362.png";
            break;
        }
        cell.style.top = row*SIZE + "px";
        cell.style.left = column*SIZE + "px";
  
      }
    }
    moveWolf(); 
    output.innerHTML = gameMassage;
    health_indicator.style.width = health*step + "px";
    info.innerHTML = "Gold: " + gold + "<br /> Health: " + health + "<br /> Rabbits: " + rabbits + "<br /> Dragon health: " + dragonsHealth + "<br /> Magic Sword: " + sword;
   
  }
  render();
  
  //actions
  
  function catchRabbit() {
    var UP = 1, 
        DOWN = 2,
        LEFT = 3,
        RIGHT = 4;
    var validDirections = [];
    if(playerRow > 0) {
      var thingAbove = map[playerRow - 1][playerColumn];
      if(thingAbove === GRASS) {
        validDirections.push(UP);
      }
    }
     if(playerRow < ROWS - 1) {
     var thingBelove = map[playerRow + 1][playerColumn];
        if(thingBelove === GRASS) {
          validDirections.push(DOWN);
        }
    }
     if(playerColumn > 0) {
     var thingToTheLeft = map[playerRow][playerColumn - 1];
      if(thingToTheLeft === GRASS) {
        validDirections.push(LEFT);
      }
    }
     if(playerColumn < COLUMNS - 1) {
     var thingToTheRight = map[playerRow][playerColumn + 1];
      if(thingToTheRight === GRASS) {
        validDirections.push(RIGHT);
      }
    }
    var randomNumber = Math.floor(Math.random()*validDirections.length);
    var direction = validDirections[randomNumber];
  
     playerSkill = Math.ceil(Math.random()*5);
     rabbitSkill = Math.ceil(Math.random()*5);
    if(playerSkill > rabbitSkill) {
      rabbits++;
      map[playerRow][playerColumn] = 0;
      gameMassage = "You catch the rabbit. Now move to the fireplace to cook it.";
    }
    else {
    switch(direction){
      case UP:
        map[playerRow][playerColumn] = 0;
        playerRow--;
        map[playerRow][playerColumn] = RABBIT;
        break;
      case DOWN:
        map[playerRow][playerColumn] = 0;
        playerRow++;
        map[playerRow][playerColumn] = RABBIT;
        break;
       case LEFT:
        map[playerRow][playerColumn] = 0;
        playerColumn--;
        map[playerRow][playerColumn] = RABBIT;
        break;
       case RIGHT:
        map[playerRow][playerColumn] = 0;
        playerColumn++;
        map[playerRow][playerColumn] = RABBIT;
        break;
      }
      gameMassage = "You missed the rabbit, it more nimble than you.";
    }
    console.log(playerSkill, rabbitSkill);
  }
  
  function fight(){
    playerSkill = Math.ceil(Math.random()*5);
    enemySkill = Math.ceil(Math.random()*5);
    goldAmount = Math.ceil(Math.random()*5);
    if(playerSkill > enemySkill) {
      console.log(playerSkill, enemySkill);
      map[playerRow][playerColumn] = 0;
      gold+=goldAmount;
      gameMassage = "You got " + goldAmount + " golden coins.";
    }
    else{
      gameMassage = "Goblin stronger than you! Catch rabbits to improve your health.";
      health -= 2;
      
      gameObjects[playerRow][playerColumn] = 0;
      playerColumn++;
      gameObjects[playerRow][playerColumn] = PLAYER;
    }
    if(health <= 0) {
      endGame();
    }
  }
  function fightGoblin(){
    playerSkill = Math.ceil(Math.random()*5);
    enemySkill = Math.ceil(Math.random()*5);
    if(playerSkill > enemySkill) {
      map[playerRow][playerColumn] = 0;
      gameObjects[playerRow][playerColumn] = 0;
      playerColumn -= 2;
      gameObjects[playerRow][playerColumn] = PLAYER;
      gameMassage = "You successfully crossed the bridge. But you can't move back. Now you need to find magic sword. It will help you to beat the dragon. But be careful, black mage more powerful than you.";
    }
    else{
      gameMassage = "It's not so easy to beat the goblin. He is stronger than you. Try to bribe him.";
      health -= 2;
      
      gameObjects[playerRow][playerColumn] = 0;
      playerColumn++;
      gameObjects[playerRow][playerColumn] = PLAYER;
    }
    if(health <= 0) {
      endGame();
    }
  }
  function fightBlackMage(){
    playerSkill = Math.ceil(Math.random()*5);
    enemySkill = Math.ceil(Math.random()*7);
    if(playerSkill > enemySkill) {
      map[playerRow][playerColumn] = 0;
  
      gameMassage = "You are almost reach the aim.";
    }
    else{
      gameMassage = "Be careful. He is very powerful mage.";
      health -= 2;
      
      gameObjects[playerRow][playerColumn] = 0;
      playerRow++;
      gameObjects[playerRow][playerColumn] = PLAYER;
    }
    if(health <= 0) {
      endGame();
    }
    console.log(enemySkill, playerSkill);
  }
  function fightDragon() {
    playerSkill = Math.ceil(Math.random()*5);
    enemySkill = Math.ceil(Math.random()*5);
    if(hasSword){
      playerSkill += 2;
    }
    if(playerSkill > enemySkill) {
  
      dragonsHealth -= 2;
      dragon_health_indicator.style.width = dragonsHealth*step + "px";
      gameObjects[playerRow][playerColumn] = 0;
      playerColumn++;
      gameObjects[playerRow][playerColumn] = PLAYER;
      if(dragonsHealth === 0) {
        map[playerRow][playerColumn - 1] = 0;
        gameMassage = "You won the dragon!";
      }
      }
     else{
      health -= 2;
      
      gameObjects[playerRow][playerColumn] = 0;
      playerColumn++;
      gameObjects[playerRow][playerColumn] = PLAYER;
     }
     if(health <= 0) {
        endGame();
      }
    console.log(playerSkill, enemySkill);
    }
  
  function addHealth(){
    if(rabbits > 0){
  
      if(health<10){
        health +=rabbits;
        rabbits = 0;
        if(health > 10) {
          health = 10;
        }
        
      }
      else{
        gameMassage = "You have enough health";
      }
    } 
    else{
      gameMassage = "You don't have enough rabbits to cook";
    }
  }
  
  
  
  function takeSword() {
    hasSword = true;
    sword = "Yes";
    map[playerRow][playerColumn] = 0;
    gameMassage = "You took the sword."
  }
  
  function bribe(){
    var needMoneyToBribe = Math.ceil(Math.random()*10);
    if(gold < needMoneyToBribe) {
      gameMassage = "You need " + needMoneyToBribe + " coins to bribe troll. " + "You dont have enough money. Try again";
      gameObjects[playerRow][playerColumn] = 0;
      playerColumn++;
      gameObjects[playerRow][playerColumn] = PLAYER;
    }
    else{
        gold -= needMoneyToBribe;
        map[playerRow][playerColumn] = 0;
        gameObjects[playerRow][playerColumn] = 0;
        playerColumn-=2;
        gameObjects[playerRow][playerColumn] = PLAYER;
        gameMassage = "You successfully crossed the bridge. But you can't move back. Now you need to find magic sword. It will help you to beat the dragon. But be careful, black mage more powerful than you.";
    }
  }
  function endGame(){
    if(health <= 0) {
      gameMassage = "You are dead!";
      gameObjects[playerRow][playerColumn] = 0;
    }
    if(gameWon){
      gameMassage = "Congratulations! You won!";
    }
    console.log("dead");
    window.removeEventListener("keydown", keydownHandler, false);
  }