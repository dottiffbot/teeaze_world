
function setup() {
    if (windowWidth > 600)
        var cns = createCanvas(windowWidth, windowHeight);
  background(200);
}

function draw() {
}
  function mouseMoved(){
    noStroke();
    fill(0,0,0,50);
    ellipse(mouseX, mouseY,25);
  }
function mousePressed(){
 clear();
 background(200);
}
