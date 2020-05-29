let img3, contadorV;
class Venus extends Mercurio{
  constructor(x,y,size,year) {
    super(x,y,size);  
    this.year = year;
    
    
    img3 = loadImage ("img/venus.png");
    imageMode(CENTER);
  }
  mostrar(other) {
    push();
    rotate(other * (365 / this.year));
    image(img3, this.x, this.y, this.size, this.size);
    pop();
  }
}
