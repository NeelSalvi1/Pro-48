var demon1;
var bg;



function preload() {
demon1image=loadImage("images/Demon_1.png")
bgimage=loadImage("images/Bg.jpg")
}
function setup(){
createCanvas(1800,830);
demon1 = createSprite(800,500,40,30)
demon1.addImage("demon1",demon1image);

bg=createSprite(1000,450,2000,1000);
  bg.addImage("bg",bgimage);
  bg.scale=3.4;
}



function draw() {
 background("bg")
 
  drawSprites();
}
