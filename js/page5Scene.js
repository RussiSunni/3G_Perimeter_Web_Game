class Page5Scene extends Phaser.Scene {
    constructor() {
        super('Page5Scene');
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
        this.background.setInteractive();
        this.background.on("pointerdown", this.onButtonDown, this);

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


        // Text.        
        this.text1 = this.add.text(game.config.width / 2 + 25, game.config.height / 2 + 30, "Rectangle", { fontFamily: "Arial", fontSize: "36px", color: '#000000' });
        this.text5 = this.add.text(game.config.width / 2 + 75, game.config.height / 2 - 200, "9 ft", { fontFamily: "Arial", fontSize: "36px", color: '#000000', fontStyle: "bold" });
        this.text6 = this.add.text(game.config.width / 2 - 140, game.config.height / 2 + 30, "12 ft", { fontFamily: "Arial", fontSize: "36px", color: '#000000', fontStyle: "bold" });

        // Answer pad.
        var answerBG = this.add.rectangle(300, 300, 250, 440, 0xacb6de);
        answerBG.setStrokeStyle(1, 0x00000);
        var text8 = this.add.text(260, 100, "    9\n    9\n  12\n+12", { fontFamily: "Arial", fontSize: "48px", color: "0x000000" });
        var answerBox = this.add.rectangle(300, 400, 200, 100, 0xffffff);
        answerBox.setStrokeStyle(3, 0x00000);
        var line = this.add.graphics();
        line.lineStyle(5, 0x000000, 1);
        line.lineBetween(200, 320, 400, 320);


        var container = this.add.container(800, 70);
        container.add(answerBG);
        container.add(text8);
        container.add(answerBox);
        container.add(line);
    }

    onButtonDown() {
        this.scene.start("Page6Scene");
    }


}