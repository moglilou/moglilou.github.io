/*function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
	// place your drawing code here
	fill("#a41af4");
	stroke("orange");
	line(0,0,width/2,height/2);
	strokeWeight(10);
	ellipse(100,100,40,40);
    point(200,100);
    fill("blue");
    rect(200,200,70,140,20);
    noFill();
    rect(400,400,70,140,20);
    triangle(40,40,100,100,20,120);
    fill("purple");
    strokeWeight(2);
    quad(130,130,170,180,200,270,120,180);
}

background("white");
}
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage("drii.jpg");
  bling = loadImage("bubu.jpg");
  
}

function draw() {
	// place your drawing code here
    // Bild transparent einfügen
 	  image(img, width, height);
    tint(255, 126);  // Apply transparency without changing color
    image(img, 0, 0, width,height);

  noCursor(); 
  
//white triangle left 
  strokeWeight(1);
  fill("white");
  stroke("white");
  triangle(0,0,width/2,0,0,height);
 
 
//white triangle right 
  noStroke();
  fill("white");
  triangle(width,0,width,height,width/2,0); 
 
//1 triangle
  strokeWeight(3);
  noFill();
  stroke("#d3aef9");
  triangle(width/2,0,width,height,0,height);
 
  
//2 triangle
  strokeWeight(2);
  noFill();
  stroke("#8f5cc2");
  triangle(width/2,height*.1,width-(width*.1),height-(height*.1),width*.1,height-(height*.1));


//3 triangle
  stroke("#7e73e6");  
  fill("white");
  triangle(width/2,height*.3,width-(width*.3),height-(height*.3),width*.3,height-(height*.3));
  
  
//4 triangle
  stroke("#4e0597");  
  noFill()

  triangle(width/2,height*.6,width-(width*.6),height-(height*.6),width*.6,height-(height*.6));
  noStroke();


//punkt gefüllt  

  fill("#7e73e6");
  ellipse(mouseX,mouseY,10,10);
  
  
}
function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  
}