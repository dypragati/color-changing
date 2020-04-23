var fixed, moving;
function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(400, 400, 50, 50);
fixed.shapeColor = "blue";
moving.shapeColor = "blue";
}

function draw() {
  background(0); 
  moving.x = mouseX;
  moving.y = mouseY;
  if(moving.x-fixed.x<= moving.width/2 + fixed.width/2&&
    fixed.x -moving.x<= moving.width/2 + fixed.width/2
    ){
    moving.shapeColor = "orange";
    fixed.shapeColor = "orange";
  }
  else{
    moving.shapeColor = "blue";
    fixed.shapeColor = "blue";
  }
  if(moving.y-fixed.y<= moving.height/2 + fixed.height/2&&
    fixed.y -moving.y<= moving.height/2 + fixed.height/2&&
    moving.x-fixed.x<= moving.width/2 + fixed.width/2&&
    fixed.x -moving.x<= moving.width/2 + fixed.width/2
    ){
    moving.shapeColor = "orange";
    fixed.shapeColor = "orange";
  }
  else{
    moving.shapeColor = "blue";
    fixed.shapeColor = "blue";
  }

  
  drawSprites();
}