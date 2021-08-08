class Particle {
  constructor() {
    this.mass = initMass / numParticles;
    this.g = random(0, 255);

    this.pos = createVector(star.pos.x, star.pos.y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(7.1, 7.16));
  }

  show() {
    push();
    fill(255, this.g, 50);
    this.r = sqrt(this.mass / this.density);
    ellipse(this.pos.x, this.pos.y, sqrt(this.mass) * 2, sqrt(this.mass) * 2);
    pop();
  }

  move() {
    this.pos.add(this.vel);
  }

  attract() {
    var force = p5.Vector.sub(star.pos, this.pos);
    var rSq = force.magSq();
    var strength = (this.mass * finalMass * G) / rSq;

    force.setMag(strength);
    this.vel.add(p5.Vector.div(force, this.mass));
  }
}