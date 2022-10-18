class Page2Scene extends Phaser.Scene {
    constructor() {
        super('Page2Scene');
    }
    preload() {
        //load our images or sounds 
        this.load.image("background", "images/background.jpg");
        this.load.image("logo", "images/logo.png");
        this.load.image("shark01", "images/shark01.png");

        this.load.audio("shark01", ["audio/page2/shark01.mp3"])
        this.load.audio("shark02", ["audio/page2/shark02.mp3"])
    }

    create() {
        //define our objects  
        // Background.
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);
        this.background.setInteractive();
        this.background.on("pointerdown", this.onButtonDown, this);

        // Text.
        this.text1 = this.add.text(game.config.width / 2 + 200, game.config.height / 2 - 150, "PERIMETER", { fontFamily: "Arial", fontSize: "120px" });
        this.text1.setOrigin(0.5, 0.5);

        var descriptionTextBackground = this.add.rectangle(game.config.width / 2 + 200, game.config.height / 2 - 6, 600, 135, 0xb3c6e7);

        this.text2 = this.add.text(game.config.width / 2 + 200, game.config.height / 2 - 10,
            "Definition: \nThe measure of the length around the \nedge or boundary of an object or shape.",
            { fontFamily: "Arial", fontSize: "32px", color: '#000000', align: 'center' });
        this.text2.setOrigin(0.5, 0.5);

        // Images.
        this.logo = this.add.image(120, 80, "logo");
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


        // Audio
        this.sharkSound01 = this.sound.add("shark01");
        this.sharkSound01.on("complete", this.playSecondSound, this);
        this.sharkSound01.play();



    }

    onButtonDown() {
        this.scene.start("Page3Scene");
    }

    playSecondSound() {
        this.sharkSound02 = this.sound.add("shark02");
        this.sharkSound02.play();
    }

}