// Debug Sketch 05
// Goal: Make all dots drift downward at different speeds.
// When a dot leaves the bottom, it should reappear at the top.

let dots = [];

function setup() {
  createCanvas(560, 340);

  for (let i = 0; i < 15; i++) {
    dots.push({
      x: random(20, width - 20),
      y: random(height),
      size: random(12, 24),
      speed: random(0.8, 2.4)
    });
  }
}

function draw() {
  background(245, 248, 255);

  noStroke();
  fill(70, 120, 240, 180);

  for (let i = 0; i < dots.length; i++) {
    dots[i].y += dots[i].speeed;

    if (dots[i].y > height + dots[i].size / 2) {
      dots[i].y = -dots[i].size / 2;
    }

    circle(dots[i].x, dots[i].y, dots[i].size);
  }
}
