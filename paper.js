class Paper{
    constructor(x,y,width,height){
        var options ={
            isStatic: false
        
        }
    
       this.dustbin = Bodies.rectangle(x,y,width,height,ground_options);
       this.width=width
       this.height=height
        World.add(world,this.dustbin);   
    }
    display(){
        var pos=this.paper.position
        rectMode(CENTER)
        fill ("green")
        rect(pos.x,pos.y,this.width,this.height)
    }
}