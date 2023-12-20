const GRAVITY = 0.4;

class Player {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
    }

    update() {
        this.pos.add(this.vel);

        //Gravity
        this.vel.add(0, GRAVITY)
    }

    collision(boxes) {
        boxes.forEach(box => {

            if(
                this.pos.x > box.pos.x &&
                this.pos.x < box.pos.x + box.size.x
              ) {
                console.log('X COLLISION')
              }

        });
    }

    draw() {
        push();

        fill(205, 180, 45);
        circle(this.pos.x, this.pos.y, 32);

        pop();
    }
}