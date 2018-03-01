var img;

function preload() {
    img = loadImage('assets/hamster.png');
    GoodDog = loadFont('assets/GoodDog.otf');
}


function setup() {
createCanvas(600, 600);
    strokeWeight(5);
    image(img, 10, 10);
    frameRate(10);
}

function draw() {
    dragSleep(mouseX, mouseY);
}

function dragSleep(x, y) {
    push();
    
    translate(x, y);
    
    textFont('GoodDog');
    textSize(25 + (mouseY / width)*72);
    fill(0, 0, 0);
    
    if (mouseIsPressed) {
        fill(244, 158, 66);
        text('ᵔᴥᵔ', 0, 0);
    } else { 
        text('Z', 0, 0);}
    
    pop();
    
    }