var angulo = 0;
var sol, mercurio, venus, tierra, marte, luna, slider, sound;
var a = 0;


function preload() {
  frameRate(30);
  sol = loadImage("img/sol.png");
  mercurio = loadImage("img/mercurio.png");
  venus = loadImage("img/venus.png");
  tierra = loadImage("img/tierra.png");
  sound = loadSound('sonido.wav');
  slider = createSlider(0, 10, 1, 1);
}

function setup() {
  createCanvas(1500, 1500);
  angleMode(DEGREES);
  angulo = float(angulo);
  sol = new Sol();
  mercurio = new Mercurio(220, 220, 50, 88);
  venus = new Venus(280, 280, 75, 225);
  tierra = new Tierra(400, 400, 100, 365);
  marte = new Marte(500, 500, 90, 687);
}

function draw() {
  background(0);
  angulo = (angulo+slider.value());
  sol.mostrar();
  mercurio.mostrar(angulo);
  venus.mostrar(angulo);
  tierra.mostrar(angulo);
  marte.mostrar(angulo);
}
