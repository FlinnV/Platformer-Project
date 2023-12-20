let player;
let boxes = [];
const BOX_COUNT = 10;

function setup() {
    createCanvas(innerWidth, innerHeight);

    player = new Player(width/2, height/2);

   // for(let i =0; i < BOX_COUNT; i++) {
   //     boxes[i] = new Box(
   //         random(width),
   //         random(height),
   //         random(50, 250),
   //         50
   //     );
   // }

    boxes[0] = new Box(width/2 - 150, height - 200, 300, 50 );

    console.log(boxes);
}

function draw() {
    background(51);

    player.collision(boxes);
    player.update();
    player.draw();

    for(let i =0; i < boxes.length; i++) {
        boxes[i].draw();
    }
}