//Переменные
const WIDTH = 480;
const HEIGHT = 360;
let draw = SVG("game").size(WIDTH, HEIGHT);
let bg = draw.image("./images/desert.png", WIDTH, HEIGHT);
let dino = draw.image("./images/DinoAnimation.gif", 84, 67).move(0, 180);
let cactus = draw.image("./images/cactus2.png", 50, 62).move(WIDTH, 185);
let score = draw.text("0").move(400, 0).font({
    size: 40
}).fill("white");
let changeY = 0;
let jump = false;
let schet = 0;
let collisionBool = true;
//Код
function update() {
    if (jump) {
        dino.dy(changeY);
        changeY += 0.5;
        if (dino.y() >= 180) {
            jump = false;
        };
    };
    let collision = dino.x() + dino.width() > cactus.x() && dino.x() < cactus.x() + cactus.width() && dino.y() + dino.height() > cactus.y() && collisionBool == true;
    
    if (collision) {
        collisionBool = false;
        alert("Динозаврик погиб храбро (Хотя это даже не динозаврик)")
        bg.load("./images/desertGO.png");
        clearInterval(updateid);
        collisionBool = true;
    }
    let speed = Math.ceil(Math.random() * 6);
    speed += 4;
    speed = -speed;
    if (cactus.x() <= 0) {
        schet++;
        score = score.text(` ${schet}`);
        cactus.x(WIDTH);
    } else {
        cactus.dx(speed);
    }
};

let updateid = setInterval(update, 10);


document.addEventListener("keydown", function (event) {
    if (event.keyCode == 38 && !jump) {
        changeY = -14;
        jump = true;
    }
    if (event.keyCode == 32 && !jump) {
        changeY = -14;
        jump = true;
    }
});
let now = 1;