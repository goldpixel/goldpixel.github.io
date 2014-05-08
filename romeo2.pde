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

var novel = {};

void search(w){
	if (novel.hasOwnProperty(w)) {
		novel[w] += 1;
	} else {
		novel[w] = 1;
	}
}

void list(li){
	int c;
	for(var prop in li){
		c++;
		if(c < 20){
			console.log(prop + ": " + novel[prop]);
		}
	}
}

for(var i = 0; i < lines.length; i++){
	var words = split(lines[i], " ");
	for(var j = 0; j < words.length; j++){
		var w = words[j];
		search(w);
	}
}

//list(novel);


void sortObject(obj){
	var arr = [];
	for (var prop in obj){
		arr.push([prop, obj[prop]]);
	}
	arr.sort(function(a, b) {return b[1] - a[1]});
	//return arr;
	//console.log(arr);
}

sortObject(novel);



