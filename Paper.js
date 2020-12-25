class Paper{
constructor(x,y,radius, options,maxSides) {
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
       
    }
    this.body=Bodies.circle(x,y,radius, options, maxSides);
    this.radius=radius;
    this.options=options;
    this.maxSides=maxSides;
    World.add(world, this.body);

}
    
    display(){
        var pos= this.body.position;
        var angle= this.body.angle;
        push();
        translate(pos.x,pos.y);
        fill("red");
        //circle();
        pop();
    }
    
}
