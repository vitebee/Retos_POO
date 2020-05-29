let img1;
class Sol {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.size = 200;
    imageMode(CENTER);
    img1 = loadImage ("img/sol.png");
  }
  mostrar() {
    translate(height/2, width/2);
    image(img1, this.x, this.y, this.size, this.size);
  }
}
