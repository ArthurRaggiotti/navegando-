var navio , naviomexer
var seaImg , sea


function preload(){
naviomexer = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
seaImg = loadImage("sea.png")

}





function setup(){
  createCanvas(400,400);
navio = createSprite(200,200)
navio.addAnimation("balancando", naviomexer);
navio.scale=0.4




}




function draw() {




  background("blue");
    drawSprites();
}

 

