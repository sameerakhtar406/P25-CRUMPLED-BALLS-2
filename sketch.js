
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var DB1,DB2,D3
function preload()
{
	
}

function setup() {
createCanvas(1600, 700);
rectMode(CENTER);

engine = Engine.create();
world = engine.world;

//Create the Bodies Here.
ground = new Ground(width/2,670,width,20)

dustbinObj=new db(1200,650);
    	
ball = new paper(200,450,70)	
	
Engine.run(engine);
}

function draw() {
rectMode(CENTER);
background(190);
rectMode(CENTER);

ball.display();
ground.display();
dustbinObj.display();

drawSprites();
 
}
function keyPressed() 
{ if (keyCode === UP_ARROW) {
Matter.Body.applyForce(ball.body,ball.body.position,{x:125,y:-160});
 } 
}

