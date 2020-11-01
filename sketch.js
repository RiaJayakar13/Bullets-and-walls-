
var bullet,wall,speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);
speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);
 wall= createSprite(1200, 200, thickness,height/2);
 wall.shapeColor="yellow";
bullet= createSprite(50, 200, 50,5);
 bullet.velocityX=speed;
 bullet.shapeColor="red";
}

function draw() {
  background(255,255,255);
if(hasCollided(bullet,wall)){
bullet.velocityX=0;
var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness) ;
if(damage>10)
{
  bullet.shapeColor=color(255,0,0);
}
if(damage<10)
{
  bullet.shapeColor=color(0,255,0);
}
}
  drawSprites();
}
function hasCollided(bullet,wall){
bulletrightedge=bullet.x+bullet.width;
wallleftedge=wall.x;
if(bulletrightedge>=wallleftedge){
return true ;


}
return false ; 

}
