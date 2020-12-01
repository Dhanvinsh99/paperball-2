class Box {
    constructor(x, y, width, height) {
      var options = {
          'friction':0.5,
          'density':1.0,
          'isStatic': true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbingreen.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y)

      imageMode(CENTER);
      fill(color(255, 0, 0));
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };
  