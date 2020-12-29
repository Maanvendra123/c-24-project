
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground=new Ground(800,680,1600,20)
dustbinb=new Dustbin(1200,650,200,20)
paper=new Paper(100,300,10)
ground= Bodies.rectangle(width/2,400,width,10)
{
	isStatic:true
}
World.add(world,ground)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbinb.display();
  paper.display();
  
  
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}


