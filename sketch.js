var fixedRect, movingRect;
var a,b,c,d;
function setup() {
  createCanvas(1200,800);
  a = createSprite(600, 400, 50, 80);
  a.shapeColor = "green";
  a.debug = true;
  b = createSprite(400,200,80,30);
  b.shapeColor = "green";
  b.debug = true;
  c=createSprite(100,200,50,50);
  c.shapeColor="green";
  d=createSprite(200,200,50,50);
  d.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  a.x = World.mouseX;
  a.y = World.mouseY;
  if(isTouching(a,c)){
a.shapeColor="orange";
c.shapeColor="orange";

  }
  else{
    a.shapeColor="green";
    c.shapeColor="green";
  }

  
  drawSprites();
}
