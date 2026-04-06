function setup() {
  createCanvas(400, 400);
  world.gravity.y = 10; // enable gravity

  let ball = new Sprite(200, 50, 40); // x, y, diameter
  ball.bounciness = 0.8; // 0 = no bounce, 1 = perfect bounce
  ball.color = "orange";

  let floor = new Sprite(200, 380, 400, 20, "static"); // static = immovable
  floor.color = "darkgreen";
}

function draw() {
  clear(); // p5play draws sprites automatically
}
