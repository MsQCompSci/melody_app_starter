
function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  }

  //variable for oscialtor object
let osc;

//varable for frequency
let freq = 262;

function setup() {
    createCanvas(400, 400);

    //initialize oscillator
    osc = new Oscillator(freq);
  }
  
  function draw() {
    background(220);
  }