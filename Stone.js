class Stone{
    constructor(x,y,width,height){
      var options ={
        //'isStatic': true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
     
      World.add(world,this.body); 
      this.image = loadImage("Plucking mangoes/stone.png");

    }
    
    display(){
      var pos =this.body.position;
      push();
      imageMode(CENTER);
      fill(0,255,0);
    
      image(this.image,pos.x,pos.y,this.width,this.height);
      pop();
    }

}