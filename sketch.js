
var engine, world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,380,1200,20);
	paper= new Paper(800,370,10,"",2);
	dustbin1= new Dustbin(900,370,10,80);
	dustbin2= new Dustbin(775,370,10,80);
	dustbin3= new Dustbin(825,370,125,10);
	Engine.run(engine);
  
}


function draw() {
	background(0);
    Engine.update(engine);
  background(0);
  
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

function KeyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:85,y:-85});
	}
}


