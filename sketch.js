
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyImage,boy;

function preload()
{
	boyImage= loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);
	//boy = createSprite(115,550,50,50);
	//boy.addImage(boyImage);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground (600,height,1200,200);
	tree = new Tree (600,450,400,500);
	mango1 = new Mango(480,380,50,50);
	mango2 = new Mango(590,400,50,50);
	mango3 = new Mango(550,300,50,50);
	mango4 = new Mango(650,280,50,50);
	mango5 = new Mango(690,350,50,50);
    stone = new Stone(150,450,80,80);
	rope = new Rope(stone.body,{x:150,y:450});
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0,255,255);
	fill("red");
	text(mouseX+" "+mouseY,mouseX,mouseY);
	image(boyImage,150,380,150,300);
  
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  rope.display();
 // mango6.display();
 isTouching(mango1,stone);
 isTouching(mango2,stone);
 isTouching(mango3,stone);
 isTouching(mango4,stone);
 isTouching(mango5,stone);
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    rope.fly();
    
}

function isTouching(a1,a2){
	o1 = a1.body.position;
	o2 = a2.body.position;
	var distance = dist(o2.x,o2.y,o1.x,o1.y)
    if (//o1.x-o2.x<o1.width/2+o2.width/2 && 
     // o2.x-o1.x<o1.width/2+o2.width/2 &&
     // o1.y-o2.y<o1.height/2+o2.height/2 &&
    //  o2.y-o1.y<o1.height/2+o2.height/2 
	distance<=o1.width/2+o2.width/2 
	 ) {
	
    
       Matter.Body.setStatic(a1.body,false)
  }
  
}



