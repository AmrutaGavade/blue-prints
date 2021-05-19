const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1,box2,box3;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(200,200,50,50);
    box2 = new Box(150,200,50,50);
    box3 = new Box(250,200,50,50);

    ground = new Ground(200,380,400,20);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();

    ground.display();
}