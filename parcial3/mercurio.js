let img2, contador;
class Mercurio {
  constructor(x,y,size,year) {
    this.x = x; 
    this.y = y; 
    this.size = size;
    this.year = year; 
    img2 = loadImage ("img/mercurio.png");
    imageMode(CENTER);
  }
  mostrar(other) {
    push();
    rotate(other * (365 / this.year));
    image(img2, this.x, this.y, this.size, this.size);
    pop();
  }
}
