noseX=0;
noseY=0;
rightWristX=0;
leftWristX=0;
difference=0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(500,550);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function draw ()
{
    document.getElementById("word_size").innerHTML = "Width and Height of the word is " + difference + "px";
    background('black');
    fill('white');
    stroke('grey');
    text(noseX, noseY, difference);
    text("Riyadh");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX =" + leftWristX + "rightWristX =" + rightWristX + "difference = " + difference);
    }
}
