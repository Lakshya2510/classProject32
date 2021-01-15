class SlingShot {
    constructor(body1,point2){

        var options={
            bodyA:body1,
            pointB:point2,
            length:50,
            stiffness:0.1            
        }
        this.chain = Matter.Constraint.create(options)
        World.add(world,this.chain)
        this.sling1 = loadImage("../sprites/sling1.png");
        this.sling2 = loadImage("../sprites/sling2.png")
        this.sling3 = loadImage("../sprites/sling3.png")
    }
    attach(body){
        this.chain.bodyA = body;
    }
    fly(){

        this.chain.bodyA=null
    }
    display(){
        image(this.sling1,200,170,40,110);
        image(this.sling2,175,165,40,70); 
        if(this.chain.bodyA){
            var point1 = this.chain.bodyA.position
            var point2 = this.chain.pointB
            push()
            strokeWeight(6);
            stroke(color(49,23,8))
            if(point1.x < 220){
                line(point1.x-20,point1.y,235,180);
                line(point1.x-20,point1.y,180,175);
                image(this.sling3,point1.x-30,point1.y-15,15,30)
            }
            else{
                line(point1.x+20,point1.y,235,180);
                line(point1.x+20,point1.y,180,175);
                image(this.sling3,point1.x+20,point1.y-15,15,30)
            }
        pop()

        }

    }

}