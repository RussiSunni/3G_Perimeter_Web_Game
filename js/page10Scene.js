class Page10Scene extends Phaser.Scene {
    constructor() {
        super('Page10Scene');
    }
    preload() {
        //load our images or sounds 
        this.load.image("background", "images/background.jpg");
        this.load.image("logo", "images/logo.png");
        this.load.image("fish01", "images/fish01.png");
        this.load.image("shark01", "images/shark01.png");
    }

    create() {
        // Background.
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);
        this.background.setInteractive();
        this.background.on("pointerdown", this.onButtonDown, this);

        // Images.
        this.logo = this.add.image(120, 80, "logo");
        this.logo.scaleX = 0.15;
        this.logo.scaleY = 0.15;

        // Text.
        this.text1 = this.add.text(game.config.width / 2 + 200, game.config.height / 2 - 150, "PERIMETER", { fontFamily: "Arial", fontSize: "120px" });
        this.text1.setOrigin(0.5, 0.5);


        // Rounded Rectangle.
        this.roundedRect1 = this.add.graphics();
        this.roundedRect1.fillStyle(0x4472c4, 1);
        this.roundedRect1.fillRoundedRect(610, 360, 600, 80, 16);

        this.roundedRect2 = this.add.graphics();
        this.roundedRect2.fillStyle(0x70ad47, 1);
        this.roundedRect2.fillRoundedRect(610, 480, 600, 80, 16);
        this.roundedRect2.setInteractive(new Phaser.Geom.Rectangle(610, 480, 600, 80), Phaser.Geom.Rectangle.Contains);
        this.roundedRect2.on("pointerdown", this.onButtonDown, this);




        this.fish01 = this.add.image(900, 350, "fish01");
        this.fish01.flipX = true;
        this.fish01.scaleX = 0.2;
        this.fish01.scaleY = 0.2;

    }

    onButtonDown() {
        this.scene.start("Page10Scene");
    }

}