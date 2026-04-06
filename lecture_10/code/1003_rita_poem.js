let grammar;
let poem = "";

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  textSize(22);

  // define a grammar with word categories
  grammar = RiTa.grammar({
    start: "$line1\n$line2\n$line3", // poem structure
    line1: "The $adj $noun $verb",
    line2: "across the $adj $noun",
    line3: "like a $adj $noun",
    adj: "[ golden | silent | broken | dancing | ancient ]",
    noun: "[ river | shadow | dream | mirror | forest ]",
    verb: "[ flows | drifts | whispers | fades | glows ]"
  });

  poem = grammar.expand(); // generate first poem
}

function draw() {
  background(30);
  fill(240);
  text(poem, width / 2, height / 2);
}

function mousePressed() {
  poem = grammar.expand(); // click for a new poem
}
