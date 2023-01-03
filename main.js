noseX=0;
noseY=0;

function preload(){
    clow_nose=loadImage("https://i.postimg.cc/rsstjyVc/mostachito.png");
}

function setup(){
    canvas=createCanvas(350,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(350,350);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose' ,gotPoses);
}

function modelLoaded(){
    console.log('poseNet está inicializando');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }
}

function draw(){
    image(video ,0 ,0 ,350 ,350);
    image(clow_nose,noseX,noseY,30,30);
}

function take_snapshot(){
    save('imagen_de_mostacho.png');
}