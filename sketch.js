const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImage;
var hero,monster;
var ground;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12,block13
var block14,block15,block16,block17,block18,block19,block20,block21;
var block22,block23,block24,block25,block26;
var platform;


function preload() {
//preload the images here
backgroundImage = loadImage("images/Background.png");

}

function setup() {
  createCanvas(1270, 650);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
 
  hero = new Hero(200,300,110);
  ground = new Ground(500,500,1000,20);
  block1 = new Block(600,450,50,50);
  block2 = new Block(600,400,50,50);
  block3 = new Block(600,350,50,50);
  block4 = new Block(600,300,50,50);
  block5 = new Block(600,250,50,50);
  block6 = new Block(600,200,50,50);
  block7 = new Block(600,150,50,50);

  block8 = new Block(680,450,50,50);
  block9 = new Block(680,400,50,50);
  block10 = new Block(680,350,50,50);
  block11 = new Block(680,300,50,50);
  block12 = new Block(680,250,50,50);
  block13 = new Block(680,200,50,50);

  block14 = new Block(760,450,50,50);
  block15 = new Block(760,400,50,50);
  block16 = new Block(760,350,50,50);
  block17 = new Block(760,300,50,50);
  block18 = new Block(760,250,50,50);
  block19 = new Block(760,200,50,50);
  block20 = new Block(760,150,50,50);
  block21 = new Block(760,100,50,50);

  block22 = new Block(840,450,50,50);
  block23 = new Block(840,400,50,50);
  block24 = new Block(840,350,50,50);
  block25 = new Block(840,300,50,50);
  block26 = new Block(840,250,50,50);

  monster = new Monster(1000,270);

  platform = new Platform(1000,350,2.5,2.5);


  fly = new Fly(hero.body,{x:280,y:350})

  


}

function draw() {
  background(backgroundImage);
  Engine.update(engine);

  hero.display();
  platform.display();
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();  
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();

  ground.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();

  
  monster.display();

 

  fly.display();
  
 
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}