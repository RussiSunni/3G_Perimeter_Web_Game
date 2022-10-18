class Page7Scene extends Phaser.Scene {
    constructor() {
        super('Page7Scene');
    }
    preload() {
        //load our images or sounds 
        this.load.image("background", "images/background.jpg");
        this.load.image("logo", "images/logo.png");
        this.load.image("fish01", "images/fish01.png");
    }

    create() {
        // Background.
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);

        // Images.
        this.logo = this.add.image(120, 80, "logo");
        this.logo.scaleX = 0.15;
        this.logo.scaleY = 0.15;

        // Sprites
        this.fish01 = this.add.image(220, 400, "fish01");
        this.fish01.scaleX = 0.3;
        this.fish01.scaleY = 0.3;
        this.fish01.flipX = true;

        // Rounded Rectangle.
        this.roundedRect1 = this.add.graphics();
        this.roundedRect1.fillStyle(0x4472c4, 1);
        this.roundedRect1.fillRoundedRect(610, 360, 600, 80, 16);

        this.roundedRect2 = this.add.graphics();
        this.roundedRect2.fillStyle(0x70ad47, 1);
        this.roundedRect2.fillRoundedRect(610, 480, 600, 80, 16);
        // this.roundedRect1.setInteractive(new Phaser.Geom.Rectangle(710, 480, 400, 80), Phaser.Geom.Rectangle.Contains);
        // this.roundedRect1.on("pointerdown", this.onButtonDown, this);

        // Graphics
        this.circle1 = this.add.graphics();
        this.circle1.lineStyle(12, 0xffffff);
        this.circle1.fillStyle(0xf414b4);
        this.circle1.strokeCircle(550, 400, 40);
        this.circle1.fillCircle(550, 400, 40);

        this.circle2 = this.add.graphics();
        this.circle2.lineStyle(12, 0xffffff);
        this.circle2.fillStyle(0xf414b4);
        this.circle2.strokeCircle(550, 520, 40);
        this.circle2.fillCircle(550, 520, 40);

        // Text.
        this.text1 = this.add.text(game.config.width / 2 + 200, game.config.height / 2 - 100, "PERIMETER", { fontFamily: "Arial", fontSize: "100px" });
        this.text1.setOrigin(0.5, 0.5);

        this.objectiveText2 = this.add.text(620, 382, "Finding Perimeter", { fontFamily: "Arial", fontSize: "32px" });
        this.objectiveText3 = this.add.text(620, 502, "Determine Unknown Side Lengths", { fontFamily: "Arial", fontSize: "32px" });

    }

}