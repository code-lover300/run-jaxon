var path,pathImg;
var runner;
function preload(){
  //pre-load images
pathImg = loadImage("path.png");
runner_moving = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);

  //create sprites here
  path = createSprite(200,200);
  path.addImage("pathImg",pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  runner = createSprite(200,200,30,40);
  runner.addAnimation("runner_moving",runner_moving);
  runner.scale = 0.1;

}

function draw() {
  background(0);

 if (path.y > 400){
   path.y = height/2;
 }
 runner.x = World.mouseX;
  drawSprites();
}
