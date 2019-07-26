var bookmarkWidth = 192;
var bookmarkHeight = 576;

var font;

function preload() {
  font = loadFont("./fonts/Roboto-Bold.ttf");
}

function setup() {
  var canvas = createCanvas(bookmarkWidth, bookmarkHeight);
  canvas.parent('bookmark-canvas');
  
  document.getElementById('btn-download').addEventListener('click', () => {
    save((+new Date()) + ".png");
  });

  angleMode(DEGREES);
  rectMode(CENTER);

  textFont(font);
  textSize(14);
  textAlign(CENTER, CENTER);
}

function draw() {
  background('white');

  drawName();
  drawEmails();
  drawInterests();
  drawSocial();
  drawTweets();
}

function drawName() {
  var name = document.getElementById('name-input').value;
  var nameClean = name.toLowerCase().replace(/[^a-z]/g, "");

  colorMode(HSB, 100);

  var paddingX = 10;
  var paddingY = 20;
  var gradientStart = color(nameClean.length, 100, 100);
  var gradientStop = color(nameClean.length + 10, 100, 50);

  beginShape(TRIANGLE_STRIP);
  for (let i = 0; i < nameClean.length; i++) {
    let charNumber = nameClean[i].charCodeAt(0) - 97;
    var gradientColor = lerpColor(gradientStart, gradientStop, (nameClean.length - i)/nameClean.length);

    stroke(gradientColor);
    fill(gradientColor);
    vertex(
      paddingY + ((width - 2 * paddingY) / 26) * charNumber,
      paddingX + ((height - 2 * paddingX) / nameClean.length) * i
    );
  }
  endShape();
  
  colorMode(RGB);

  fill('#e3655b');
  noStroke();
  text(name, width/2, height * 0.9, width - paddingY, height - paddingX);
}

function drawInterests() {
  var arts = +document.getElementById('arts-input').value;
  document.getElementById('arts-input-value').innerHTML = arts;
  drawPolygon(arts, 25, 555, 10, '#44af69');

  var science = +document.getElementById('science-input').value;
  document.getElementById('science-input-value').innerHTML = science;
  drawPolygon(science, 25 + 140/3, 555, 10, '#f8333c');

  var politics = +document.getElementById('politics-input').value;
  document.getElementById('politics-input-value').innerHTML = politics;
  drawPolygon(politics, 25 + 2 * 140/3, 555, 10, '#fcab10');

  var literature = +document.getElementById('literature-input').value;
  document.getElementById('literature-input-value').innerHTML = literature;
  drawPolygon(literature, 165, 555, 10, '#2b9eb3');
}

function drawPolygon(steps, cx, cy, r, strokeColor) {
  push();
  
  translate(cx, cy);
  
  noFill()
  stroke(strokeColor);
  strokeWeight(2.5);

  if (steps === 1) {
    ellipse(0, 0, 10);
  } else {
    beginShape();
    for (var i = 0; i < steps; i++) {
      var theta = (360 / steps) * i;
      vertex(r * cos(theta), r * sin(theta));
    }
    endShape(CLOSE);
  }

  pop();
}

function drawEmails() {
  var emails = document.querySelector('input[name="emails"]:checked').value;

  push();

  translate(width, height - 350);
  rotate(-90);

  stroke('#edb4af');
  strokeWeight(1);
  for (var i = 1; i < 30; i++) {
    line(i * width/30, -5, i * width/30, -10);
  }

  if (emails == "10") {
    stroke('#be3e32');
    strokeWeight(1);
    for (var i = 1; i < 11; i++) {
      line(i * width/30, -5, i * width/30, -30 + -30 * abs(sin(i * 20)));
    }
  }

  if (emails == "20") {
    stroke('#be3e32');
    strokeWeight(1);
    for (var i = 1; i < 21; i++) {
      line(i * width/30, -5, i * width/30, -30 + -30 * abs(sin(i * 20)));
    }
  }

  if (emails == "TOO_MANY") {
    stroke('#be3e32');
    strokeWeight(1);
    for (var i = 1; i < 30; i++) {
      line(i * width/30, -5, i * width/30, -30 + -30 * abs(sin(i * 20)));
    }
  }

  pop();
}

function drawSocial () {
  var social = document.querySelector('input[name="social"]:checked').value;

  push();

  translate(17, 29);

  fill(84, 13, 110, 125);
  noStroke();
  ellipse(0, 0, 120, 120);

  noFill();
  stroke(84, 13, 110);
  strokeWeight(2);
  
  line(0, 0, 120 * cos(45), 120 * sin(45));

  fill(84, 13, 110);
  noStroke();

  if (social == "STRONGLY_AGREE") {
    ellipse(0, 0, 10, 10);
  }
  if (social == "AGREE") {
    ellipse(30 * cos(45), 30 * sin(45), 10, 10);
  }
  if (social == "NEUTRAL") {
    ellipse(60 * cos(45), 60 * sin(45), 10, 10);
  }
  if (social == "DISAGREE") {
    ellipse(90 * cos(45), 90 * sin(45), 10, 10);
  }
  if (social == "STRONGLY_DISAGREE") {
    ellipse(120 * cos(45), 120 * sin(45), 10, 10);
  }

  pop();
}

function drawTweets() {
  var tweets = document.querySelector('input[name="tweets"]:checked').value;

  push();

  translate(width * 0.25, height * 0.87);

  fill(84, 13, 110);
  stroke(84, 13, 110);
  strokeWeight(1);

  ellipse(0, 0, 5, 5);

  noFill();

  if (tweets == "TWEET_ONCE") {
    arc(0, 0, 20, 20, 250, -10);
    arc(0, 0, 30, 30, 250, -10);
    arc(0, 0, 40, 40, 250, -10);
  }

  if (tweets == "TWEET_MANY") {
    arc(0, 0, 20, 20, 250, -10);
    arc(0, 0, 30, 30, 250, -10);
    arc(0, 0, 40, 40, 250, -10);
    arc(0, 0, 50, 50, 250, -10);
    arc(0, 0, 60, 60, 250, -10);
  }

  if (tweets == "TWEET_STORM") {
    arc(0, 0, 20, 20, 250, -10);
    arc(0, 0, 30, 30, 250, -10);
    arc(0, 0, 40, 40, 250, -10);
    arc(0, 0, 50, 50, 250, -10);
    arc(0, 0, 60, 60, 250, -10);
    arc(0, 0, 70, 70, 250, -10);
    arc(0, 0, 80, 80, 250, -10);
    arc(0, 0, 90, 90, 250, -10);
    arc(0, 0, 100, 100, 250, -10);
  }

  pop();
}
