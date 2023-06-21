
 var socket;

let data = [];
let systems = [];

let yScalePlant = d3.scalePoint();
let yScaleFungi = d3.scalePoint();
let vScaleConnection = d3.scaleSqrt();
let cScale = d3.scaleOrdinal();
let colScale = d3.scaleSequential();

let v1;
let v2;

let xFungi;
let yFungi;
let imageArray;
let currentImage = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);

  //socket = socket.io.connect('http://localhost:3000');
  socket = io.connect("https://dda-miflck.herokuapp.com/");


    // Callback function
    socket.on("message", (data) => {
      console.log("callback from server", data);
      switch(data){
        case 0:
          background(4, 47, 16)
          currentImage = 0;
          break;
      }
      switch(data){
        case 1:
          background(4, 47, 16)
          currentImage = 1;
          break;
      }
      switch(data){
        case 2:
          background(4, 47, 16)
          currentImage = 2;
          break;
      }
      switch(data){
        case 3:
          background(4, 47, 16)
          currentImage = 3;
          break;
      }
      switch(data){
        case 4:
          background(4, 47, 16)
          currentImage = 4;
          break;
      }
      switch(data){
        case 5:
          background(4, 47, 16)
          currentImage = 5;
          break;
      }
      switch(data){
        case 6:
          background(4, 47, 16)
          currentImage = 6;
          break;
      }
      switch(data){
        case 7:
          background(4, 47, 16)
          currentImage = 7;
          break;
      }
      switch(data){
        case 8:
          background(4, 47, 16)
          currentImage = 8;
          break;
      }
    });
  
    // gets called when new client arrives
    socket.on("client connected", (data) => {
      console.log("client added", data);
    });

  wald = loadImage("M/WaldBild.png");
  m1 = loadImage("M/M1.png");
  m2 = loadImage("M/M2.png");
  m3 = loadImage("M/M3.png");
  m4 = loadImage("M/M4.png");
  m5 = loadImage("M/M5.png");
  m6 = loadImage("M/M6.png");
  m7 = loadImage("M/M7.png");
  m8 = loadImage("M/M8.png");

  imageArray = [wald, m1, m2, m3, m4, m5, m6, m7, m8];

}

function draw() {
  background(0);

  image(imageArray[currentImage], 0, 0, imageArray[currentImage].width*height/imageArray[currentImage].height, height);
}

function keyPressed() {
  if (key == "s") {
    saveCanvas("fungi", "png");
  }
 }

 function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
