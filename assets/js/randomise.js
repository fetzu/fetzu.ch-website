//Create the array
var bgArray = ["1.mp4", "2.mp4", "3.mp4", "4.mp4"];

//Randomise and replace the bgvideo src
var bgRando = function() {

    var randIdx = Math.random() * bgArray.length;
    randIdx = parseInt(randIdx, 10);
    var video =  "bg-videos/" + bgArray[randIdx];
    //console.log(video);
    document.getElementById("bgvideo").src = video;

}

//Run...
bgRando()