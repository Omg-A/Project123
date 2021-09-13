noseX = 0;
noseY = 0;
size = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.center();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    document.getElementById("font_size_of_text").innerHTML = "Size of the text will be = " + size;

    background('white');
    textSize(size);
    text('Hello', noseX, noseY);
}

function  modelLoaded(){
    console.log("Model Has Been Loaded!!!");
}

function gotPoses(results){
    if(results.length > 0){
        noseX = results[0].pose.nose.x - 200;
        noseY = results[0].pose.nose.y;
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        size = floor(leftWristX - rightWristX);
    }
}