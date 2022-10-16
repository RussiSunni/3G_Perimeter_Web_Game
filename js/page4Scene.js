class Page4Scene extends Phaser.Scene {
    constructor() {
        super('Page4Scene');
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

        // Images.
        this.logo = this.add.image(1150, 80, "logo");
        this.logo.scaleX = 0.15;
        this.logo.scaleY = 0.15;

        // Text.
        this.text1 = this.add.text(10, 40, "Finding Perimeter", { fontFamily: "Arial", fontSize: "60px" });

        // Sprites
        this.shark02 = this.add.image(-45, 200, "shark02");
        this.shark02.scaleX = 1;
        this.shark02.scaleY = 1;

        // Animation
        this.tweens.add({ targets: this.shark02, duration: 1000, x: game.config.width / 4 });

        // Graphics
        this.rect = this.add.graphics();
        this.rect.lineStyle(12, 0xffffff);
        //this.rect.fillStyle(0xb0500f);
        this.rect.fillGradientStyle(0xb0500f, 0xffffff, 1);
        this.rect.strokeRect(game.config.width / 2 - 50, game.config.height / 2 - 150, 250, 400);
        this.rect.fillRect(game.config.width / 2 - 50, game.config.height / 2 - 150, 250, 400);

        // Rounded Rectangle.
        this.roundedRect1 = this.add.graphics();
        this.roundedRect1.fillStyle(0x70ad47, 1);
        this.roundedRect1.fillRoundedRect(300, game.config.height / 2 - 50, 800, 80, 16);
        this.roundedRect1.setInteractive(new Phaser.Geom.Rectangle(300, game.config.height / 2 - 50, 800, 80), Phaser.Geom.Rectangle.Contains);
        this.roundedRect1.on("pointerdown", this.correctAnswer, this);

        this.roundedRect2 = this.add.graphics();
        this.roundedRect2.fillStyle(0x70ad47, 1);
        this.roundedRect2.fillRoundedRect(300, game.config.height / 2 + 150 - 50, 800, 80, 16);
        this.roundedRect1.setInteractive(new Phaser.Geom.Rectangle(300, game.config.height / 2 + 150 - 50, 800, 80), Phaser.Geom.Rectangle.Contains);
        this.roundedRect1.on("pointerdown", this.incorrectAnswer, this);

        // Text.
        this.text2 = this.add.text(400, game.config.height - 50, "Click the correct answer.", { fontFamily: "Arial", fontSize: "40px" });
        this.text3 = this.add.text(310, game.config.height / 2 - 35, "Since this is a rectangle, we know that the parallel side lengths are equal \nin length. The bottom side length is 9 ft and the right side length is 12 ft.", { fontFamily: "Arial", fontSize: "22px" });
        this.text4 = this.add.text(310, game.config.height / 2 + 120, "If we add 9 + 12, we know that the bottom side length is 21 ft and the right \nside length is also 21 ft.", { fontFamily: "Arial", fontSize: "22px" });
    }

    correctAnswer() {
        this.scene.start("Page5Scene");
    }

    incorrectAnswer() {
        console.log("incorrect");
    }

}