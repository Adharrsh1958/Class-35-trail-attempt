var ball;
var position, database, position2;

function setup() {
    database = firebase.database();
    createCanvas(500, 500);
    ball = createSprite(250, 250, 10, 10);
    ball.shapeColor = "red";
    position = database.ref('ball/position');
    position.on("value", readposition, showerror);
}

function draw() {
    background("white");
    if (keyDown(LEFT_ARROW)) {
        changePosition(-1, 0);
    }
    else if (keyDown(RIGHT_ARROW)) {
        changePosition(1, 0);
    }
    else if (keyDown(UP_ARROW)) {
        changePosition(0, -1);
    }
    else if (keyDown(DOWN_ARROW)) {
        changePosition(0, +1);
    }
    drawSprites();
}

function changePosition(x, y) {
    database.ref('ball/position').set({
        "x": position2.x + x, 
        "y": position2.y + y,
    })
    
}

function readposition(data) {
    position2 = data.val();
    ball.x = position2.x;
    ball.y = position2.y;
}

function showerror() {
    console.log("Data not recived from database");
}