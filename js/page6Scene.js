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

        // Shapes
        this.square = this.add.graphics();
        this.square.lineStyle(6, 0x000000);
        this.square.fillStyle(0xffc000);
        this.square.strokeRect(200, 400, 120, 120);
        this.square.fillRect(200, 400, 120, 120);

        this.rectangle = this.add.graphics();
        this.rectangle.lineStyle(6, 0x000000);
        this.rectangle.fillStyle(0xa8d08c);
        this.rectangle.strokeRect(500, 500, 240, 100);
        this.rectangle.fillRect(500, 500, 240, 100);

        var triangle = this.add.triangle(480, 330, 50, 0, 100, 200, 0, 200, 0xed7d31);
        triangle.setStrokeStyle(3, 0x000000);

        var data = [60, 0, 120, 50, 100, 120, 20, 120, 0, 50];
        var pentagon = this.add.polygon(680, 300, data, 0x9966ff, 1);
        pentagon.setStrokeStyle(3, 0x000000);


        // Text.
        this.text3 = this.add.text(150, 446, "7m", { fontFamily: "Arial", fontSize: "28px", fontStyle: "bold" });
        this.text4 = this.add.text(450, 536, "5m", { fontFamily: "Arial", fontSize: "28px", fontStyle: "bold" });
        this.text5 = this.add.text(590, 465, "10m", { fontFamily: "Arial", fontSize: "28px", fontStyle: "bold" });
        this.text6 = this.add.text(390, 330, "11m", { fontFamily: "Arial", fontSize: "28px", fontStyle: "bold" });
        this.text7 = this.add.text(510, 330, "11m", { fontFamily: "Arial", fontSize: "28px", fontStyle: "bold" });
        this.text8 = this.add.text(460, 430, "6m", { fontFamily: "Arial", fontSize: "28px", fontStyle: "bold" });

        this.text9 = this.add.text(600, 240, "6m", { fontFamily: "Arial", fontSize: "28px", fontStyle: "bold" });
        this.text10 = this.add.text(720, 240, "6m", { fontFamily: "Arial", fontSize: "28px", fontStyle: "bold" });
        this.text11 = this.add.text(730, 320, "6m", { fontFamily: "Arial", fontSize: "28px", fontStyle: "bold" });
        this.text12 = this.add.text(660, 360, "6m", { fontFamily: "Arial", fontSize: "28px", fontStyle: "bold" });
        this.text13 = this.add.text(590, 320, "6m", { fontFamily: "Arial", fontSize: "28px", fontStyle: "bold" });

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
        this.scene.start("Page7Scene");
    }

}