class Page4Scene extends Phaser.Scene {
    constructor() {
        super('Page4Scene');
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

        // Images.
        this.logo = this.add.image(1150, 80, "logo");
        this.logo.scaleX = 0.15;
        this.logo.scaleY = 0.15;

        // Text.
        this.text1 = this.add.text(10, 40, "Finding Perimeter", { fontFamily: "Arial", fontSize: "60px" });

        // Graphics
        this.rect = this.add.graphics();
        this.rect.lineStyle(12, 0xffffff);
        this.rect.fillStyle(0xffc000);
        this.rect.strokeRect(game.config.width / 2 - 50, game.config.height / 2 - 100, 200, 400);
        this.rect.fillRect(game.config.width / 2 - 50, game.config.height / 2 - 100, 200, 400);


        // Rounded Rectangle.
        this.roundedRect1 = this.add.graphics();
        this.roundedRect1.fillStyle(0x70ad47, 1);
        this.roundedRect1.fillRoundedRect(300, game.config.height / 2, 800, 80, 16);

        this.roundedRect2 = this.add.graphics();
        this.roundedRect2.fillStyle(0x70ad47, 1);
        this.roundedRect2.fillRoundedRect(300, game.config.height / 2 + 200 - 50, 800, 80, 16);

        // Text.
        this.text2 = this.add.text(10, game.config.height - 50, "Click the correct answer.", { fontFamily: "Arial", fontSize: "40px" });

    }

    onButtonDown() {

    }

}