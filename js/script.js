let x = 100;
let y = 250;
let d = 200;
let score = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("#30B5FA");
  ellipse(x, y, d, d);
  textSize(70);
  text(score, 700, 100);
  //if (mousePressed){
  // background(#3FFF00);
  // }
}

function mouseClicked() {
  if (mouseX > x - d && mouseX < x + d) {
    if (mouseY > y - d && mouseY < y + d) {
      x = random(100, 700);
      y = random(100, 700);
      d = random(50, 300);
      score = score + 1;
    }
  }
}
