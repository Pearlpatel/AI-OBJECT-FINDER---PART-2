status="";
function setup() {
    canvas=createCanvas(500,500);
    video=createCapture(VIDEO);
    video.hide();
    canvas.center();
}
function start() {
    objectdect=ml5.objectDetector("cocossd",model_loaded);
    document.getElementById("status").innerHTML="Status: Object Detecting";
objectname_inputbox=document.getElementById("label_name").value;
}
function model_loaded() {
    console.log("Model is loaded");
    status=true;
}
function draw() {
    image(video,0,0,500,500);
}