class Bob{
    constructor(x,y,radius){
        var options={
            isStatic: false,
            restitution: 1.0,
            friction: 0.0,
            density: 0.8
        }
        
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,(this.radius)/2,options);

        World.add(world, this.body);
        }
        display(){
            var pos = this.body.position;

            push();
            translate(pos.x,pos.y);
            fill(255,0,255); 
            rectMode(CENTER);
            //image(this.image,0,0,this.radius,this.radius);
            ellipse(0,0,this.radius,this.radius);
            pop();
        }
    }
