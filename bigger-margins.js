function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  for (var x = 200 ; x < width - 100; x = x + 4) {
    line(x, height/2, mouseX, mouseY);
  }
}
