let img6, contadorMr;
class Marte extends Mercurio{
  constructor(x,y,size,year) {
    super(x,y,size);
    this.year = year;
    
    
    img6 = loadImage ("img/marte.png");
    imageMode(CENTER);
  }
  mostrar(other) {
    push();
    rotate(other * (365 / this.year));
    image(img6, this.x, this.y, this.size, this.size);
    pop();
  }
}
