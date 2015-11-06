function setup() {
  createCanvas(windowWidth, windowHeight);

}


  function draw(){
     
    
  background("#b9ddce");

  stroke("white");
  strokeWeight(2);
  
  line(140,0,40,height)
  
  line(pmouseX,pmouseY,100,height/3);
    line(100,height/3,width,height/2);
    
  line(pmouseX,pmouseY,104,height/2);
    line(104,height/2,width,height*.8);
    
  line(pmouseX,pmouseY,96,height*.65);    
    line(96,height*.65,width,height*.82);    

  line(pmouseX,pmouseY,93,height*.8);
   line(93,height*.8,width,height*.82);

  line(pmouseX,pmouseY,width/21,height*.91);
     line(width/21,height*.91,144,height);
    
  }
  
  
function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  
}