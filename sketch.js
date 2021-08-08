var backColor = 20;

var star;
var particles = [];
var numParticles = 400;

var initMass = 400;
var finalMass = 1;

var G = 120;

function setup() {
  createCanvas(500, 500);
  noStroke();
  background(backColor);

  star = new Star();
}

function draw() {
  background(backColor, 80);

  for (let i = 0; i < particles.length; i++) {
    particles[i].show();
    particles[i].move();
    particles[i].attract();
  }

  star.show();
  star.shrink();
  star.explode();
  star.grow();
}