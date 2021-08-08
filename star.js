class Star {
  constructor() {
    this.mass = initMass;
    this.density = 100;
    this.pos = createVector(width / 2, height / 2);
    this.exploded = false;
  }

  show() {
    push();
    fill(192, 249, 252);
    ellipse(this.pos.x, this.pos.y, sqrt(this.mass) * 2, sqrt(this.mass) * 2);
    pop();
  }

  shrink() {
    if (particles.length == 0 && this.mass >= 0) {
      this.mass -= 8;
    }
  }

  explode() {
    if (this.mass <= 0 && !this.exploded) {
      for (let i = 0; i < numParticles; i++) {
        var particle = new Particle();
        particles.push(particle);
      }

      frameCount = 0;
      this.exploded = true;
    }
  }

  grow() {
    if (this.exploded) {
      for (let i = particles.length - 1; i >= 0; i--) {
        if (this.pos.dist(particles[i].pos) < 7 && frameCount > 10) {
          this.mass += particles[i].mass;
          particles.splice(i, 1);
        }
      }
    }

    if (this.mass >= initMass) {
      this.exploded = false;
    }
  }
}