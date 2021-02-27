class Hero{
   
    constructor(x,y,r){
        var options={
         isStatic:true,
			frictionAir:1,
			density:1.2
        
        }
        this.x=x;
        this.y=y;
        this.width=400;
        this.height=200;
        this.r=r;   
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        this.image = loadImage("images/Superhero-01.png");
    
        World.add(world,this.body)
        }
        display(){
            var pos = this.body.position;
            push();
            translate(this.body.position.x,this.body.position.y)
           strokeWeight(0);
           fill("blue");
           ellipse(0,0,this.r,this.r);
           imageMode(CENTER);
           image(this.image,0,0,this.width,this.height)
           pop();
        }
}