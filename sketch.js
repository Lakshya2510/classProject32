const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg, platform, backgroundImg2;
var score=0;

/*
var x = "0987457 jsdhf sjfdjk";
var y = 847589;
var bool = false;
var test1 = null;
var test2;
console.log(test2);
Array
var arr = [], arr2 = [];
arr = ["string1", 3,null];
arr2 = [1,2,3,4,5];



console.log(arr2.length);
var sum = 0;
for(var i =0; i<arr2.length ; i=i+1){
    sum = sum+arr2[i];
}
console.log(sum);
var arr3 = [[1,2,],[3,4],[5,6]]
*/






function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
    //backgroundImg2 = loadImage("sprites/bg2.jpg");

}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600, height, 1200, 20);
    platform = new Ground(150, 350, 300, 150);

    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(920, 320, 70, 70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810, 260, 300, PI / 2);

    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
    pig3 = new Pig(810, 220);

    log3 = new Log(810, 180, 300, PI / 2);

    box5 = new Box(810, 160, 70, 70);
    log4 = new Log(760, 120, 150, PI / 7);
    log5 = new Log(870, 120, 150, -PI / 7);

    bird = new Bird(200, 200);

    slingShot = new SlingShot(bird.body, { x: 200, y: 200 })
    
}

function draw() {
    Engine.update(engine);
    getBackground();
 if(backgroundImg){
     background(backgroundImg);
 }
 else{
     background(255);
 }
    text("score="+score,1000,50)
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    slingShot.display();

    function mouseDragged() {
        Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY })
    }

    function mouseReleased() {
        slingShot.fly()
    }

}
    function keyPressed() {

        if (keyCode == 32) {
            Matter.Body.setPosition(bird.body, { x: 200, y: 200 })
            slingShot.attach(bird.body);
            bird.trajectory = []

        }

    }
    async function getBackground() {
        var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();

        var dateTime = responseJSON.datetime;
        var hour = dateTime.slice(11, 13)

        console.log(hour);

        if(hour<15 && hour>6){

           backgroundImg =  loadImage("sprites/bg.png");
        }
        
        else{
            backgroundImg =  loadImage("sprites/bg2.jpg");
        }

    

    }