let scribble;

function setup() {
  createCanvas(600, 400);
  background(255);
  scribble = new Scribble(this); // pass the p5 instance

  scribble.roughness = 2; // wobbly lines
  scribble.bowing = 1; // curved lines

  stroke(50);
  strokeWeight(2);

  fill(255, 200, 200);
  scribble.scribbleRect(150, 200, 180, 120); // same args as rect()

  fill(200, 200, 255);
  scribble.scribbleEllipse(400, 200, 160, 140); // same args as ellipse()

  scribble.scribbleLine(80, 350, 520, 350); // same args as line()
}
