
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let ball =Matter.body;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
var ball_option={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(100,10,20,ball_option)
world.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
circle(ball.position.x,ball.position.y,20);


