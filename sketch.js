const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, cube1;
var backgroundImg
var player, slingShot;
var score
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


   

 


    box3 = new Box(700,240,100,100);
    
    cube3 = new Cube(700, 350);
    box1 = new Box(700,320,100,100);
    box2 = new Box(700,320,100,100);
    cube1 = new Cube(710, 350);

    box5 = new Box(700,160,70,70);
  
 ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    player = new Player(200,50);

    
    slingshot = new SlingShot(player.body,{x:200, y:50});
}

function draw(){
    background(54,117,69);
    
    text("Score=  " + score, width-300, 50)
    
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    cube1.display();


    box3.display();

    cube3.display();


    box5.display();
  
    player.display();
    platform.display();

    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
