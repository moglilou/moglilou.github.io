function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(7);
}

var myPosition = 0;


  function draw(){


//Elipsen verrückt auf dem Screen

    var bgColorB = random(150,255);
    var bgColorR = random(100,150);
    var myRandom =  random(100);
    var myRandom2 =  random(400);
    var ellipseX = Math.random()*width; 
    var ellipseY = Math.random()*height; 
  
  background(bgColorR,0,bgColorB);


  ellipse(ellipseX,ellipseY,myRandom,myRandom2);
  
  
  /*
  var mousePercent = (mouseX/width)*255;
  console.log(mousePercent);  
    
    background("white");
      
      line(pmouseX,pmouseY,mouseX,mouseY);
      myPosition++;
  
  console.log(key);
  if(key == "H") {
    background("red");
    
    } else {
      background("purple");
    }
    
    
     line(pmouseX,pmouseY,mouseX,mouseY);
      myPosition++;
  }
  
  
function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  */
  
}
  

      
      
      
      
      
      