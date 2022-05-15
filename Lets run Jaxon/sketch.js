var road; 
var road_image;

var jaxon;
var jaxon_animation; 

var coin;
var coin_image;


var bomb;
var bomb_image; 

var energyDrink;
var energyDrink_image;

function preload(){
road_image = loadImage("path.png");

jaxon_animation = loadAnimation("Runner-1.png", "Runner-2.png");

coin_image = loadImage("coin.png"); 

bomb_image = loadImage("bomb.png"); 

energyDrink_image = loadImage("energyDrink.png"); 


}

function setup(){
createCanvas(500, 500); 


road = createSprite(250, 500, 300, 300); 
road.addImage("road", road_image);


jaxon = createSprite(250, 450, 10, 10); 
jaxon.addAnimation("Running", jaxon_animation)
}

function draw(){


background("black"); 
road.scale = 1.55;
jaxon.scale = 0.15; 

road.velocityY = -5; 
 if(road.y < 0){
     road.y = road.height/6; 
 }


 jaxon.x = mouseX; 
 
 //Finding coordinates
 text(mouseX+","+mouseY, mouseX, mouseY); 


spawnCoin(); 
spawnBomb(); 
spawnEnergyDrink(); 


 drawSprites(); 
}

function spawnCoin(){


if(frameCount%150==0){
coin = createSprite(200, 200, 40, 10); 
coin.addImage("coin", coin_image);

coin.velocityY = +5; 

coin.x = Math.round(random(150, 350));

coin.scale =0.7;

}

}

function spawnBomb(){
if(frameCount%200==0){
    bomb = createSprite(250, 200, 40, 10); 
    bomb.addImage("bomb", bomb_image); 

    bomb.velocityY = +3; 

    bomb.scale = 0.2; 

    bomb.x = Math.round(random(150, 220))
}


}
function spawnEnergyDrink(){
if(frameCount%225==0){
energyDrink = createSprite(275, 225, 40, 10);
energyDrink.addImage("Energy Drink", energyDrink_image)

energyDrink.velocityY = +7; 

energyDrink.scale = 0.2; 

energyDrink.x = Math.round(100, 300); 
}


}
