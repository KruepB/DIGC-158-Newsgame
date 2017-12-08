//starting with empty array
var stars=[];
var trash=[];
var count=0;
function setup() {
  createCanvas(600,600);
 img = loadImage("earth.gif");
 
//make 250 stars in canvas
for(var i=0;i<250;i++){
stars[i]=new Stars();
}
//make 50 trash pieces
for(var j=0;j<50;j++){
trash[j]=new Trash();
}

}



function draw() {
  

//image Earth
  if(count < 50){
   background(0);
   //directions
  fill(107, 219, 43);
  textSize(55);
  text("CLEAN THE PLANET",40,50);
  textSize(25);
  text("Drag mouse over boxes to pick up trash!",100,70);
    for(var i=0;i<250;i++){
  stars[i].displaya();
 }
   image(img, 50, 100, img.width*1.5, img.height*1.5);
   //stars

  }
   //trash
  for(var j=0;j<50;j++){
  trash[j].displayb();
   }
   
//delete trash
for(var k=0;k<50;k++){
  hit=collidePointRect(mouseX,mouseY,trash[k].x,trash[k].y,20,20);

if (hit){
  trash[k].x=1000;
  trash[k].y=1000;
  count=count+1;
if (count>=50){
  background(255);
  fill(66, 66, 244);
  textSize(50);
  text("YOU CLEANED THE", 50,100);
  text("PLANET", 175,200);
  text("CONGRATULATIONS",50,300);

}
}
}
}