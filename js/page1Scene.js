class Page1Scene extends Phaser.Scene {
    constructor() {
        super('Page1Scene');
    }
    preload() {
        //load our images or sounds 
        this.load.image("background", "images/background.jpg");
        this.load.image("logo", "images/logo.png");
        this.load.image("button", "images/button.png");
        this.load.image("shark01", "images/shark01.png");
        this.load.image("fish01", "images/fish01.png");
    }
    create() {
        //define our objects  
        // Background.
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);

        // The text.
        this.text1 = this.add.text(game.config.width / 2, game.config.height / 2 - 200, "Interactive Lessons", { fontFamily: "Arial", color: "#ffd966", fontSize: "50px" });
        this.text1.setOrigin(0.5, 0.5);

        this.text2 = this.add.text(game.config.width / 2, game.config.height / 2 - 100, "PERIMETER", { fontFamily: "Arial", fontSize: "100px" });
        this.text2.setOrigin(0.5, 0.5);

        // Images.
        this.logo = this.add.image(1150, 80, "logo");
        this.logo.scaleX = 0.15;
        this.logo.scaleY = 0.15;

        this.button = this.add.image(game.config.width / 2, game.config.height / 2 + 100, "button");
        this.button.setInteractive();
        this.button.on("pointerdown", this.onButtonDown, this);

        this.shark01 = this.add.image(150, 500, "shark01");
        this.shark01.scaleX = 0.3;
        this.shark01.scaleY = 0.3;

        this.fish01 = this.add.image(1050, 500, "fish01");
        this.fish01.scaleX = 0.2;
        this.fish01.scaleY = 0.2;

    }

    onButtonDown() {
        this.button.alpha = 0.5;
        this.scene.start("Page2Scene");
    }
}