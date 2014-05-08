Pfont font;

size(500, 500);
background(255);

var Romeo = 0;
var Juliet = 0;

var lines = loadStrings("pg1513.txt");

font = loadFont("courier");
textFont(font, 14);
fill(0);
noLoop();

for(var i = 0; i < lines.length; i++){
	var ro = lines[i].match(/romeo/gi);
	
	if (ro) {
		Romeo += ro.length;
	}
	
	var ju = lines[i].match(/juliet/gi);

	if (ju) {
		Juliet += ju.length;
	}
}

println("Romeo: " + Romeo);
println("Julitet: " + Juliet);

text(Romeo, 20 , 10)
