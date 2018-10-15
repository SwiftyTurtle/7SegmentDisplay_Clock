class SevenSegmentDisplay {
  constructor(pos, defaultNum, color) {
    this.pos = pos;
    this.nums = [0x7E,0x30,0x6D,0x79,0x33,0x5B,0x5F,0x70,0x7F,0x7B];
    this.index = defaultNum - 1;
  }

  getColor(val, shift) {
  	let r = 255;
  	let g = 0;
  	let b = 0;
  	let a = 255 * ((val >> shift) & 1);
  	return color(r,g,b,a);
  }

  show(val) {
    val = this.nums[val];
  	push();
  	stroke(0);
  	noFill();

  	fill(this.getColor(val, 6));
  	rect(this.pos.x + 60,this.pos.y + 20,80,20,20);

  	fill(this.getColor(val, 5));
  	rect(this.pos.x + 140,this.pos.y + 40,20,100,20);

  	fill(this.getColor(val, 4));
  	rect(this.pos.x + 140,this.pos.y + 160,20,100,20);

  	fill(this.getColor(val, 3));
  	rect(this.pos.x + 60,this.pos.y + 260,80,20,20);

  	fill(this.getColor(val, 2));
  	rect(this.pos.x + 40,this.pos.y + 160,20,100,20);

  	fill(this.getColor(val, 1));
  	rect(this.pos.x + 40,this.pos.y + 40,20,100,20);

  	fill(this.getColor(val, 0));
  	rect(this.pos.x + 60,this.pos.y + 140,80,20,20);

  	pop();
  }
}
