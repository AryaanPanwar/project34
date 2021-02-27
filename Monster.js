class Monster{
   
    constructor(x,y){
        var options={
         isStatic:false,
        
        
        }
        this.x=x;
        this.y=y;
        this.width=100;
        this.height=100;
        this.r=300;
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        this.image = loadImage("images/Monster-01.png");
    
        World.add(world,this.body)
        }
        display(){
            var pos = this.body.position;
            push();
            translate(pos.x,pos.y)
           strokeWeight(0);
           fill("blue");
           rectMode(CENTER);
           rect(0,0,this.width,this.height);
           imageMode(CENTER);
           image(this.image,0,0,this.r,this.r)
           pop();
        }
}