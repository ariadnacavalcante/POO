//variáveis
//lados
const NL = 6;
const NC = 6;
const LADO = 50;
//posição da cobrinha
let snake_x = 2;
let snake_y = 0;
let snake_vx = 0;
let snake_vy = 0;
//atributos cobrinha
let snake_color;
let cell_color;
//timer
let timer = 0;
//comida
let food_x=0;
let food_y=0;
let food_color;
let food_count = 0;


// setup
function setup(){
    createCanvas(NC * LADO , NL * LADO, LADO);
    snake_color = color("purple");
    cell_color = color("green");
    food_color = color("blue");
    food_generate();

}

function draw_cell(x, y, color){
    noStroke();
    fill(color);
    square(x*LADO +1, y*LADO +1, LADO - 1);
}
//matriz
function draw_mat() {
    fill(155);
    for(let c = 0; c < NC; c++)
        for(let l = 0; l < NL; l++)
            draw_cell(c, l, cell_color);
}

//rastejar 
function snake_loop(){
    if(snake_x == NC)
        snake_x = 0;
    if(snake_y == NL)
        snake_y = 0;
    if(snake_x == -1)
        snake_x = NC - 1;
    if(snake_y == -1)
        snake_y = NL -1;
}
//
function snake_walk(){
    if(frameCount - timer > 50){
        timer = frameCount;
        snake_x += snake_vx;
        snake_y += snake_vy;

    }
}
//gerar comida, posição da comida
function food_generate(){
    food_x = parseInt(random (0, NC));
    food_y = parseInt(random (0, NL));
}
// desenhar na tela
function draw(){
    snake_walk();
    snake_loop();
    if(snake_x == food_x && snake_y == food_y){     
        food_generate();
        food_count += 1
    }
    background(255);
    draw_mat();
    draw_cell(food_x, food_y, food_color);
    draw_cell(snake_x, snake_y, snake_color);

    fill(0);
    textSize(10);
    text(food_count, 10, 30);
    
}
// função que realiza os movimentos 
function keyPressed(){
    if(keyCode === LEFT_ARROW){
        snake_vx = -1;
        snake_vy = 0;
    } else if(keyCode === RIGHT_ARROW){
        snake_vx = 1;
        snake_vy = 0;
    } else if(keyCode === UP_ARROW){
        snake_vx = 0;
        snake_vy = -1;
    }else if(keyCode === DOWN_ARROW){
        snake_vx = 0;
        snake_vy = 1;
    }
}