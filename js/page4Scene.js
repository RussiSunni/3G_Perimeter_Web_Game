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
        this.circle1.strokeCircle(130, game.config.height / 2 - 25, 40);
        this.circle1.fillCircle(130, game.config.height / 2 - 25, 40);

        this.circle2 = this.add.graphics();
        this.circle2.lineStyle(12, 0xffffff);
        this.circle2.fillStyle(0xf414b4);
        this.circle2.strokeCircle(130, game.config.height / 2 + 125, 40);
        this.circle2.fillCircle(130, game.config.height / 2 + 125, 40);

        // Text.
        this.number1 = this.add.text(130, game.config.height / 2 - 25, "1", { fontFamily: "Arial", fontSize: "48px", fontStyle: "bold" });
        this.number1.setOrigin(0.5, 0.5);
        this.number2 = this.add.text(130, game.config.height / 2 + 125, "2", { fontFamily: "Arial", fontSize: "48px", fontStyle: "bold" });
        this.number2.setOrigin(0.5, 0.5);

        // Answers
        // 1
        var roundedRect1 = this.add.graphics();
        roundedRect1.fillStyle(0x70ad47, 1);
        roundedRect1.fillRoundedRect(0, 0, 1000, 100, 16);
        var text3 = this.add.text(20, 15, "Since this is a rectangle, we know that the parallel side lengths are equal \nin length. The bottom side length is 9 ft and the right side length is 12 ft.", { fontFamily: "Arial", fontSize: "30px" });
        var container1 = this.add.container(190, game.config.height / 2 - 75, [roundedRect1, text3]);
        container1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 1000, 100), Phaser.Geom.Rectangle.Contains);
        container1.on('pointerover', function () {
            container1.scaleY = 1.05;
            container1.y = game.config.height / 2 - 77.5;
        });
        container1.on('pointerout', function () {
            container1.scale = 1;
            container1.y = game.config.height / 2 - 75;
        });
        container1.on('pointerdown', function () {
            this.scene.start("Page5Scene");
        }, this);

        // 2
        var roundedRect2 = this.add.graphics();
        roundedRect2.fillStyle(0x70ad47, 1);
        roundedRect2.fillRoundedRect(0, 0, 1000, 100, 16);
        var text4 = this.add.text(20, 15, "If we add 9 + 12, we know that the bottom side length is 21 ft and the right \nside length is also 21 ft.", { fontFamily: "Arial", fontSize: "30px" });
        var container2 = this.add.container(190, game.config.height / 2 + 75, [roundedRect2, text4]);
        container2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 1000, 100), Phaser.Geom.Rectangle.Contains);
        container2.on('pointerover', function () {
            container2.scaleY = 1.05;
            container2.y = game.config.height / 2 + 72.5;
        });
        container2.on('pointerout', function () {
            container2.scale = 1;
            container2.y = game.config.height / 2 + 75;
        });
        container2.on('pointerdown', function () {
            console.log("incorrect");
        }, this);

        // Text.

        var text2 = this.add.text(400, game.config.height - 50, "Click the correct answer.", { fontFamily: "Arial", fontSize: "40px", fontStyle: "bold" });

        this.text5 = this.add.text(game.config.width / 2 + 75, game.config.height / 2 - 200, "9 ft", { fontFamily: "Arial", fontSize: "36px", color: '#000000', fontStyle: "bold" });
        this.text6 = this.add.text(game.config.width / 2 - 140, game.config.height / 2 + 30, "12 ft", { fontFamily: "Arial", fontSize: "36px", color: '#000000', fontStyle: "bold" });
        this.text7 = this.add.text(game.config.width / 2 + 25, game.config.height / 2 + 30, "Rectangle", { fontFamily: "Arial", fontSize: "36px", color: '#000000' });
        //this.text6 = this.add.text(game.config.width / 2 - 140, game.config.height / 2 + 30, "12 ft", { fontFamily: "Arial", fontSize: "36px", color: '#000000', fontStyle: "bold" });
        //this.text7 = this.add.text(game.config.width / 2 + 25, game.config.height / 2 + 30, "Rectangle", { fontFamily: "Arial", fontSize: "36px", color: '#000000' });

    }


}