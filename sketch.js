const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunrise.png" ;
var time;
var wish

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here
    noStroke();
    textSize(35)
    fill("white");
    text("TIME: " + time, width-950, 100)
    text(wish ,width-950, 150)

}


async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    if(hour >= 04 && hour<=06){
        bg = "sunrise1.png";
    }

    else if(hour>=06 && hour<=07){
        bg = "sunrise2.png"
    }
    else if(hour>=07 && hour<=08){
        bg = "sunrise3.png"
    }
    else if(hour>=08 && hour<=10){
        bg = "sunrise4.png"
    }
    else if(hour>=10 && hour<=14){
        bg = "sunrise5.png"
    }
    else if(hour>=14 && hour<=16){
        bg = "sunrise6.png"
    }
    else if(hour>=16 && hour<=18){
        bg = "sunset7.png"
    }
    else if(hour>=18 && hour<=20){
        bg = "sunset8.png"
    }
    else if(hour>=20 && hour<=21){
        bg = "sunset9.png"
    }
    else if(hour>=21 && hour==22){
        bg = "sunset10.png"
    }
    else if(hour>=22 && hour<=23){
        bg = "sunset11.png"
    }
    else{
        bg = "sunset12.png"
    }

    backgroundImg = loadImage(bg)

    if(hour>= 01 && hour<02){
        time = "1 AM";
    }
    else if(hour>=02 && hour<03){
        time = "2 AM"
    }
    else if(hour>=03 && hour<04){
        time = "3 AM"
    }
    else if(hour>=04 && hour<05){
        time = "4 AM"
    }
    else if(hour>=05 && hour<06){
        time = "5 AM"
    }
    else if(hour>=06 && hour<07){
        time = "6 AM"
    }
    else if(hour>=07 && hour<08){
        time = "7 AM"
    }
    else if(hour>=08 && hour<09){
        time = "8 AM"
    }
    else if(hour>=09 && hour<10){
        time = "9 AM"
    }
    else if(hour>=10 && hour<11){
        time = "10 AM"
    }
    else if(hour>=11 && hour<12){
        time = "11 PM"
    }
    else if(hour>=12 && hour<13){
        time = "12 NOON"
    }
    else if(hour>=13 && hour<14){
        time = "1 PM"
    }
    else if(hour>=14 && hour<15){
        time = "2 PM"
    }
    else if(hour>=15 && hour<16){
        time = "3 PM"
    }
    else if(hour>=16 && hour<17){
        time = "4 PM"
    }
    else if(hour>=17 && hour<18){
        time = "5 PM"
    }
    else if(hour>=18 && hour<19){
        time = "6 PM"
    }
    else if(hour>=19 && hour<20){
        time = "7 PM"
    }
    else if(hour>=20 && hour<21){
        time = "8 PM"
    }
    else if(hour>=21 && hour<22){
        time = "9 PM"
    }
    else if(hour>=22 && hour<23){
        time = "10 PM"
    }
    else if(hour>=23 && hour<24){
        time = "11 PM"
    }
    else{
        time = "12 MIDNIGHT"
    }


    if(hour>= 05 && hour<12){
       wish = "GOOD MORNING"
    }
    
   else if(hour>= 12 && hour<17){
 
       wish = "GOOD AFTERNOON" 
    }
    else if(hour>= 17 && hour<20){
        
       wish ="GOOD EVENING" 
    }
    else {
       wish = "GOOD NIGHT" 
    }
}

