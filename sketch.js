console.log("versão atual", ml5.version);
let img;
let detector;

function preload() {
  img = loadImage("sala.jpg");
  detector = ml5.objectDetector('cocossd');
}
function obterResult(error, results) {
  if (error) {
    console.error(error);
  }
  else {
    console.log(results);
  }
for (let i = 0; i < results.length; i++) {
 let objeto = results[i];
  stroke(0,255,0);
  strokeWeight(9);
  noFill();
  rect(objeto.x, objeto.y, objeto.width, objeto.height);
  stroke(255);
  strokeWeight(2);
  textSize(20);
  text(objeto.label, objeto.x, objeto.y);
}

}
function setup() {
  createCanvas(400, 400);
  document.getElementById("stats").innerHTML = 'esperando cair na minha conta cair 100 mil reais';
  background(220);
  image(img, 0, 0);
  detector.detect(img, obterResult);
}
function draw() { }
