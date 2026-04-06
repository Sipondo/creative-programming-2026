function setup() {
  createCanvas(400, 400);
  world.gravity.y = 10;
  new Sprite(200, 380, 400, 20, "static"); // floor
}

function draw() {
  clear();

  if (mouse.presses()) { // true on the frame you click
    let b = new Sprite(mouse.x, mouse.y, 30);
    b.bounciness = 0.7;
    b.color = color(random(255), random(255), random(255)); // random colour
  }
}
