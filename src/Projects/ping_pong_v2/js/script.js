window.onload = function () {
    let aiPoints = document.querySelector(".AI")
    let playerPoints = document.querySelector(".Player")
    let wrap = document.querySelector(".wrap")
    var backgroundColor = "#dbdbdb";
    var paddleWidth = 100;
    var paddleHeight = 16;
    var ballRadius = 16;
    var pointsPlayer = 0;
    var pointsComputer = 0;
    var assetsObj = {
        "audio": {
            "hit": ["sounds/hit.mp3", "sounds/hit.ogg"],
            "hit2": ["sounds/hit2.mp3", "sounds/hit2.ogg"],
            "powerup": "sounds/Powerup.mp3",
        },
        "sprites": {
            "images/pong_sprites.png": {
                "tile": 16,
                "tileh": 16,
                "map": {
                    "floor0": [0, 0, 1, 1],
                    "floor1": [0, 1, 1, 1],
                    "floor2": [1, 1, 1, 1],
                    "wall1": [6, 0, 1, 1],
                    "wall2": [7, 0, 1, 1],
                    "ball0": [2, 1, 1, 1],
                    "toppaddle": [0, 2, 4, 1],
                    "bottompaddle": [0, 3, 4, 1]
                }
            }
        }
    };


    Crafty.load(assetsObj, function () {
            Crafty.init(320, 480);
            Crafty.audio.play("powerup", -1);
            Crafty.background(backgroundColor);

            Crafty.e("topPaddle, Canvas, 2D, toppaddle")
                .attr({
                    x: 100,
                    y: 10,
                    w: paddleWidth,
                    h: paddleHeight
                })
                .bind("EnterFrame", function () {
                    var gameBall = Crafty("gameBall");
                    if (gameBall.ySpeed < 0) {
                        if (gameBall.x < this.x + paddleWidth / 2) {
                            this.x--;
                        } else {
                            this.x++;
                        }
                    }
                    if (this.x <= 0) {
                        this.x = 0;
                    }
                    if (this.x >= 320 - paddleWidth) {
                        this.x = 320 - paddleWidth;
                    }
                });

            Crafty.e("bottomPaddle, Canvas, 2D, bottompaddle, Multiway")
                .attr({
                    x: 100,
                    y: 460,
                    w: paddleWidth,
                    h: paddleHeight
                })
                .multiway(120, {
                    LEFT_ARROW: 180,
                    RIGHT_ARROW: 0,
                    A: 180,
                    D: 0
                })
                .bind("EnterFrame", function () {
                    if (this.x <= 0) {
                        this.x = 0;
                    }
                    if (this.x >= 320 - paddleWidth) {
                        this.x = 320 - paddleWidth;
                    }
                });

            Crafty.e("gameBall, 2D, Canvas, ball0, Collision")
                .attr({
                    x: 160,
                    y: 240,
                    w: ballRadius,
                    h: ballRadius,
                    xSpeed: 1,
                    ySpeed: 3
                })
                .bind("EnterFrame", function () {
                    this.x += this.xSpeed * 1.2;
                    this.y += this.ySpeed * 1.5;
                    if (this.x <= 0 || this.x >= 320 - ballRadius) {
                        this.xSpeed *= -1;
                    }
                    if (this.y < 0) {
                        pointsPlayer++;
                        console.log(pointsPlayer);
                        playerPoints.innerText = "🤓 Pelaaja: " + pointsPlayer;
                        this.x = 160;
                        this.y = 240;
                        if (pointsPlayer >= 10) {
                            aiPoints.innerText = "GAME OVER";
                            playerPoints.innerText = "PLAYER WINS";
                            wrap.style.backgroundColor = "limegreen";
                            wrap.style.color = "white";
                            wrap.style.fontSize = "30px";
                            wrap.style.paddingLeft = "20px";
                            this.destroy();
                        }
                    }
                    if (this.y > 480) {
                        pointsComputer++;
                        console.log(pointsComputer);
                        aiPoints.innerText = "🖥 Tietokone: " + pointsComputer;
                        this.x = 160;
                        this.y = 240;
                        if (pointsComputer >= 10) {
                            aiPoints.innerText = "GAME OVER";
                            playerPoints.innerText = "COMPUTER WINS";
                            wrap.style.backgroundColor = "crimson";
                            wrap.style.color = "white";
                            wrap.style.fontSize = "30px";
                            wrap.style.paddingLeft = "20px";
                            this.destroy();
                        }
                    }

                })
                .onHit("bottomPaddle", function () {
                    Crafty.audio.play("hit");
                    this.ySpeed *= -1;
                    this.y = 460 - ballRadius;
                })
                .onHit("topPaddle", function () {
                    Crafty.audio.play("hit2");
                    this.ySpeed *= -1;
                    this.y = paddleHeight + ballRadius;
                });
        },
        function (e) {
            console.log(e)
        },
        function (e) {
            console.log(e)
        });

    Crafty.e(e)
        .attr({
            x: 100,
            y: 10,
            w: paddleWidth,
            h: paddleHeight
        })
}