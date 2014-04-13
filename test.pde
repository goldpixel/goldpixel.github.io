void setup(){
size(500, 500);
background(0);
stroke(0);
noFill();
}

void draw(){

stroke(0);
line(random(0, width), random(0, height), random(0, width), random(0, height));
stroke(255);
line(random(0, width), random(0, height), random(0, width), random(0, height));
}