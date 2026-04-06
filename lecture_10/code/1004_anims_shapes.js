function setup() {
  createCanvas(600, 400);
  animS = animS.newAnimS(this); // connect to p5 instance
}

function draw() {
  background(255);
  strokeWeight(2);

  // animS.shape(id, duration, ...normal p5 args)
  stroke(255, 100, 100);
  animS.rect('r1', 90, 100, 100, 200, 150); // draws over 90 frames

  stroke(100, 100, 255);
  animS.circle('c1', 90, 400, 200, 150);

  stroke(100, 200, 100);
  animS.line('l1', 60, 50, 350, 550, 350); // faster: 60 frames

  stroke(200, 100, 200);
  animS.triangle('t1', 120, 300, 50, 300, 350, 450, 200);
}

function mouseClicked() {
  animS.reset(); // click to replay all animations
}
