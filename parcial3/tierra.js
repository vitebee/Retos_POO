let img4, contadorT;
class Tierra extends Mercurio{
  constructor(x,y,size,year) {
    super(x,y,size);
    this.year = year;
    
    
    img4 = loadImage ("img/tierra.png");
    imageMode(CENTER);
  }
  mostrar(other) {
    push();
    rotate(other * (365 / this.year));
    image(img4, this.x, this.y, this.size, this.size);
    pop();
  }
}
