

var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-2.1.3.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


  console.log("Running index.js");


var clck = function() {
    asciiArt = document.getElementById("asciiArt");
    $.post( "/", function(data) {
        console.log(data);
        asciiArt.innerHTML = data;
    });


    }
