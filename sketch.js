const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var ball;
var hround,bar1,bar2;
var boton1,boton1;

function setup() {
	createCanvas(600, 400);
	engine = Engine.create();
	world = engine.world;
	hround =new Ground(200,395,800,10);
	right = new Ground(500,340,10,100);
	left = new Ground(370,340,10,100);

	boton1=createImg("up.png");
	boton1.position(30,30);
	boton1.size(50,50);
	boton1.mouseClicked(arriba);

	boton2=createImg("right.png");
	boton2.position(100,30);
	boton2.size(50,50);
	boton2.mouseClicked(derecha);

var ball_options= {
 restitution:0.9,
 frictionAir:0.02,
}
	//crear los cuerpos aquí.
	ball=Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);
	 rectMode(CENTER);
	 ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  hround.show();
  right.show();
  left.show();

  Engine.update(engine);

  drawSprites();
}

function arriba(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
	
	}
	
	function derecha(){
	  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
	
	}
	 


