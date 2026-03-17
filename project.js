// <---- Variables ---->
var spinCat1 = createSprite(75, 75);
var spinCat2 = createSprite(325, 75);
var scaleCat = createSprite(200, 200);
var cat = createSprite(350, 275);
var textVisible = true;

// <---- Visible Settings ---->
scaleCat.visible = false;
spinCat1.visible = false;
spinCat2.visible = false;
cat.visible = false;

// <---- Scale Setting ---->
spinCat1.scale = 0.35;
spinCat2.scale = 0.35;
cat.scale = 0.35;

// <---- Draw Function ---->
function draw() {
  background("white");
  // <---- Rectangle BG ---->
  fill("red");
  rect(0,0, 400, 400);
// <---- Prepped Rotations ---->
  spinCat1.rotation = spinCat1.rotation + randomNumber(5,15);
  spinCat2.rotation = spinCat2.rotation - randomNumber(5,15);

// <---- Space Key ---->
  if (keyWentDown("space")) {
    textVisible = false;
    spinCat1.setAnimation("spinCat1");
    spinCat2.setAnimation("spinCat2");
    spinCat1.visible = true;
    spinCat2.visible = true;
    // Added another cat as per request from Peer Review
    cat.setAnimation("spinCat1");
    cat.visible = true;
    
    // <- Music ->
  playSound("nastelbom-happy-birthday-495860.mp3", false);
  }
  
// <---- ScaleCat Settings ---->
  if (mousePressedOver(spinCat2)){
    scaleCat.setAnimation("scaleCat");
    scaleCat.visible = true;
    scaleCat.scale = scaleCat.scale + 0.15;
    playSound("sound://category_animals/cat.mp3", false);
    }
    
// <---- Text ---->
  if (textVisible) {
    fill("black");
    textSize(30);
    text("Press Space to Begin", 60, 120);
    text("C'mon press it!", 80, 300);
  } 
  else {
    fill("black");
    textSize(30);
    text("Happy Birthday!", 75, 275);
    textSize(10);
    text("Psst! Click the cat in the top right!", 60, 370);
  }
  
// <---- Draw ---->
  drawSprites();
}
