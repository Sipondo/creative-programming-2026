let scribble;
let data = [40, 70, 55, 90, 30];
let labels = ["Mon", "Tue", "Wed", "Thu", "Fri"];

function setup() {
  createCanvas(600, 400);
  background(255);
  scribble = new Scribble(this);
  scribble.roughness = 2; // extra wobbly

  let barW = 60;
  let gap = 30;
  let startX = 100;

  for (let i = 0; i < data.length; i++) {
    let x = startX + i * (barW + gap); // space bars evenly
    let h = map(data[i], 0, 100, 0, 250); // scale to canvas

    stroke(50);
    strokeWeight(2);
    fill(100, 180, 255, 180);
    scribble.scribbleRect(x, 350 - h / 2, barW, h); // hand-drawn bar

    noStroke();
    fill(50);
    textAlign(CENTER);
    text(labels[i], x, 380); // label below each bar
  }
}
