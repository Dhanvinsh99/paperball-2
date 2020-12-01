
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var paperball1;
var ground;
var box1, box2, box3;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);
	

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	paperball1 = new Paper(100, 200, 30);
	ground = new Ground(500, 780, 1000,20)
	box1 = new Box(width/2, 745, 150, 10);
	box2 = new Box(width/2+75 ,655, 10, 150)
	box3 = new Box(width/2-75,655, 10, 150)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperball1.display();
  Keypressed();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}

function Keypressed () {
	if (keyDown(UP_ARROW)) {
		Body.applyForce(paperball1.body, paperball1.body.position, {'x':20, 'y':-20});
		
	}
}
