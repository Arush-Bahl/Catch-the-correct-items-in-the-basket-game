var basket, coins, coins2, bad, bad2, img1, img2, img3;
var score = 0;
var gameState = 1;
function setup() {
  createCanvas(1450, 650);
  img1 = loadImage("Catch basket.png");
  img2 = loadImage("Coins.png");
  img3 = loadImage("Garbage.png");

  basket = createSprite(725, 600, 50, 50);
  basket.addImage(img1);
  basket.scale = 0.13;

  coins = createSprite(random(10, 1440), 0, 10, 10);
  coins.setVelocity(0, random(4,8));
  coins.addImage(img2);
  coins.scale = 0.07;

  coins2 = createSprite(random(10, 1440), 0, 10, 10);
  coins2.setVelocity(0, random(4,8));
  coins.addImage(img2);
  coins2.scale = 0.1;

  bad = createSprite(random(10, 1440), 0, 10, 10);
  bad.setVelocity(0, random(4,8));
  bad.addImage(img3);
  bad.scale = 0.1;

  bad2 = createSprite(random(10, 1440), 0, 10, 10);
  bad2.setVelocity(0, random(4,8));
  bad2.addImage(img3);
  bad2.scale = 0.1;

}

function draw() {
  text("Score = " + score, 175, 25);
  console.log(score);
  basket.x = mouseX
  background(41.8, 64.7, 170.2);
  coins.collide(basket, good);
  coins2.collide(basket, good2);
  bad.collide(basket, evil);
  bad2.collide(basket, evil2);

  if (coins.x > 575) {

    if (coins.y > 650) {

      score = score - 0.5;
      coins.x = random(10, 1440);
      coins.y = 0;
      coins.setVelocity(0, random(4, 8));

    }
  }

  if (coins2.x > 575){

    if (coins2.y > 650) {

      score = score - 0.5;
      coins2.x = random(10, 1440);
      coins2.y = 0
      coins2.setVelocity(0, random(4, 8));

    }
  }

  if (bad.x > 575) {

    if (bad.y > 650) {

      score = score + 0.5;
      bad.x = random(10, 1440);
      bad.y = 0;
      bad.setVelocity(0, random(4, 8));


    }
  }
  
    if (bad.x > 575) {

      if (bad2.y > 650) {

        score = score + 0.5;
        bad.x = random(10, 1440);
        bad.y = 0;
        bad.setVelocity(0, random(4,8));

      }
    }

    drawSprites();

  }

  function good() {

    coins.x = random(10, 1440);
    coins.y = 0;
    coins.setVelocity(0, random(2, 6));
    score = score + 1

  }

  function good2() {

    coins2.x = random(10, 1440);
    coins2.y = 0
    score = score + 1
    coins2.setVelocity(0, random(2, 6));

  }

  function evil() {

    bad.x = random(10, 1440);
    bad.y = 0;
    score = score - 1
    bad.setVelocity(0, random(2, 6));

  }

  function evil2() {

    bad2.x = random(10, 1440);
    bad2.y = 0;
    score = score - 1;
    bad2.setVelocity(0, random(2, 6));

  }