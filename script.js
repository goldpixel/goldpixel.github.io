var my_canvas = document.getElementById("canvas");
var ctx = my_canvas.getContext("2d");

var img = new Image();
img.src = "jn.png";

img.onload = function(){
  ctx.drawImage(img, 0, 0);

  var x = [];
  var y = [];

  for(var i = 0; i < 100; i++){
    x[i] = Math.floor(Math.random()*1000);
    y[i] = Math.floor(Math.random()*600);
  }

  ctx.fillStyle = "rgba(0, 0, 255, 0.3)";
    
    for(var i = 0; i < 100; i++){
    ctx.beginPath();
    ctx.arc(x[i], y[i], 10, 0, 2 * Math.PI);
    ctx.fill();
  }
}
