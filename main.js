noseX=0;
noseY=0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/Vsqnxjw0/red-nose.png');
}

function setup(){
    canvas = createCanvas(450, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 350);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
if(results.length > 0)
 {
    console.log(results);
    noseX = results[0].pose.nose.x - 16.5;
    noseY = results[0].pose.nose.y - 15;
    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY);
 }
}

function draw(){
    image(video, 0, 0, 450, 350);
    image(clown_nose, noseX, noseY, 35, 35);
}

function take_snapshot(){
    save('Filter Picture.png');
}