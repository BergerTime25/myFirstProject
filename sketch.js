function setup() {
  createCanvas( windowWidth , windowHeight );
}

function draw() {
  ellipseMode(RADIUS)
  ellipse( mouseX , mouseY , 100 , 100 );
  fill( 250 , 0 , 0 , 50 );
}
