let angel_img: p5.Image;
let estrela_img: p5.Image;
let board_image:  p5.Image;

let anjo: Entidade;
let estrela: Entidade;
let board: Board;
class Entidade{
    x: number;
    y:number;
    step:number;
    image: p5.Image;
            //parametros
    constructor(x:number, y:number, step:number, image: p5.Image){
       this.x = x;
       this.y = y;
       this.step = step;
       this.image = image; 
    }
    draw(){
        image(this.image, this.x * this.step, this.y * this.step, this.step, this.step);
    }
}
class Board{
    nl: number;
    nc: number;
    step: number;
    background: p5.Image;
    constructor(nl:number, nc:number, step:number, background: p5.Image){
        this.nl = nl;
        this.nc = nc;
        this.step = step;
        this.background = background; 
     }
     draw():void{
        image(this.background, 0, 0, this.nc * this.step, this.nl * this.step);
         for(let x = 0; x<this.nc; x++){
            for(let y = 0; y < this.nl; y++){
               noFill();
                 stroke(0);
                 strokeWeight(2);
                 rect(x * this.step, y * this.step, this.step, this.step);
             }
         }
    }
}
 
function preload(){
    angel_img = loadImage('../sketch/anjinho.png');
    estrela_img = loadImage('../sketch/estrela.png');
    board_image = loadImage('../sketch/ceu.jpg') ;
}
function keyPressed(){
    if(keyCode == LEFT_ARROW){
        anjo.x--;
    }
    else if(keyCode == RIGHT_ARROW){
        anjo.x++;
    }
    else if(keyCode == UP_ARROW){
        anjo.y--;
    }
    else if(keyCode == DOWN_ARROW){
        anjo.y++;
    }


    if(keyCode == "A".charCodeAt(0)){
        estrela.x--;
    }
    else if(keyCode == "D".charCodeAt(0)){
        estrela.x++;
    }
    else if(keyCode == "W".charCodeAt(0)){
        estrela.y--;
    }
    else if(keyCode == "S".charCodeAt(0)){
        estrela.y++;
    }
}
function setup() {
let size = 100;
anjo = new Entidade(2, 2, size, angel_img);
estrela = new Entidade(1, 2, size, estrela_img);
board = new Board(5, 6, size, board_image);
createCanvas(board.nc*size, board.nl*size);


}

function draw(){
    board.draw();
    anjo.draw();
    estrela.draw();


}