leftWristX=''
rightWristX=''
noseX=''
noseY=''
function setup(){
canvas=createCanvas(500, 400)
canvas.center()
video=createCapture(VIDEO)
video.size(535, 405)
posenet=ml5.poseNet(video, modelLoaded)
posenet.on('pose', gotPoses)
}


function preload(){
}


function draw(){
background("cyan")
fill("navy")
text("Football team tryouts 3 PM SATURDAY", noseX, noseY)
textSize(leftWristX-rightWristX)
noFill()
}

function modelLoaded(){
console.log("Succesful!!!")    
}

function gotPoses(r){
if(r.length>0){
console.log(r)
leftWristX=r[0].pose.leftWrist.x
rightWristX=r[0].pose.rightWrist.x
noseX=r[0].pose.nose.x
noseY=r[0].pose.nose.y
}
}