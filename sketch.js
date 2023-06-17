
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Engine = Matter.Engine;

let engine;
let world;

var ground;

var top_wall;
var ball;
var ball2;
var strng; 
var strng2; 
var btn1;
var btn2;
function setup() {
  createCanvas(400,600);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
  var ball2_options = {
    restitution: 0.95,
  }
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
  ground =new Ground(200,598,600,20);


  ball = Bodies.circle(100,200,20,ball_options);
  ball2 = Bodies.circle(80,200,20,ball_options);
  World.add(world,ball2);
  World.add(world,ball);

  
  strng = Matter.Constraint.create({
   pointA:{x:200, y:20},
   bodyB:ball,
   pointB:{x:0, y:0},
   length:150,
   stiffness:0.1,
  } )
  World.add(world,strng);

  strng2 = Matter.Constraint.create({
    bodyA:ball,
    pointA: {x:0, y:0},
    bodyB:ball2,
    pointB:{x:0, y:0},
    length:150,
    stiffness:0.1,
   } )
   World.add(world,strng2);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  push ();
  strokeWeight (4);
  stroke ("blue");
  line(
    strng.pointA.x, strng.pointA.y, ball.position.x, ball.position.y, 
  )
  line(
    ball.position.x, ball.position.y, ball2.position.x, ball2.position.y, 
  )
  pop ();
  
 // ground.show();
  
  Engine.update(engine);
}


function vForce()
{
  Matter.Body.applyForce(ball2,{x:0,y:0},{x:-0.06,y:0});
}
  


