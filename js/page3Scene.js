class Page3Scene extends Phaser.Scene {
    constructor() {
        super('Page3Scene');
    }
    preload() {
        //load our images or sounds 
        this.load.image("background", "images/background.jpg");
        this.load.image("logo", "images/logo.png");
        this.load.image("shark01", "images/shark01.png");
    }

    create() {
        // Background.
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);

        // Text.
        this.text1 = this.add.text(game.config.width / 2 + 200, game.config.height / 2 - 100, "PERIMETER", { fontFamily: "Arial", fontSize: "100px" });
        this.text1.setOrigin(0.5, 0.5);

        // Images.
        this.logo = this.add.image(120, 80, "logo");
        this.logo.scaleX = 0.15;
        this.logo.scaleY = 0.15;

        this.shark01 = this.add.image(250, 450, "shark01");
        this.shark01.scaleX = 0.3;
        this.shark01.scaleY = 0.3;

        // Graphics
        this.circle1 = this.add.graphics();
        this.circle1.lineStyle(12, 0xffffff);
        this.circle1.fillStyle(0xf414b4);
        this.circle1.strokeCircle(650, 400, 40);
        this.circle1.fillCircle(650, 400, 40);

        this.circle2 = this.add.graphics();
        this.circle2.lineStyle(12, 0xffffff);
        this.circle2.fillStyle(0xf414b4);
        this.circle2.strokeCircle(650, 520, 40);
        this.circle2.fillCircle(650, 520, 40);
        this.circle2.setInteractive();
        this.circle2.on("pointerdown", this.onButtonDown, this);

        // Text.
        this.number1 = this.add.text(650, 400, "1", { fontFamily: "Arial", fontSize: "32px" });
        this.number1.setOrigin(0.5, 0.5);

        this.number2 = this.add.text(650, 520, "2", { fontFamily: "Arial", fontSize: "32px" });
        this.number2.setOrigin(0.5, 0.5);

        // Rounded Rectangle.
        this.roundedRect1 = this.add.graphics();
        this.roundedRect1.fillStyle(0x70ad47, 1);
        this.roundedRect1.fillRoundedRect(710, 360, 400, 80, 16);
        this.roundedRect1.setInteractive(new Phaser.Geom.Rectangle(710, 360, 400, 80), Phaser.Geom.Rectangle.Contains);
        this.roundedRect1.on("pointerdown", this.onButtonDown, this);

        this.roundedRect2 = this.add.graphics();
        this.roundedRect2.fillStyle(0x4472c4, 1);
        this.roundedRect2.fillRoundedRect(710, 480, 400, 80, 16);

        // Text.
        this.objectiveText1 = this.add.text(720, 382, "Finding Perimeter", { fontFamily: "Arial", fontSize: "22px" });
        this.objectiveText2 = this.add.text(720, 502, "Determine Unknown Side Lengths", { fontFamily: "Arial", fontSize: "22px" });
    }

    onButtonDown() {
        this.roundedRect1.alpha = 0.5;
        this.scene.start("Page4Scene");
    }

}