var button, greeting;

  
function setup() {
  
  createCanvas(windowWidth, windowHeight);
  frameRate(60);



  background("#b8b2f5");


  button = createButton('&hearts;');
  button.position(random(80, width*.93), random(80,height*.87));
  button.mousePressed(greet);




  textAlign(CENTER)
  textSize(50);
}

function greet() {

  for (var i=0; i<100; i++) {
    push();
    translate(random(width), random(height));
    rotate(random(2*PI));
    button = createButton('&#9825');
    button.position(random(80, width*.93), random(90,height*.87));
    button.mousePressed(greet);
    pop();
    background(random(188,228),157,random(230,211));
  }

}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  
}