var angel_img;
var estrela_img;
var board_image;
var anjo;
var estrela;
var board;
var Entidade = (function () {
    function Entidade(x, y, step, image) {
        this.x = x;
        this.y = y;
        this.step = step;
        this.image = image;
    }
    Entidade.prototype.draw = function () {
        image(this.image, this.x * this.step, this.y * this.step, this.step, this.step);
    };
    return Entidade;
}());
var Board = (function () {
    function Board(nl, nc, step, background) {
        this.nl = nl;
        this.nc = nc;
        this.step = step;
        this.background = background;
    }
    Board.prototype.draw = function () {
        image(this.background, 0, 0, this.nc * this.step, this.nl * this.step);
        for (var x = 0; x < this.nc; x++) {
            for (var y = 0; y < this.nl; y++) {
                noFill();
                stroke(0);
                strokeWeight(2);
                rect(x * this.step, y * this.step, this.step, this.step);
            }
        }
    };
    return Board;
}());
function preload() {
    angel_img = loadImage('../sketch/anjinho.png');
    estrela_img = loadImage('../sketch/estrela.png');
    board_image = loadImage('../sketch/ceu.jpg');
}
function keyPressed() {
    if (keyCode == LEFT_ARROW) {
        anjo.x--;
    }
    else if (keyCode == RIGHT_ARROW) {
        anjo.x++;
    }
    else if (keyCode == UP_ARROW) {
        anjo.y--;
    }
    else if (keyCode == DOWN_ARROW) {
        anjo.y++;
    }
    if (keyCode == "A".charCodeAt(0)) {
        estrela.x--;
    }
    else if (keyCode == "D".charCodeAt(0)) {
        estrela.x++;
    }
    else if (keyCode == "W".charCodeAt(0)) {
        estrela.y--;
    }
    else if (keyCode == "S".charCodeAt(0)) {
        estrela.y++;
    }
}
function setup() {
    var size = 100;
    anjo = new Entidade(2, 2, size, angel_img);
    estrela = new Entidade(1, 2, size, estrela_img);
    board = new Board(5, 6, size, board_image);
    createCanvas(board.nc * size, board.nl * size);
}
function draw() {
    board.draw();
    anjo.draw();
    estrela.draw();
}
//# sourceMappingURL=build.js.map