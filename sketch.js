var bg,sleep,gym,bath,brush,eat,drink,move,astronaut;

function preload(){
 bg=loadImage("images/iss.png");
 sleep=loadAnimation("images/sleep.png");
 gym=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
 eat=loadAnimation("images/eat1.png","images/eat2.png");
 brush=loadAnimation("images/brush.png");
 drink=loadAnimation("images/drink.png","images/drink2.png");
 bath=loadAnimation("images/bath1.png","images/bath2.png");
 move=loadAnimation("images/move1.png","images/move2.png");


}

function setup() {
  createCanvas(600, 500);
  
  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale=0.1;
  
}

function draw() {
 background(bg);

 textSize(20);
 fill("white");
 text("Instructions:",20,35);
 textSize(15);
 text("uparrow=brushing",20,55);
 text("downarrow=gyming",20,70); 
 text("leftarrow=eating",20,85);  
 text("rightarrow=bathing",20,100);
 text("key m=moving",20,115);

 edges=createEdgeSprites();
 astronaut.bounceOff(edges);
 
 if(keyDown("UP_ARROW")){
   astronaut.addAnimation("brushing", brush);
   astronaut.changeAnimation("brushing");
   astronaut.y=350;
   astronaut.velocityX=0;
   astronaut.velocityY=0;
 }

   if(keyDown("DOWN_ARROW")){
   astronaut.addAnimation("gyming", gym);
   astronaut.changeAnimation("gyming");
   astronaut.y=350;
   astronaut.velocityX=0;
   astronaut.velocityY=0;
 }

 if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating", eat);
  astronaut.changeAnimation("eating");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}

if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing", bath);
  astronaut.changeAnimation("bathing");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}

if(keyDown("m")){
  astronaut.addAnimation("moving", move);
  astronaut.changeAnimation("moving");
  
  astronaut.velocityX=1;
  astronaut.velocityY=1;
}

drawSprites();
}