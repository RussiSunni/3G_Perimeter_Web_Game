class Page9Scene extends Phaser.Scene {
    constructor() {
        super('Page9Scene');
    }
    preload() {
        //load our images or sounds 
        this.load.image("background", "images/background.jpg");
        this.load.image("logo", "images/logo.png");
        this.load.image("fish02", "images/fish02.png");
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
        this.text1 = this.add.text(10, 40, "Determine Unknown Side Lengths", { fontFamily: "Arial", fontSize: "60px" });

        var circle1 = this.add.circle(700, 600, 70, 0xed7d31);
        this.text2 = this.add.text(670, 575, "5in", { fontFamily: "Arial", fontSize: "48px" });
        var circle2 = this.add.circle(850, 600, 70, 0xed7d31);
        this.text3 = this.add.text(820, 575, "7in", { fontFamily: "Arial", fontSize: "48px" });
        var circle3 = this.add.circle(1000, 600, 70, 0xed7d31);
        this.text4 = this.add.text(970, 575, "9in", { fontFamily: "Arial", fontSize: "48px" });
        var circle4 = this.add.circle(1150, 600, 70, 0xed7d31);
        this.text5 = this.add.text(1120, 575, "6in", { fontFamily: "Arial", fontSize: "48px" });


        var rect = this.add.rectangle(300, 250, 500, 200, 0x4472c4);
        var triangle = this.add.triangle(175, 450, 0, 0, 250, 0, 125, 200, 0x4472c4);

        this.text3 = this.add.text(150, 220, "Perimeter = 44in", { fontFamily: "Arial", fontSize: "36px", fontStyle: "bold" });
        this.text4 = this.add.text(250, 110, "13in", { fontFamily: "Arial", fontSize: "36px", fontStyle: "bold" });
        this.text5 = this.add.text(560, 230, "6in", { fontFamily: "Arial", fontSize: "36px", fontStyle: "bold" });
        this.text6 = this.add.text(0, 230, "6in", { fontFamily: "Arial", fontSize: "36px", fontStyle: "bold" });
        this.text7 = this.add.text(55, 430, "7in", { fontFamily: "Arial", fontSize: "36px", fontStyle: "bold" });
        this.text8 = this.add.text(250, 430, "7in", { fontFamily: "Arial", fontSize: "36px", fontStyle: "bold" });
        this.text9 = this.add.text(420, 350, "?", { fontFamily: "Arial", fontSize: "36px", fontStyle: "bold" });

        this.fish02 = this.add.image(900, 350, "fish02");
        this.fish02.flipX = true;
        this.fish02.scaleX = 4;
        this.fish02.scaleY = 4;

    }

    onButtonDown() {
        this.scene.start("Page10Scene");
    }

}