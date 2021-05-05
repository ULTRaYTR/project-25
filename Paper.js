class Paper{ 
constructor(x,y,r){
var options = {
    density:1.2,
    restitution:0.4,
    friction:0.2
}
    this.paper=Bodies.circle(x,y,r,options)
    this.r=r
    this.image= loadImage("paper.png")
    World.add(world,this.paper)
}
display(){
var pos=this.paper.position
    image(this.image,pos.x,pos.y,this.r,this.r)
}
}