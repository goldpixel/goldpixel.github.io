

var my_canvas = document.getElementById("canvas");
var ctx = my_canvas.getContext("2d");

var lat = "37.575674";
var lng = "126.976713";
var zm = 15;
var mapURL;
var mapImg  = new Image();


function getMap(){
  mapURL = "http://maps.google.com/maps/api/staticmap?center="+lat+","+lng+"&zoom=" + zm +"&size=640x480&sensor=false&key=AIzaSyCBoXkz703lOWgwS-pfwtKoOnb6eWiFnUc";
  mapImg.src = mapURL;

  mapImg.onload = function(){
    ctx.drawImage(mapImg, 0, 0);
    ctx.fillStyle = "rgba(0, 0, 255, 0.3)";
  
    var x = [];
    var y = [];

    for(var i = 0; i < 100; i++){
      x[i] = Math.floor(Math.random()*640);
      y[i] = Math.floor(Math.random()*480);
    }
    
    for(var i = 0; i < 100; i++){
      ctx.beginPath();
      ctx.arc(x[i], y[i], zm, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
}


getMap(); 


document.getElementById("in").onclick=function(){zoomin()};
document.getElementById("out").onclick=function(){zoomout()};

function zoomin(){
  zm++;
  if(zm>=21){
     zm = 21;
  }
  getMap(); 
}
function zoomout(){
   zm--;
   if(zm<=0){
     zm = 0;
   }
  getMap();
}



/*
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
*/