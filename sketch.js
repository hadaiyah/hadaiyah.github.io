function setup() {
  createCanvas(400, 400);
    background(220);

}

function draw() {
  noStroke();
  fill(mouseX, mouseY, 39)
  ellipse(220, 220, 20, 20)
  rect(mouseX, mouseY, 40, 60)
}
