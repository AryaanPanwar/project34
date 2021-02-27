class Block{
constructor(x,y,w,h){
var options ={
    isStatic:false,
    'restitution':0.8,
    'friction':1.0,
    'density':20
}
this.x=x;
this.y=y;
this.w=w;
this.h=h;
this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
World.add(world,this.body);
}
display(){
var pos = this.body.position;
var angle=this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
strokeWeight(4);
stroke("black");
fill("red");
rect(0,0,this.w,this.h);
pop();

}


    
}