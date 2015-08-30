var hue = require('./lib/hue');

//hue.discover(function (error, host) {
//  if (error) {
//    console.error(error);
//    return;
//  }
var host = "192.168.0.101"
  
console.log("Discovered HUE at %s", host);

hue.load(host, "27df1d5a28d980171859b0c669edb33"); // need to register this first (not currently supported)

hue.lights(function(lights){
      for(i in lights)
          if(lights.hasOwnProperty(i))
              hue.change(lights[i].set({"on": true, "rgb":[Math.random() * 256 >>> 0, Math.random() * 256 >>> 0, Math.random() * 256 >>> 0]}));
});

