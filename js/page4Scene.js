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
        this.rect.fillStyle(0xb0500f);
        //  this.rect.fillGradientStyle(0xb0500f, 0xffffff, 1);
        this.rect.strokeRect(game.config.width / 2 - 50, game.config.height / 2 - 150, 300, 400);
        this.rect.fillRect(game.config.width / 2 - 50, game.config.height / 2 - 150, 300, 400);

        // Circles.
        this.circle1 = this.add.graphics();
        this.circle1.lineStyle(12, 0xffffff);
        this.circle1.fillStyle(0xf414b4);
        this.circle1.strokeCircle(130, game.config.height / 2 - 50, 40);
        this.circle1.fillCircle(130, game.config.height / 2 - 50, 40);

        this.circle2 = this.add.graphics();
        this.circle2.lineStyle(12, 0xffffff);
        this.circle2.fillStyle(0xf414b4);
        this.circle2.strokeCircle(130, game.config.height / 2 + 100, 40);
        this.circle2.fillCircle(130, game.config.height / 2 + 100, 40);

        // Text.
        this.number1 = this.add.text(130, game.config.height / 2 - 50, "1", { fontFamily: "Arial", fontSize: "48px", fontStyle: "bold" });
        this.number1.setOrigin(0.5, 0.5);
        this.number2 = this.add.text(130, game.config.height / 2 + 100, "2", { fontFamily: "Arial", fontSize: "48px", fontStyle: "bold" });
        this.number2.setOrigin(0.5, 0.5);

        // Rounded Rectangles.
        this.roundedRect1 = this.add.graphics();
        this.roundedRect1.fillStyle(0x70ad47, 1);
        this.roundedRect1.fillRoundedRect(190, game.config.height / 2 - 100, 1000, 100, 16);
        this.roundedRect1.setInteractive(new Phaser.Geom.Rectangle(190, game.config.height / 2 - 100, 1000, 100), Phaser.Geom.Rectangle.Contains);
        this.roundedRect1.on("pointerdown", this.correctAnswer, this);

        this.roundedRect2 = this.add.graphics();
        this.roundedRect2.fillStyle(0x70ad47, 1);
        this.roundedRect2.fillRoundedRect(190, game.config.height / 2 + 50, 1000, 100, 16);
        this.roundedRect1.setInteractive(new Phaser.Geom.Rectangle(190, game.config.height / 2 + 50, 1000, 100), Phaser.Geom.Rectangle.Contains);
        this.roundedRect1.on("pointerdown", this.incorrectAnswer, this);

        // Text.
        this.text2 = this.add.text(400, game.config.height - 50, "Click the correct answer.", { fontFamily: "Arial", fontSize: "40px", fontStyle: "bold" });
        this.text3 = this.add.text(210, game.config.height / 2 - 85, "Since this is a rectangle, we know that the parallel side lengths are equal \nin length. The bottom side length is 9 ft and the right side length is 12 ft.", { fontFamily: "Arial", fontSize: "30px" });
        this.text4 = this.add.text(210, game.config.height / 2 + 65, "If we add 9 + 12, we know that the bottom side length is 21 ft and the right \nside length is also 21 ft.", { fontFamily: "Arial", fontSize: "30px" });
        this.text5 = this.add.text(game.config.width / 2 + 75, game.config.height / 2 - 200, "9 ft", { fontFamily: "Arial", fontSize: "36px", color: '#000000', fontStyle: "bold" });
        this.text6 = this.add.text(game.config.width / 2 - 140, game.config.height / 2 + 5, "12 ft", { fontFamily: "Arial", fontSize: "36px", color: '#000000', fontStyle: "bold" });
        this.text7 = this.add.text(game.config.width / 2 + 25, game.config.height / 2 + 5, "Rectangle", { fontFamily: "Arial", fontSize: "36px", color: '#000000' });
        //this.text6 = this.add.text(game.config.width / 2 - 140, game.config.height / 2 + 30, "12 ft", { fontFamily: "Arial", fontSize: "36px", color: '#000000', fontStyle: "bold" });
        //this.text7 = this.add.text(game.config.width / 2 + 25, game.config.height / 2 + 30, "Rectangle", { fontFamily: "Arial", fontSize: "36px", color: '#000000' });

    }

    correctAnswer() {
        this.scene.start("Page5Scene");
    }

    incorrectAnswer() {
        console.log("incorrect");
    }

}