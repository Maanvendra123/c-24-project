class Dustbin{
    constructor(x,y,width,height){
        var ground_options ={
            isStatic: true
        }
    
       this.dustbin = Bodies.rectangle(x,y,width,height,ground_options);
       this.width=width
       this.height=height
        World.add(world,this.dustbin);   
    }
    display(){
        var pos=this.dustbin.position
        rectMode(CENTER)
        fill ("green")
        rect(pos.x,pos.y,this.width,this.height)
    }
}