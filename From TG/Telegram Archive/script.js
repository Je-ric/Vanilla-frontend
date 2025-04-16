const canvas = document.querySelector("canvas");
const img = document.querySelector("img");
const c = canvas.getContext("2d");

imgStroke = c.createPattern(img, "no-repeat");

imgStroke.set;

canvas.width = 612;
canvas.height = 513;

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 700) + min);
}

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 250) + min);
}

function randomRgbValue() {
  const red = randomIntFromRange(41, 44);
  const green = randomIntFromRange(62, 128);
  const blue = randomIntFromRange(80, 185);

  return `rgba(${red},${green},${blue},1)`;
}

function Particle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.radians = Math.random() * Math.PI * 2;
  this.velocity = 0.05;
  this.distanceFromCenter =
    //this for 2d randomIntFromRange(50, 220);
    // this makes 3D
    { x: randomIntFromRange(0, 200), y: randomIntFromRange(0, 200) };

  this.update = () => {
    //move points over time
    const lastPoint = { x: this.x, y: this.y };
    this.radians += this.velocity;
    this.x = x + Math.cos(this.radians) * this.distanceFromCenter.x;
    this.y = y + Math.sin(this.radians) * this.distanceFromCenter.y;
    this.draw(lastPoint);
  };

  this.draw = (lastPoint) => {
    c.beginPath();
    c.strokeStyle = imgStroke;
    c.lineWidth = this.radius;
    c.moveTo(lastPoint.x, lastPoint.y); //prev frame
    c.lineTo(this.x, this.y); // next frame
    c.stroke();
    // c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // c.fillStyle = this.color;
    // c.fill();
    c.closePath();
  };
}

let particles;
function init() {
  particles = [];

  for (let i = 0; i < 400; i++) {
    const radius = Math.random * 2 + 1;
    const color = randomRgbValue();
    console.log(color);
    particles.push(
      new Particle(canvas.width / 2, canvas.height / 2, radius, color)
    );
  }
}

//animate loop
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "rgba(0, 0, 0, 0.05)";
  //below clears screen ever rerender, try commenting when clearRect, fill rect gives tails
  //c.fillStyle = imgStroke;
  c.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
  });
}

init();
animate();
