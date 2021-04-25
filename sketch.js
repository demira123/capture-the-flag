//STORY: Sally loved playing Capture the Flag at her summer camp. When she left camp, she really missed playing Capture the Flag. She wants to play an online version of Capture the Flag.Can you help Sally create the game?
function preload(){
    circle1=loadImage("c1.png")
    circle2=loadImage("c2.png")
    player1img=loadImage("boy1.png")
    defender1img=loadImage("defender1.png")
    defender2img=loadImage("defender2.png")
    defender3img=loadImage("defender3.png")
    defender4img=loadImage("defender4.png")

}

function setup(){
//sprites and shape colors
player1 = createSprite(200,360,10,10);
player1.addImage(player1img)
player1.scale=0.3
 defender1 = createSprite(200,150,10,10);
defender1.addImage(defender1img)
defender1.scale=0.3
 defender2 = createSprite(74,92,10,10);
 defender2.scale=0.3
defender2.addImage(defender2img)
 defender3 = createSprite(330,92,10,10);
defender3.addImage(defender3img)
defender3.scale=0.4

 defender4 = createSprite(200,22,10,10);
defender4.addImage(defender4img)
defender4.scale=0.3

flag = createSprite(183,57,12,10);
flag.shapeColor="red";
flagstick=createSprite(178,62,3,20);
flagstick.shapeColor="black";

//animations for jail and circle surrounding the flag
c1=createSprite(178,65,50,50)
c1.addImage(circle1)
c1.scale=0.5
c2=createSprite(40,135,40,40)
c2.addImage(circle2)
c2.scale=0.2
//velocities for flag defenders
defender1.velocityX=3;
defender1.velocityY=-3;
defender2.velocityX=-3;
defender2.velocityY=3;
defender3.velocityX=3;
defender3.velocityY=3;
defender4.velocityX=-3;
defender4.velocityY=-3;

//gamestate
 gameState = "serve";
edges = createEdgeSprites();
}

function draw() {
 background(7, 99, 33);
 
 //adding depth to the defenders & players
defender1.depth=c1.depth+1
defender2.depth=c1.depth+1
defender3.depth=c1.depth+1
defender4.depth=c1.depth+1
player1.depth=c1.depth+1

defender1.depth=c2.depth+1
defender2.depth=c2.depth+1
defender3.depth=c2.depth+1
defender4.depth=c2.depth+1
player1.depth=c2.depth+1

flag.depth=c1.depth+1
flagstick.depth=c1.depth+1
 //AI for defender 1
 defender1.x=player1.x;
//text for jail
 fill("black");
 text("JAIL",40,105);
 
 //arrow controls for player1
 if(keyDown(UP_ARROW)){
  player1.velocityX=0;
 player1.velocityY=-2;
  }
  if(keyDown(DOWN_ARROW)){
    player1.velocityX=0;
    player1.velocityY=2;
  }
  if(keyDown(LEFT_ARROW)){
  player1.velocityX=-2;
 player1.velocityY=0;
  }
  if(keyDown(RIGHT_ARROW)){
  player1.velocityX=2;
  player1.velocityY=0;
  }
  
  //defenders bounce off edges
 defender1.bounceOff(edges);
 defender2.bounceOff(edges);
 defender3.bounceOff(edges);
 defender4.bounceOff(edges);
 //conditions for gamestate
 if (gameState === "serve") {
    text("Press Arrow Keys to Play!",150,180);
  }
  
  if (keyDown("RIGHT_ARROW")||keyDown("LEFT_ARROW")||keyDown(DOWN_ARROW)||keyDown(UP_ARROW) &&  gameState === "serve"){
    gameState = "play";
    
  }
 
  

 
 player1.bounceOff(edges);
 for (var i = 0; i < 400; i=i+20) {
  line(i,200,i+10,200);
  
   }
 
 
 
 if(player1.isTouching(defender1)||player1.isTouching(defender2)||player1.isTouching(defender3)||player1.isTouching(defender4)){
 player1.x=46;
 player1.y=126; 
 }
//you win
 if(player1.isTouching(flag)||player1.isTouching(flagstick)){
   fill("black");
   textSize(30);
   text("You Won!!",140,200);
   defender1.velocityX=0;
defender1.velocityY=0;
defender2.velocityX=0;
defender2.velocityY=0;
defender3.velocityX=0;
defender3.velocityY=0;
defender4.velocityX=0;
defender4.velocityY=0;
player1.velocityX=0;
player1.velocityY=0;
gameState = "over";
    text("Press 'R' to Restart",120,180);

        
 }
 //you lose
 if(player1.isTouching(c2)){
   gameState = "over";
    text("Press 'R' to Restart",110,180);
   textSize(20);
   fill("red");
   text("YOU LOST",140,200);
   
   defender1.velocityX=0;
defender1.velocityY=0;
defender2.velocityX=0;
defender2.velocityY=0;
defender3.velocityX=0;
defender3.velocityY=0;
defender4.velocityX=0;
defender4.velocityY=0;
player1.velocityX=0;
player1.velocityY=0;

}
if (keyDown("r") && gameState === "over") {
    gameState = "serve";
    reset();
  }
  
  
  drawSprites();
}
//function for resetting the game
function reset() {
  player1.x = 200;
  player1.y =360;
  player1.velocityX = 0;
  player1.velocityY = 0;
  defender1.velocityX=3;
defender1.velocityY=-3;
defender2.velocityX=-3;
defender2.velocityY=3;
defender3.velocityX=3;
defender3.velocityY=3;
defender4.velocityX=-3;
defender4.velocityY=-3;
}
