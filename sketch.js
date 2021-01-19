var canvas;
var music;
var block1,block2,block3,block4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);
    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 4;
    ball.velocityY = 9;
    //create 4 different surfaces
     block1 = createSprite(50,590,150,20);
     block1.shapeColor = "green";
     block2 = createSprite(230,590,150,20);
     block2.shapeColor = "pink";
     block3 = createSprite(410,590,150,20);
     block3.shapeColor = "red";
     block4 = createSprite(590,590,150,20);
     block4.shapeColor = "yellow";


    //create box sprite and give velocity
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites(); 
    ball.bounceOff(edges);
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        
    }

    if(block2.isTouching(ball)){
       ball.velocityX = 0;
       ball.velocityY = 0;
       music.stop();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
       
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
      
    }
     
    music.play(); 

    if(isTouching(ball,block1)){
      ball.shapeColor = "blue";
      block1.shapeColor = "blue";
     }
     else {
        ball.shapeColor = "blue";
        block1.shapeColor = "green";
      }
    if(isTouching(ball,block2)){
      ball.shapeColor = "blue";
      block2.shapeColor = "blue";
    }
    else {
      ball.shapeColor = "blue";
      block2.shapeColor = "pink";
    }
    if(isTouching(ball,block3)){
      ball.shapeColor = "blue";
      block3.shapeColor = "blue";
    }
    else {
       ball.shapeColor = "blue";
       block3.shapeColor = "red";
    }
    if(isTouching(ball,block4)) {
      ball.shapeColor = "white";
      block4.shapeColor = "white";
    }
    else {
       ball.shapeColor = "blue";
       block4.shapeColor = "yellow";
    }

drawSprites();
    //add condition to check if box touching surface and make it box
      }
    function isTouching(block1,block2){
      if (block1.x - block2.x < block2.width/2 + block1.width/2
        && block2.x - block1.x < block2.width/2 + block1.width/2
        && block1.y - block2.y < block2.height/2 + block1.height/2) {
       return true;
      }
      else{
          return false;
              }
            }
