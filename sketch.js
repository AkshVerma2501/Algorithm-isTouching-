var fixedrect, movingrect;


function setup() {
  createCanvas(1200,400);
fixedrect = createSprite(200, 200, 50, 50);
fixedrect.shapeColor = "green";
fixedrect.debug = true;
movingrect = createSprite(400,200,50,50);
movingrect.shapeColor = "red";
movingrect.debug = true;
}


function draw()
 {
    background(0,0,0);  
  movingrect.y = World.mouseY;
  movingrect.x = World.mouseX;

  if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 && 
    fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 && 
    movingrect.y - fixedrect.y < fixedrect.width/2 + movingrect.width/2 && 
    fixedrect.y - movingrect.y < fixedrect.width/2 + movingrect.width/2)
  {
    fixedrect.shapeColor = "yellow";
  }
  else 
  {
    fixedrect.shapeColor = "green";
  }

  



  drawSprites();
  
}