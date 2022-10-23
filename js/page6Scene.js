class Page6Scene extends Phaser.Scene {
    constructor() {
        super('Page6Scene');
    }
    preload() {
        //load our images or sounds 
        this.load.image("background", "images/background.jpg");
        this.load.image("logo", "images/logo.png");
        this.load.image("shark02", "images/shark02.png");
    }

    create() {
        // Background.
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);
        //this.background.setInteractive();
        // this.background.on("pointerdown", this.onButtonDown, this);

        // Images.
        this.logo = this.add.image(1150, 80, "logo");
        this.logo.scaleX = 0.15;
        this.logo.scaleY = 0.15;

        // Text.
        this.text1 = this.add.text(10, 40, "Finding Perimeter", { fontFamily: "Arial", fontSize: "60px" });
        this.text2 = this.add.text(400, game.config.height - 50, "Drag the shape into the correct box.", { fontFamily: "Arial", fontSize: "28px", fontStyle: "bold" });

        // Sprites
        this.shark02 = this.add.image(-45, 200, "shark02");
        this.shark02.scaleX = 1;
        this.shark02.scaleY = 1;

        // Animation
        this.tweens.add({ targets: this.shark02, duration: 1000, x: game.config.width / 5 });

        // Shapes ---------

        // Square
        var square = this.add.graphics();
        square.lineStyle(6, 0x000000);
        square.fillStyle(0xffc000);
        square.strokeRect(0, 0, 120, 120);
        square.fillRect(0, 0, 120, 120);
        var squareText = this.add.text(-50, 46, "7m", { fontFamily: "Arial", fontSize: "28px", fontStyle: "bold" });
        var squareContainer = this.add.container(200, 400, [square, squareText]);
        squareContainer.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 120), Phaser.Geom.Rectangle.Contains);
        this.input.setDraggable(squareContainer);
        this.input.on('drag', function (pointer, squareContainer, dragX, dragY) {
            squareContainer.x = dragX;
            squareContainer.y = dragY;
        });

        // Rectangle
        var rectangle = this.add.graphics();
        rectangle.lineStyle(6, 0x000000);
        rectangle.fillStyle(0xa8d08c);
        rectangle.strokeRect(0, 0, 240, 100);
        rectangle.fillRect(0, 0, 240, 100);
        var rectText1 = this.add.text(-50, 36, "5m", { fontFamily: "Arial", fontSize: "28px", fontStyle: "bold" });
        var rectText2 = this.add.text(90, -35, "10m", { fontFamily: "Arial", fontSize: "28px", fontStyle: "bold" });
        var rectContainer = this.add.container(500, 500, [rectangle, rectText1, rectText2]);
        rectContainer.setInteractive(new Phaser.Geom.Rectangle(0, 0, 240, 100), Phaser.Geom.Rectangle.Contains);
        this.input.setDraggable(rectContainer);
        this.input.on('drag', function (pointer, rectContainer, dragX, dragY) {
            rectContainer.x = dragX;
            rectContainer.y = dragY;
        });

        var triangle = this.add.triangle(0, 0, 50, 0, 100, 200, 0, 200, 0xed7d31);
        triangle.setStrokeStyle(3, 0x000000);
        var triangleText1 = this.add.text(-90, 0, "11m", { fontFamily: "Arial", fontSize: "28px", fontStyle: "bold" });
        var triangleText2 = this.add.text(30, 0, "11m", { fontFamily: "Arial", fontSize: "28px", fontStyle: "bold" });
        var triangleText3 = this.add.text(-20, 100, "6m", { fontFamily: "Arial", fontSize: "28px", fontStyle: "bold" });
        var triangleContainer = this.add.container(480, 330, [triangle, triangleText1, triangleText2, triangleText3]);
        triangleContainer.setInteractive(new Phaser.Geom.Rectangle(-50, -100, 100, 200), Phaser.Geom.Rectangle.Contains);
        this.input.setDraggable(triangleContainer);
        this.input.on('drag', function (pointer, triangleContainer, dragX, dragY) {
            triangleContainer.x = dragX;
            triangleContainer.y = dragY;
        });

        var data = [60, 0, 120, 50, 100, 120, 20, 120, 0, 50];
        var pentagon = this.add.polygon(0, 0, data, 0x9966ff, 1);
        pentagon.setStrokeStyle(3, 0x000000);
        var pentagonText1 = this.add.text(-80, -60, "6m", { fontFamily: "Arial", fontSize: "28px", fontStyle: "bold" });
        var pentagonText2 = this.add.text(40, -60, "6m", { fontFamily: "Arial", fontSize: "28px", fontStyle: "bold" });
        var pentagonText3 = this.add.text(50, 20, "6m", { fontFamily: "Arial", fontSize: "28px", fontStyle: "bold" });
        var pentagonText4 = this.add.text(-20, 60, "6m", { fontFamily: "Arial", fontSize: "28px", fontStyle: "bold" });
        var pentagonText5 = this.add.text(-90, 20, "6m", { fontFamily: "Arial", fontSize: "28px", fontStyle: "bold" });
        var pentagonContainer = this.add.container(680, 300, [pentagon, pentagonText1, pentagonText2, pentagonText3, pentagonText4, pentagonText5]);


        // Drop zones
        this.dropZone1 = this.add.graphics();
        this.dropZone1.lineStyle(6, 0x000000);
        this.dropZone1.fillStyle(0xffffff);
        this.dropZone1.strokeRect(860, 200, 360, 200);
        this.dropZone1.fillRect(860, 200, 360, 200);

        this.dropZone2 = this.add.graphics();
        this.dropZone2.lineStyle(6, 0x000000);
        this.dropZone2.fillStyle(0xffffff);
        this.dropZone2.strokeRect(860, 450, 360, 200);
        this.dropZone2.fillRect(860, 450, 360, 200);

        this.header1 = this.add.graphics();
        this.header1.lineStyle(6, 0x000000);
        this.header1.fillStyle(0x4472c4);
        this.header1.strokeRect(900, 170, 280, 40);
        this.header1.fillRect(900, 170, 280, 40);

        this.header2 = this.add.graphics();
        this.header2.lineStyle(6, 0x000000);
        this.header2.fillStyle(0x4472c4);
        this.header2.strokeRect(900, 420, 280, 40);
        this.header2.fillRect(900, 420, 280, 40);

        this.text13 = this.add.text(960, 175, "Perimeter = 28", { fontFamily: "Arial", fontSize: "24px" });
        this.text14 = this.add.text(960, 425, "Perimeter = 30", { fontFamily: "Arial", fontSize: "24px" });

    }

    onButtonDown() {
        console.log("test");
        //  this.scene.start("Page7Scene");
    }

}