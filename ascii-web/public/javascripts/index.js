
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-2.1.3.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
console.log("Running index.js");


var clck = function() {
    asciiArt = document.getElementById("asciiArt");
    fileUpload = document.getElementById("fileUpload");
    var formData = new FormData();
    formData.append("userFile", fileUpload.files[0]);
//    formData.append("file", fileUpload.files[0]);
    console.log(fileUpload.files[0]);

    $.ajax({
      url : "/", 
      type : "POST",
      data : formData, 
      processData : false,
      contentType : false,
      success : function(data, textStatus, jqXHR) {
	console.log(data);
        asciiArt.innerHTML = data;
      },
      error: function(data, textStatus, jqXHR) {
          console.log(jqXHR);
          console.log("fuuuuc")
      }
    });

    /*$.post( "/", function(data) {
      console.log(data);
      asciiArt.innerHTML = data;
    });*/
}   









/////////////////////////////////////////////////////////

/*var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-2.1.3.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
*/
/*var clck = function() {
    asciiArt = document.getElementById("asciiArt");
    $.post( "/", function(data) {
      console.log(data);
      asciiArt.innerHTML = data;
    });
}   */

/*
  console.log("Running index.js");


var clck = function() {
    asciiArt = document.getElementById("asciiArt");
    var fileUpload = document.getElementById("fileUpload");
    var file = fileUpload.files[0];
    console.log("File upload: " + file );

    var formData = new FormData();
    formData.append("file", file);
    formData.append("testString", "test");
    console.log("form data:" + formData);

/*    for(var propName in formData) {
        propValue = formData[propName];
        console.log(propName, propValue);
        }

$.ajax({
    url : "/",
    type: "POST",
    data : formData,
    processData: false,
    contentType: "multipart/form-data",
    success:function(data, textStatus, jqXHR){        
        console.log(data);
        asciiArt.innerHTML = data;
    },    
    error: function(jqXHR, textStatus, errorThrown){
        console.log("It failed :/");
    }
});*/


/*
    $.post( "/", formData, function(data) {
        console.log(data);
        asciiArt.innerHTML = data;
    });
    
/*    for(var propName in uploadFile) {
        propValue = uploadFile[propName];
        console.log(propName, propValue);
        }*/
 

    
