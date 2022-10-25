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
        this.background.setInteractive();
        this.background.on("pointerdown", this.onButtonDown, this);

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

        //  A drop zone
        var zone1 = this.add.zone(1040, 300, 360, 200).setRectangleDropZone(360, 200);
        var zone2 = this.add.zone(1040, 550, 360, 200).setRectangleDropZone(360, 200);

        // Drop zones graphics
        var dropZone1 = this.add.graphics();
        dropZone1.lineStyle(6, 0x000000);
        dropZone1.strokeRect(zone1.x - zone1.input.hitArea.width / 2, zone1.y - zone1.input.hitArea.height / 2, zone1.input.hitArea.width, zone1.input.hitArea.height);

        var dropZone2 = this.add.graphics();
        dropZone2.lineStyle(6, 0x000000);
        dropZone2.strokeRect(zone2.x - zone2.input.hitArea.width / 2, zone2.y - zone2.input.hitArea.height / 2, zone2.input.hitArea.width, zone2.input.hitArea.height);


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

        this.input.on('dragstart', function (pointer, squareContainer) {
            this.children.bringToTop(squareContainer);
        }, this);
        this.input.on('drag', function (pointer, squareContainer, dragX, dragY) {
            squareContainer.x = dragX;
            squareContainer.y = dragY;
        });
        this.input.on('dragenter', function (pointer, squareContainer, zone1) {
            dropZone1.lineStyle(6, 0x00ffff);
            dropZone1.strokeRect(zone1.x - zone1.input.hitArea.width / 2, zone1.y - zone1.input.hitArea.height / 2, zone1.input.hitArea.width, zone1.input.hitArea.height);
        });
        this.input.on('dragenter', function (pointer, squareContainer, zone2) {
            dropZone2.lineStyle(6, 0x00ffff);
            dropZone2.strokeRect(zone2.x - zone2.input.hitArea.width / 2, zone2.y - zone2.input.hitArea.height / 2, zone2.input.hitArea.width, zone2.input.hitArea.height);
        });
        this.input.on('dragleave', function (pointer, squareContainer, zone1) {
            dropZone1.lineStyle(6, 0x000000);
            dropZone1.strokeRect(zone1.x - zone1.input.hitArea.width / 2, zone1.y - zone1.input.hitArea.height / 2, zone1.input.hitArea.width, zone1.input.hitArea.height);
        });
        this.input.on('dragleave', function (pointer, squareContainer, zone2) {
            dropZone2.lineStyle(6, 0x000000);
            dropZone2.strokeRect(zone2.x - zone2.input.hitArea.width / 2, zone2.y - zone2.input.hitArea.height / 2, zone2.input.hitArea.width, zone2.input.hitArea.height);
        });
        this.input.on('drop', function (pointer, squareContainer, zone1) {
            squareContainer.x = zone1.x - 60;
            squareContainer.y = zone1.y - 60;
        });
        this.input.on('drop', function (pointer, squareContainer, zone2) {
            squareContainer.x = zone2.x - 60;
            squareContainer.y = zone2.y - 60;
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
        this.input.on('dragstart', function (pointer, rectContainer) {
            this.children.bringToTop(rectContainer);
        }, this);

        this.input.on('drag', function (pointer, rectContainer, dragX, dragY) {
            rectContainer.x = dragX;
            rectContainer.y = dragY;
        });
        this.input.on('drop', function (pointer, rectContainer, zone1) {
            rectContainer.x = zone1.x - 120;
            rectContainer.y = zone1.y - 50;
        });
        this.input.on('drop', function (pointer, rectContainer, zone2) {
            rectContainer.x = zone2.x - 120;
            rectContainer.y = zone2.y - 50;
        });

        var triangle = this.add.triangle(0, 0, 50, 0, 100, 200, 0, 200, 0xed7d31);
        triangle.setStrokeStyle(3, 0x000000);
        var triangleText1 = this.add.text(-90, 0, "11m", { fontFamily: "Arial", fontSize: "28px", fontStyle: "bold" });
        var triangleText2 = this.add.text(30, 0, "11m", { fontFamily: "Arial", fontSize: "28px", fontStyle: "bold" });
        var triangleText3 = this.add.text(-20, 100, "6m", { fontFamily: "Arial", fontSize: "28px", fontStyle: "bold" });
        var triangleContainer = this.add.container(480, 330, [triangle, triangleText1, triangleText2, triangleText3]);
        triangleContainer.setInteractive(new Phaser.Geom.Rectangle(-50, -100, 100, 200), Phaser.Geom.Rectangle.Contains);
        this.input.setDraggable(triangleContainer);
        this.input.on('dragstart', function (pointer, triangleContainer) {
            this.children.bringToTop(triangleContainer);
        }, this);
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
        pentagonContainer.setInteractive(new Phaser.Geom.Rectangle(-60, -60, 120, 120), Phaser.Geom.Rectangle.Contains);
        this.input.setDraggable(pentagonContainer);
        this.input.on('dragstart', function (pointer, pentagonContainer) {
            this.children.bringToTop(pentagonContainer);
        }, this);
        this.input.on('drag', function (pointer, pentagonContainer, dragX, dragY) {
            pentagonContainer.x = dragX;
            pentagonContainer.y = dragY;
        });










    }

    onButtonDown() {
        this.scene.start("Page7Scene");
    }

}