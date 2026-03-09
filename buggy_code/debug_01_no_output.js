// Debug Sketch 01
// Goal: Draw a glowing orb in the center of the canvas.
// The glow should pulse over time.

function setup() {
  createCanvas(500, 300);
}

function draw() {
  background(18, 20, 35);

  let glow = 18 + 10 * sin(frameCount * 0.06); // Sin is used for pulsing

  noStroke();
  fill(255, 210, 90, 0);
  circle(width / 2, height / 2, 120 + glow);
}
