class dustbin{
	constructor(x,y,w,h){
		var options = {
			density:1.2,
			restitution:0.4,
			friction:0.2
		}
			this.dustbin=Bodies.rectangle(x,y,w,h,options)
			this.w=w
			this.h=h
			this.image= loadImage("dustbingreen.png")
			World.add(world,this.dustbin)
		}
		display(){
		var pos=this.dustbin.position
			image(this.image,pos.x,pos.y,this.w,this.h)
		}
		}
