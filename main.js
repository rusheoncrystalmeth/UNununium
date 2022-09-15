var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function(){
        img_id = "dam.jpg";
        take_snapshot();
        speak_data = "taking your selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

     }, 5000);

     setTimeout(function(){
        img_id = "9-11.jpg";
        take_snapshot();
        speak_data = "taking your selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

     }, 10000);

    setTimeout(function(){
      
        img_id = "dam2.jpg";
        takeSnapshot();

    }, 15000);
 
}

camera = document.getElementById("camera");
webcam.set({
    width: 500,
    height: 400,
    image_format:'jpg',
    jpg_quality: 90,
});

function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri) {
        if(img_id=="9-11.jpg"){
            document.getElementById("result1").innerHTML = '<img id="9-11.jpg" src="'+data_uri+'"/>';
        }
        if(img_id=="dam.jpg"){
            document.getElementById("result2").innerHTML = '<img id="dam.jpg" src="'+data_uri+'"/>';
        }
        if(img_id=="dam2.jpg"){
            document.getElementById("result3").innerHTML = '<img id="dam2.jpg" src="'+data_uri+'"/>';
        }
    });
}