
function preload(){
  //pre-load images

 running = loadAnimation("Runner-1.png","Runner-2.png");

 pathImg = loadImage("path.png");
}
var redge
var ledge

function setup(){
  createCanvas(400,400);
  //create sprites here


  path = createSprite(200,180,400,20);
  path.addImage("path",pathImg);
  path.y = height /2;
  path.velocityY = 4;
  path.scale=1.2
  redge=createSprite(370,200,20,400)
  ledge=createSprite(34.5,200,20,400)
  redge.visible=false
  ledge.visible=false
  runner = createSprite(200,300,20,50);
  runner.addAnimation("running", running);
  runner.scale=0.1

}

function draw() {
  background(0);
  if (path.y > 400){
    path.y = height/2;
    runner.x=mouseX
   
    runner.collide(redge)
    runner.collide(ledge)
  }
drawSprites();
}
