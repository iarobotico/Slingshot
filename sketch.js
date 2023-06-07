const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body

var engine, world;
var holder, ground;
var stand1, stand2;
var ball;
var slingShot;
var fruit;
var basket
var backgroundImg

function preload() {
  backgroundImg = loadImage("background.png");
  fruit = loadImage("melon.png");
  basket = loadImage("basket.png")
}

function setup() {
  createCanvas(900, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();



  //Desafio1:
  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);
  //Desafio2
  slingShot = new Slingshot(ball,{x:100,y:100});

}

function draw() {
  background(backgroundImg);

  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);

  ground.display();
  basket.scale = .025;


  imageMode(CENTER)
  image(fruit, ball.position.x, ball.position.y, 40, 40);
  image(basket, 450, 270)

  slingShot.display();
}

function mouseDragged() {
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased() {
  slingShot.fly();

}
