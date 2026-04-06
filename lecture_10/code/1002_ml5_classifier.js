let classifier;
let dogImage;
let label = "Loading model...";
let confidence = 0;

function preload() {
  classifier = ml5.imageClassifier("MobileNet"); // load recognition model
}

function setup() {
  createCanvas(520, 620);
  fetchAndClassify(); // get a dog and classify it
}

function draw() {
  background(245);

  fill(20);
  textSize(22);
  text("What breed is this dog?", 20, 36);
  textSize(14);
  text("Click anywhere for a new dog", 20, 62);

  fill(225);
  rect(20, 100, width - 40, height - 160, 12); // image frame

  if (dogImage) {
    image(dogImage, 40, 120, width - 80, height - 200);
  }

  fill(0, 150);
  noStroke();
  rect(0, height - 50, width, 50); // label bar
  fill(255);
  textSize(18);
  textAlign(CENTER);
  text(label + " (" + nf(confidence, 1, 1) + "%)", width / 2, height - 20);
  textAlign(LEFT);
}

function mousePressed() {
  label = "Fetching...";
  confidence = 0;
  fetchAndClassify();
}

function fetchAndClassify() {
  loadJSON("https://dog.ceo/api/breeds/image/random", (data) => {
    loadImage(data.message, (img) => { // load the random dog image
      dogImage = img;
      classifier.classify(dogImage, gotResult); // ask ml5: what breed?
    });
  });
}

function gotResult(results) {
  label = results[0].label; // most confident guess
  confidence = results[0].confidence * 100;
}
