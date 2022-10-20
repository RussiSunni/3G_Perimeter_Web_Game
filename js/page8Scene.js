class Page8Scene extends Phaser.Scene {
    constructor() {
        super('Page8Scene');
    }
    preload() {
        //load our images or sounds 
        this.load.image("background", "images/background.jpg");
        this.load.image("logo", "images/logo.png");

    }

    create() {
        // Background.
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);

        // Images.
        this.logo = this.add.image(1150, 80, "logo");
        this.logo.scaleX = 0.15;
        this.logo.scaleY = 0.15;

        // Text.
        this.text1 = this.add.text(10, 40, "Determine Unknown Side Lengths", { fontFamily: "Arial", fontSize: "60px" });
        this.text2 = this.add.text(320, game.config.height - 100, "Step 1: Add all the known side lengths together.", { fontFamily: "Arial", fontSize: "40px", fontStyle: "bold" });

        // Graphics  
        var data = [0, 0, 300, 0, 350, 200, -50, 200];
        var trapezoid = this.add.polygon(750, 350, data, 0x9966ff, 1);
        trapezoid.setStrokeStyle(3, 0x000000);

        this.text3 = this.add.text(560, 350, "Perimeter = 36in", { fontFamily: "Arial", fontSize: "36px", fontStyle: "bold" });
        this.text4 = this.add.text(660, 210, "10in", { fontFamily: "Arial", fontSize: "36px", fontStyle: "bold" });
        this.text5 = this.add.text(460, 330, "6in", { fontFamily: "Arial", fontSize: "36px", fontStyle: "bold" });
        this.text6 = this.add.text(883, 330, "6in", { fontFamily: "Arial", fontSize: "36px", fontStyle: "bold" });
        this.text7 = this.add.text(680, 450, "?", { fontFamily: "Arial", fontSize: "36px", fontStyle: "bold" });

        // Answer pad.
        var answerBG = this.add.rectangle(300, 300, 250, 350, 0xacb6de);
        answerBG.setStrokeStyle(1, 0x00000);
        this.text8 = this.add.text(320, 130, "10\n  6\n+6", { fontFamily: "Arial", fontSize: "48px", color: "0x000000" });
        var answerBox = this.add.rectangle(300, 400, 200, 100, 0xffffff);
        answerBox.setStrokeStyle(3, 0x00000);

        var line = this.add.graphics();

        line.lineStyle(5, 0x000000, 1);

        line.lineBetween(200, 320, 400, 320);


    }

    onButtonDown() {
        // this.roundedRect1.alpha = 0.5;
        // this.scene.start("Page8Scene");
    }

}