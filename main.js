function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.center();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('white');
}

function  modelLoaded(){
    console.log("Model Has Been Loaded!!!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}