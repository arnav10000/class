function setup(){
    canvas = createCanvas(300, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier(''.modelLoaded);
}

function draw(){
image(video, 0, 0, 300, 350);

}

function modelLoaded(){
    console.log( ' Model Loaded! ' );
    classifier.classify(video, gotResult);
}

function gotResutl(){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accurcy").innerHTML = results[0].confidence.toFixed(3);
    }
}