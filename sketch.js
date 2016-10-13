function setup() {
  createCanvas( windowWidth , windowHeight );
}

function draw() {
  rektMode(RADIUS)
  rekt( mouseX , mouseY , 100 , 100 );
  fill( 250 , 0 , 0 , 50 );
}
