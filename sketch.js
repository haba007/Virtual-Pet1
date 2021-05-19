var dog1;
var dogImg;
var happydog;
var dataBase;
var foodS;
var foodStock;

function preload()
{
dogImg=loadImage("images/dogImg.png")
happydog=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  database=firebase.database()
  dog=createSprite(200,200)
  dog.addImage(dogImg)
  foodStock=database.ref("Food")
  foodStock.on("value",readStock)
  dog.scale=0.5
}


function draw() {  
  background(46,139,87);
  drawSprites();
 
  if (keyWentDown(UP_ARROW)){
WriteStock(foodS)
dog.addImage(happydog)


  }
textSize(20)
fill(255)
text("foodRemaining"+ foodS,100,100)
}

function readStock(data){
foodS=data.val()


}

function WriteStock(x){

if(x<=0){
x=0


}
else{
x=x-1
}
database.ref('/').update({
Food:x

})

}