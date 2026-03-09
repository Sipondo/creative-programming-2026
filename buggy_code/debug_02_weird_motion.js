// Debug Sketch 02
// Goal: Move a dot from left to right in a gentle wave.
// It should travel across the full width, then wrap around.

let dot = {
  x: 0,
  y: 0,
  size: 28,
  speed: 2.2
};

function setup() {
  createCanvas(500, 320);
}

function draw() {
  background(235, 244, 255);

  dot.x += dot.speed;
  dot.y = height / 2 + sin(frameCount * 0.05) * 70; // Sin for wave motion

  if (dot.x > height + dot.size / 2) {
    dot.x = -dot.size / 2;
  }

  noStroke();
  fill(35, 110, 220);
  circle(dot.x, dot.y, dot.size);
}
