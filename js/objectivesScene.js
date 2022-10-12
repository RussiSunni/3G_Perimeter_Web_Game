class ObjectivesScene extends Phaser.Scene {
    constructor() {
        super('ObjectivesScene');
    }
    preload() {
        //load our images or sounds 
        this.load.image("background", "images/background.jpg");
        this.load.image("logo", "images/logo.png");
        this.load.image("shark01", "images/shark01.png");
    }

    create() {
        //define our objects  
        // Background.
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);
        this.background.setInteractive();
        this.background.on("pointerdown", this.onButtonDown, this);

        // Text.
        this.text1 = this.add.text(game.config.width / 2 + 200, game.config.height / 2 - 100, "PERIMETER", { fontFamily: "Arial", fontSize: "100px" });
        this.text1.setOrigin(0.5, 0.5);

        this.text2 = this.add.text(game.config.width / 2 + 200, game.config.height / 2,
            "Definition: \nThe measure of the length around the \nedge or boundary of an object or shape.",
            { fontFamily: "Arial", fontSize: "28px" });
        this.text2.setOrigin(0.5, 0.5);

        // Images.
        this.logo = this.add.image(120, 130, "logo");
        this.logo.scaleX = 0.15;
        this.logo.scaleY = 0.15;

        this.shark01 = this.add.image(250, 450, "shark01");
        this.shark01.scaleX = 0.3;
        this.shark01.scaleY = 0.3;

        // Graphics
        this.graphics = this.add.graphics();
        this.graphics.lineStyle(12, 0xffffff);
        this.graphics.fillStyle(0xffc000);
        this.graphics.strokeRect(650, 500, 400, 150);
        this.graphics.fillRect(650, 500, 400, 150);
    }

    onButtonDown() {
        this.scene.start("Objective1Scene");
    }

}