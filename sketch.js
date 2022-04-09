var backgroundImg;
var cupHead, cupHeadImg;

function preload(){
  backgroundImg = loadImage("hericc-main/bip.jpg");
  cupHeadImg = loadAnimation("hericc-main/cupHead00.png","hericc-main/cupHead01.png","hericc-main/cupHead02.png","hericc-main/cupHead03.png",
 "hericc-main/cupHead04.png","hericc-main/cupHead05.png","hericc-main/cupHead06.png","hericc-main/cupHead07.png",
 "hericc-main/cupHead08.png","hericc-main/cupHead09.png","hericc-main/cupHead10.png","hericc-main/cupHead11.png",
  "hericc-main/cupHead12.png","hericc-main/cupHead13.png","hericc-main/cupHead14.png","hericc-main/cupHead15.png")
}

function setup() {
  createCanvas(1400,800);

  cupHead = createSprite(100,480);
  cupHead.addAnimation("cupCorrendo", cupHeadImg);
}

function draw() 
{
 if(keyIsDown(RIGHT_ARROW)){
  cupHead.mirrorx =(1) 
  cupHead.velocityX = 3
 }
 if(keyIsDown(LEFT_ARROW)){
  cupHead.mirrorx = (-1)
  cupHead.velocityX -= 3
}

 
 
 
 
  background(backgroundImg);
 drawSprites()
}




