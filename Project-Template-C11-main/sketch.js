var path,boy, leftBoundary,rightBoundary;
var pathImg,coinImg,boyImg,bombImg;
var coin,coin2,coin3;
var bomb,bomb2,bomb3;
var i;


function preload(){
    pathImg = loadImage("path.png");
    boyImg = loadAnimation("Runner-1.png","Runner-2.png");
    coinImg =loadImage("coin.png");
    bombImg = loadImage("bomb.png");
}

function setup(){
    createCanvas(400,400);

    path=createSprite(200,200);
    path.addImage(pathImg);
    path.velocityY = 4;
    path.scale=1.2;

    coin = createSprite(85,-150);
    coin.addImage(coinImg);
    coin.scale = 0.4;
    coin.velocityY = 4;

    coin2 = createSprite(190,100);
    coin2.addImage(coinImg);
    coin2.scale = 0.4;
    coin2.velocityY = 4;

    coin3 = createSprite(300,-400);
    coin3.addImage(coinImg);
    coin3.scale = 0.4;
    coin3.velocityY = 4;

    bomb = createSprite(85,-300);
    bomb.addImage(bombImg);
    bomb.scale = 0.09;
    bomb.velocityY = 4;

    bomb2 = createSprite(190,10);
    bomb2.addImage(bombImg);
    bomb2.scale = 0.09;
    bomb2.velocityY = 4;

    bomb3 = createSprite(300,-200);
    bomb3.addImage(bombImg);
    bomb3.scale = 0.09;
    bomb3.velocityY = 4;

    boy = createSprite(180,340,30,30);
    boy.scale=0.06;
    boy.addAnimation("JakeRunning",boyImg);
      
    leftBoundary=createSprite(0,0,100,800);
    leftBoundary.visible = false;

    rightBoundary=createSprite(410,0,100,800);
    rightBoundary.visible = false;
}

function draw() {
    background(0);

    path.velocityY = 4;

    coin.velocityY = 4;
    coin2.velocityY = 4;
    
    boy.x = World.mouseX;
    
    edges= createEdgeSprites();

    boy.collide(edges[3]);
    boy.collide(leftBoundary);
    boy.collide(rightBoundary);
    
if(path.y > 400 ){
    path.y = height/2;
  }
 
if(coin.y > 400 && coin.x >= 85 ){
    coin.y = -85;
  }

if(coin2.y > 400 && coin2.x >= 190 ){
    coin2.y = 0;
  }

if(coin3.y > 400 && coin3.x >= 300 ){
    coin3.y = -40;
  }
  
if(bomb.y > 400 && bomb.x >= 85 ){
    bomb.y = -200;
  }

if(bomb2.y > 400 && bomb2.x >= 190 ){
    bomb2.y = -200;
  }

if(bomb3.y > 400 && bomb3.x >= 300 ){
    bomb3.y = -200;
  }
  
  drawSprites();
}
