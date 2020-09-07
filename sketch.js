
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2,height/4,width/7,20);	
	bobObject1 = new Bob(width/2-80,height/4+500,40);
	bobObject2 = new Bob(width/2-40,height/4+500,40);
	bobObject3 = new Bob(width/2,height/4+500,40);
	bobObject4 = new Bob(width/2+40,height/4+500,40);
	bobObject5 = new Bob(width/2+80,height/4+500,40);

	Engine.run(engine);
  
}


function draw() {
  background(230);
  rectMode(CENTER);

	roof.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
 
}



