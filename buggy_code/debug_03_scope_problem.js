// Debug Sketch 03
// Goal: Create a field of drifting particles.
// Each particle should have its own position and speed.

let particles = [];

function setup() {
  createCanvas(520, 320);

  let template = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    size: 16
  };

  // Make a bunch of particles
  for (let i = 0; i < 14; i++) {
    template.x = random(width);
    template.y = random(height);
    template.vx = random(-1.2, 1.2);
    template.vy = random(-1.2, 1.2);
    particles.push(template);
  }
}

function draw() {
  background(16, 18, 28);

  noStroke();
  fill(255, 170, 95);

  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;

    // Bounce logic
    if (p.x < p.size / 2) {
      p.vx *= -1;
    }
    if (p.x > width - p.size / 2) {
      p.vx *= -1;
    }
    if (p.y < p.size / 2) {
      p.vy *= -1;
    }
    if (p.y > height - p.size / 2) {
      p.vy *= -1;
    }

    circle(p.x, p.y, p.size);
  });
}
