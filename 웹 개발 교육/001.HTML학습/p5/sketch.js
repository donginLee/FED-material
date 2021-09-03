let x;
let y;
let mode;
let go=0;
let moving=1;
let stop=2;
let stopped=3;
let wheelrotate;
let direction=0;
let breaking=1;
let breaking2=2;
let vel=0;
let acc=0;
let accacc=0.1;
let a=0;


function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
  x=0;
  y=-2000;
  mode=go;
  wheelrotate=0;
  direction=0;
  smooth();
  colorMode(HSB,100);
}

function draw() {
  background(220);
  rotateX(PI/2);
  //rotateZ(-PI/2);
  translate(0,0,-100);
  plane(10000);
  //direction=map(mouseX,0,width,-PI/8,PI/8);
  back();
  carmove();

  car();

  /*camera(500*cos(map(mouseX,-width/2,width/2,-PI/2,PI/2)),0,y-500*sin(map(mouseX,-width/2,width/2,-PI/2,PI/2)),0,0,y, 0, 1,0);*/
  push()
  translate(100,0,0);
  fill(0);
  sphere(10);
  pop()
  check();
  camera(x+400*sin(direction),0,-400*cos(direction)+y,x,0,y,0,1,0);
}
function car()
{
  push()
  {push();
 {
 translate(x,y,30);
   rotateZ(direction);
 box(30,50,40);
 pop();}
   translate(x,y);
 push();
   {rotateZ(direction);
 translate(-10,-15,10);
   rotateZ(PI/2);
   check();
   rotateY(y/20);
   
 cylinder(10,8);
 }pop();
  push();{
    rotateZ(direction);
 translate(-10,15,10);
   rotateZ(PI/2);
    rotateY(y/20);
 cylinder(10,8);}pop();
  push();{rotateZ(direction);
 translate(10,15,10);
   rotateZ(PI/2);
    
    rotateY(y/20);
 cylinder(10,8);}pop();
  push();{rotateZ(direction);
 translate(10,-15,10);
   rotateZ(PI/2);
    rotateY(y/20);
 cylinder(10,8);}pop();
}pop()
}

function carmove()
{if(keyIsDown(UP_ARROW))
{ if(vel+acc<=30){acc=acc+accacc;
                vel=vel+acc;}
 else {vel=30; acc=0; acc=acc+accacc;}
  
  y=y+vel*cos(direction);
 
  x=x-vel*sin(direction);

 if(keyIsDown(RIGHT_ARROW))
   direction=direction+0.02;
 if(keyIsDown(LEFT_ARROW))
   direction=direction-0.02;
}
 else if(mode==breaking)
 { if(vel-acc>0){acc=acc+accacc;
                vel=vel-acc;}
 else {vel=0; acc=0; acc=acc+accacc; mode=go;}
  
  y=y+vel*cos(direction);
 
  x=x-vel*sin(direction);

 if(keyIsDown(RIGHT_ARROW))
   direction=direction+0.02;
 if(keyIsDown(LEFT_ARROW))
   direction=direction-0.02;
}

if(keyIsDown(DOWN_ARROW))
{if(vel+acc<=20){acc=acc+accacc;
                vel=vel+acc;}
 else {vel=20; acc=0; acc=acc+accacc;}
  
  y=y-vel*cos(direction);
 x=x+vel*sin(direction);
 if(keyIsDown(RIGHT_ARROW))
   direction=direction-0.02;
 if(keyIsDown(LEFT_ARROW))
   direction=direction+0.02;
}
 else if(mode==breaking2)
 { if(vel-acc>0){acc=acc+accacc;
                vel=vel-acc;}
 else {vel=0; acc=0; acc=acc+accacc; mode=go;}
  
  y=y-vel*cos(direction);
 
  x=x+vel*sin(direction);

 if(keyIsDown(RIGHT_ARROW))
   direction=direction+0.02;
 if(keyIsDown(LEFT_ARROW))
   direction=direction-0.02;
}
/* if(mode=breaking)
 { if(vel-acc>0){
   acc=acc+accacc;
   vel=vel-acc;}
  else {vel=0;}
   
   y=y+vel*cos(direction);
 
  x=x-vel*sin(direction);}*/
}

function keyPressed()
{
  if(keyCode===UP_ARROW)
  {mode=go;}
}
function keyReleased()
{
 
  if(keyCode===UP_ARROW)
  {mode=breaking; print(vel,acc);acc=0.1;
  }
   if(keyCode===DOWN_ARROW)
  {mode=breaking2; print(vel,acc);acc=0.1;
  }
}

function back()
{for(let i=0;i<10;i++){push();
 translate(0,4500-1000*i,0);
 fill(10*i,100,50);
box(10000,1000,10);
 
 pop();}}

function check()
{push()
 strokeWeight(3);
 stroke(255,0,0);
 line(0,0,0,100,0,0);
 stroke(0,255,0);
 //line(0,0,0,0,100,0);
 stroke(0,0,255);
// line(0,0,0,0,0,100);
pop()}

/*function keyTyped() {
  if (key === 'a') {
    print("a");
  } else if (key === 'b') {
    print("b");
  }
  // uncomment to prevent any default behavior
  // return false;
}*/