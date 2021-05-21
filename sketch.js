var garden
var cat,mouse
var catImg,catImg2,mouseImg,mouseImg2
function preload() {
    garden=loadImage("garden.png");
    catImg=loadAnimation("cat1.png");
    catwalking=loadAnimation("cat2.png","cat3.png");
    cathappy=loadAnimation("cat4.png");
    mouseImg=loadAnimation("mouse1.png");
    mouseteasing=loadAnimation("mouse2.png","mouse3.png");
    mousehappy=loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(200,200,20,20);
    cat.addAnimation("cat_sitting",catImg);
    mouse = createSprite(300,200,20,20);
    mouse.addAnimation("mouse_sitting",mouseImg);

}

function draw() {

    background(255);
    if(mouse.isTouching(cat)){
        mouse.changeAnimation(mousehappy);
        cat.changeAnimation(cathappy);
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code her
  if(keyPressed===LEFT_ARROW){
      mouse.changeAnimation("mouse_teasing",mouseteasing)
      cat.changeAnimation("cat_walking",catwalking)
  }


}
