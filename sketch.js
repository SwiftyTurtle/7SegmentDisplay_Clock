let display_h1,display_h2,display_m1,display_m2,display_s1,display_s2;

function setup() {
	createCanvas(1200, 400);
	frameRate(1);
	display_h1 = new SevenSegmentDisplay(createVector(0,40),1,1);
	display_h2 = new SevenSegmentDisplay(createVector(200,40),1,1);
	display_m1 = new SevenSegmentDisplay(createVector(400,40),1,1);
	display_m2 = new SevenSegmentDisplay(createVector(600,40),1,1);
	display_s1 = new SevenSegmentDisplay(createVector(800,40),1,1);
	display_s2 = new SevenSegmentDisplay(createVector(1000,40),1,1);
}

function draw() {
let time = new Date();
background(0);
display_h1.show(Number(String(time.getHours()).charAt(0)));
display_h2.show(Number(String(time.getHours()).charAt(1)));
display_m1.show(Number(String(time.getMinutes()).charAt(0)));
display_m2.show(Number(String(time.getMinutes()).charAt(1)));
display_s1.show(Number(String(time.getSeconds()).charAt(0)));
display_s2.show(Number(String(time.getSeconds()).charAt(1)));
stroke(255,0,0)
strokeWeight(20)
point(400,160)
point(400,220)
point(800,160)
point(800,220)
stroke(0)
strokeWeight(0)
}
