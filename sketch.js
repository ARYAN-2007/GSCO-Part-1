var car;

var wall;
var divider;

var speed,weight;

function setup() {
  
  createCanvas(1600,600);

  speed = random(55,90);
  weight = random(400,1500);

  for (var s=75;s<600;s=s+150) {
    wall = createSprite(1500,s,35,80);
    wall.shapeColor = 'white';
  }

  for (var a=150;a<600;a=a+150) {
    divider = createSprite(800,a,1600,5);
    divider.shapeColor = 'white';
  }
  
  for (var b=75;b<600;b=b+150) {
    car = createSprite(50,b,30,30);
    car.velocityX = speed;
  }

}
 

function draw() {
  
  background("black");  
  
  drawSprites();

  if (wall.isTouching(car)) {
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500;

    if (deformation > 180) {
      car.shapeColor = 'red';
    }
    
    if (deformation < 180 && deformation > 100) {
      car.shapeColor = 'yellow';
    }
    
    if (deformation < 100) {
      car.shapeColor = 'green';
    }
  
  }

}
















