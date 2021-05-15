var gardenImg
var cat
var mouse
function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png")
    catImg1 = loadImage("images/cat1.png")
    catImg2 = loadImage("images/cat2.png")
    catImg3 = loadImage("images/cat3.png")
    catImg4 = loadImage("images/cat4.png")
    mouseImg1 = loadImage("images/mouse1.png")
    mouseImg2 = loadImage("images/mouse2.png")
    mouseImg3 = loadImage("images/mouse3.png")
    mouseImg4 = loadImage("images/mouse4.png")

    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
mouse = createSprite(500,600,40,30)
cat = createSprite(150,600,50,40)
cat.addImage(catImg1)
cat.scale =0.2
mouse.addImage(mouseImg1)
mouse.scale = 0.2
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2){
  cat.addAnimation("Cathappy",catImg4)  
  cat.changeAnimation("Cathappy")
  mouse.addAnimation("mouseHappy",mouseImg2)
  mouse.changeAnimation("mouseHappy")
}
keyPressed()
    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing", mouseImg3);
    mouse.changeAnimation("mouseTeasing");
mouse.x = mouse.x - 5
}
  //For moving and changing animation write code here


}
