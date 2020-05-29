let img5;
class Luna extends Tierra{
   constructor(x,y,size,year,year2){
    super(x,y,size,year, year2);
    img5 = loadImage ("img/luna.png");
    imageMode(CENTER);
   }
  mostrar(other){
    push();
    rotate(other * (365 / this.year));
    image(img5, this.x, this.y, this.size, this.size);
    pop();
    push();
    rotate(other*(365/this.year2));
    pop();
  }
    
}
