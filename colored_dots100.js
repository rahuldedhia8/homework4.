function setup() {
  createCanvas(400, 400);
	colorMode(HSB, width, height, 100);
}

function draw() {
	for (var x=1; x < width-2; x= x+1) {
	
	var y = random(height);


	stroke(x, y, 100);
	point(x, y);
 }
}
