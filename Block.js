class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility=255;
      this.image=loadImage("block.png")
      World.add(world, this.body);
    }
    display(){
     
      if(this.body.speed>3)
      {
        World.remove(world,this.body);
      push();
      this.visibility=this.visibility-5;
      tint(255,this.visibility);
      imageMode (CENTER);
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
      pop ();
      }else{
        var angle = this.body.angle;
        var pos= this.body.position;
      
      
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width, this.height);
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
      
    }
}