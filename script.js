var my_canvas = document.getElementById("canvas");
var ctx = my_canvas.getContext("2d");

var lat = "37.575674";
var lng = "126.976713";
var zm = 15;
var mapURL;
var mapImg  = new Image();

$(document).ready(function(){
  $.get('wifi.csv', function (data) {
        var output = $.csv.toArrays(data);

        for (var i = 3; i < output.length; i++) {
          //console.log("row #" + i);
          //console.log(output[i][3]);
          //console.log(output[i][4]);

          var myxml = new XMLHttpRequest();
          myxml.open("GET", "http://apis.daum.net/local/geo/transcoord?apikey=DAUM_LOCAL_DEMO_APIKEY&x=198745.83&y=452106.866&fromCoord=KTM&toCoord=WGS84&output=xml", false);
          myxml.send();
          console.log(myxml.responseXML.xml);

          //for (var j = 0; j < output[i].length; j++) {
          //  console.log(output[i][j]);
          //}
        }
  })
});





/*
function getPoint(x, y) {
  try {
    URL text = new URL("http://apis.daum.net/local/geo/transcoord?apikey=DAUM_LOCAL_DEMO_APIKEY&x=" + x + "&y=" + y + "&fromCoord=KTM&toCoord=WGS84&output=xml");
              
    XmlPullParserFactory parserCreator = XmlPullParserFactory.newInstance();
    XmlPullParser parser = parserCreator.newPullParser();
      
    int parserEvent = parser.getEventType();
    Log.i("getPoint", x);
    Log.i("getPoint", y);
    parser.setInput(text.openStream(), null);
          
    while (parserEvent != XmlPullParser.END_DOCUMENT) {
      switch(parserEvent) {
        case XmlPullParser.START_TAG:
          String tag = parser.getName();
            if (tag.compareTo("result") == 0) {
              x = parser.getAttributeValue(null, "x");
              y = parser.getAttributeValue(null, "y");
 
              double dx = Double.parseDouble(x);
              double dy = Double.parseDouble(y);
              
              x = String.valueOf(Math.round(dx*1000000));
              y = String.valueOf(Math.round(dy*1000000));
              Log.i("getPoint", x);
              Log.i("getPoint", y);
 
              gp = new GeoPoint(Integer.parseInt(y), Integer.parseInt(x));
            }
              break;
      }
      parserEvent = parser.next();
    }
      
  } catch (Exception e) {
     Log.e("Net", "Error in network call", e);
  }
}
*/

function getMap(){
  mapURL = "http://maps.google.com/maps/api/staticmap?center="+lat+","+lng+"&zoom=" + zm +"&size=640x480&sensor=false";
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
  console.log("getmap: " + zm);
}

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