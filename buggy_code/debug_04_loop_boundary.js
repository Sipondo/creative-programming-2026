// Debug Sketch 04
// Goal: Animate a fixed set of confetti pieces falling down.
// When a piece leaves the bottom, it should reappear at the top.

let confetti = [];

function setup() {
  createCanvas(520, 320);

  for (let i = 0; i < 20; i++) {
    confetti.push({
      x: random(width),
      y: random(-height, height),
      size: random(6, 14),
      speed: random(1.5, 4)
    });
  }
}

function draw() {
  background(20, 24, 38);

  noStroke();
  fill(255, 120, 140);

  for (let i = 0; i <= confetti.length; i++) {
    let c = confetti[i];

    c.y += c.speed;

    if (c.y > height + c.size) {
      c.y = -c.size;
      c.x = random(width);
    }

    circle(c.x, c.y, c.size);
  }

  fill(255);
  textSize(14);
  text("Pieces: " + confetti.length, 12, 24);
}
