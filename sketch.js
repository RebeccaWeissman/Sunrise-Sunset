const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var savedate1;
var bg = 'sunrise1.png';

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);

    // write code to display time in correct format here
    text('time:'+ savedate1,600,100);

}

async function getBackgroundImg(){
    var response = await fetch('http://worldtimeapi.org/api/timezone/America/New_York');
    var jsonresp = await response.json();
    var savedate = jsonresp.datetime.slice(11,13);
    savedate1 = jsonresp.datetime.slice(11,16);
    console.log(savedate);
        if(savedate>=4 && savedate<=7){
            bg='sunrise1.png';
        }
        else if(savedate>=7 && savedate<=9){
            bg='sunrise2.png';
        }
        else if(savedate>=9 && savedate<=11){
            bg='sunrise3.png';
        }
        else if(savedate>=11 && savedate<=13){
            bg='sunrise4.png';
        }
        else if(savedate>=13 && savedate<=16){
            bg='sunrise5.png';
        }
        else if(savedate>=16 && savedate<=18){
            bg='sunrise6.png';
        }
        else if(savedate>=18 && savedate<=19){
            bg='sunset7.png';
        }
        else if(savedate>=19 && savedate<=20){
            bg='sunset8.png';
        }
        else if(savedate>=20 && savedate<=21){
            bg='sunset9.png';
        }
        else if(savedate>=21 && savedate<=22){
            bg='sunset10.png';
        }
        else if(savedate>=22 && savedate<=23){
            bg='sunset11.png';
        }else{
            bg='sunset12.png';
        }
        backgroundImg = loadImage(bg);
        console.log(bg);
}
