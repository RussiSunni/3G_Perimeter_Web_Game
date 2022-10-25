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

        var answer1Circle = this.add.circle(0, 0, 70, 0xed7d31);
        var answer1Text = this.add.text(-30, -25, "5in", { fontFamily: "Arial", fontSize: "48px" });
        var answer1Container = this.add.container(700, 600, [answer1Circle, answer1Text]);
        answer1Container.setInteractive(new Phaser.Geom.Circle(0, 0, 70), Phaser.Geom.Circle.Contains);
        answer1Container.on('pointerover', function () {
            answer1Container.scale = 1.05;
        });
        answer1Container.on('pointerout', function () {
            answer1Container.scale = 1;
        });
        answer1Container.on('pointerdown', function () {
            this.scene.start("Page10Scene");
        }, this);


        var answer2Circle = this.add.circle(0, 0, 70, 0xed7d31);
        var answer2Text = this.add.text(-30, -25, "7in", { fontFamily: "Arial", fontSize: "48px" });
        var answer2Container = this.add.container(850, 600, [answer2Circle, answer2Text]);
        answer2Container.setInteractive(new Phaser.Geom.Circle(0, 0, 70), Phaser.Geom.Circle.Contains);
        answer2Container.on('pointerover', function () {
            answer2Container.scale = 1.05;
        });
        answer2Container.on('pointerout', function () {
            answer2Container.scale = 1;
        });

        var answer3Circle = this.add.circle(0, 0, 70, 0xed7d31);
        var answer3Text = this.add.text(-30, -25, "9in", { fontFamily: "Arial", fontSize: "48px" });
        var answer3Container = this.add.container(1000, 600, [answer3Circle, answer3Text]);
        answer3Container.setInteractive(new Phaser.Geom.Circle(0, 0, 70), Phaser.Geom.Circle.Contains);
        answer3Container.on('pointerover', function () {
            answer3Container.scale = 1.05;
        });
        answer3Container.on('pointerout', function () {
            answer3Container.scale = 1;
        });

        var answer4Circle = this.add.circle(0, 0, 70, 0xed7d31);
        var answer4Text = this.add.text(-30, -25, "6in", { fontFamily: "Arial", fontSize: "48px" });
        var answer4Container = this.add.container(1150, 600, [answer4Circle, answer4Text]);
        answer4Container.setInteractive(new Phaser.Geom.Circle(0, 0, 70), Phaser.Geom.Circle.Contains);
        answer4Container.on('pointerover', function () {
            answer4Container.scale = 1.05;
        });
        answer4Container.on('pointerout', function () {
            answer4Container.scale = 1;
        });

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