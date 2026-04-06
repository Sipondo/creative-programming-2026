let handPose;
let video;
let hands = [];

function preload() {
  handPose = ml5.handPose(); // load the hand detection model
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO); // start webcam
  video.size(640, 480);
  video.hide(); // hide the default video element
  handPose.detectStart(video, gotHands); // begin continuous detection
}

function draw() {
  image(video, 0, 0); // draw webcam feed
  for (let hand of hands) {
    for (let keypoint of hand.keypoints) { // 21 points per hand
      fill(0, 255, 0);
      noStroke();
      circle(keypoint.x, keypoint.y, 10);
    }
  }
}

function gotHands(results) {
  hands = results; // called whenever new hands are detected
}
