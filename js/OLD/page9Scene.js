class Page9Scene extends Phaser.Scene {
    constructor() {
        super('Page9Scene');
        this.isCorrectAnswer = false;
    }
    preload() {
        //load our images or sounds 
        this.load.image("background", "images/background.jpg");
        this.load.image("logo", "images/logo.png");
        this.load.image("fish02", "images/fish02.png");
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

        this.fish02 = this.add.image(1100, 350, "fish02");
        this.fish02.flipX = true;
        this.fish02.scaleX = 1.7;
        this.fish02.scaleY = 1.7;

        // Text.
        this.text1 = this.add.text(10, 40, "Determine Unknown Side Lengths", { fontFamily: "Arial", fontSize: "60px" });
        this.text2 = this.add.text(320, game.config.height - 170, "Step 1: Add all the known side lengths together.", { fontFamily: "Arial", fontSize: "40px", fontStyle: "bold" });
        this.text3 = this.add.text(320, game.config.height - 100, "Step 2: Subtract the sum of all side lengths from\n the perimeter to find your answer.", { fontFamily: "Arial", fontSize: "40px", fontStyle: "bold" });

        // Answer pad.
        var answerPadBG = this.add.rectangle(0, 0, 250, 150, 0xacb6de);
        answerPadBG.setStrokeStyle(1, 0x00000);
        var answerPadText = this.add.text(20, -70, " 36\n-22", { fontFamily: "Arial", fontSize: "48px", color: "0x000000" });
        var answerPadLine = this.add.graphics();
        answerPadLine.lineStyle(5, 0x000000, 1);
        answerPadLine.lineBetween(-100, 40, 100, 40);
        var answerPadContainer = this.add.container(200, 300, [answerPadBG, answerPadText, answerPadLine]);

        // Trapezoid.  
        var data = [0, 0, 300, 0, 350, 200, -50, 200];
        var trapezoid = this.add.polygon(750, 350, data, 0xf414b4, 1);
        trapezoid.setStrokeStyle(5, 0x000000);

        this.text3 = this.add.text(560, 350, "Perimeter = 36in", { fontFamily: "Arial", fontSize: "36px", fontStyle: "bold" });
        this.text4 = this.add.text(660, 210, "10in", { fontFamily: "Arial", fontSize: "36px", fontStyle: "bold" });
        this.text5 = this.add.text(460, 330, "6in", { fontFamily: "Arial", fontSize: "36px", fontStyle: "bold" });
        this.text6 = this.add.text(883, 330, "6in", { fontFamily: "Arial", fontSize: "36px", fontStyle: "bold" });
        this.text7 = this.add.text(680, 450, "?", { fontFamily: "Arial", fontSize: "36px", fontStyle: "bold" });

        var answer4Circle = this.add.circle(0, 0, 60, 0x00b0f0);
        answer4Circle.setStrokeStyle(5, 0xffffff);
        var answer4Text = this.add.text(-30, -25, "14", { fontFamily: "Arial", fontSize: "48px" });
        var answer4Container = this.add.container(700, 480, [answer4Circle, answer4Text]);
        answer4Container.setInteractive(new Phaser.Geom.Circle(0, 0, 70), Phaser.Geom.Circle.Contains);
        answer4Container.alpha = 0;


        var answer1Circle = this.add.circle(0, 0, 60, 0x548135);
        answer1Circle.setStrokeStyle(5, 0xffffff);
        var answer1Text = this.add.text(-30, -25, "12", { fontFamily: "Arial", fontSize: "48px" });
        var answer1Container = this.add.container(100, 450, [answer1Circle, answer1Text]);
        answer1Container.setInteractive(new Phaser.Geom.Circle(0, 0, 70), Phaser.Geom.Circle.Contains);
        answer1Container.on('pointerover', function () {
            answer1Container.scale = 1.05;
        });
        answer1Container.on('pointerout', function () {
            answer1Container.scale = 1;
        });
        answer1Container.on('pointerdown', function () {

        }, this);


        var answer2Circle = this.add.circle(0, 0, 60, 0xf414b4);
        answer2Circle.setStrokeStyle(5, 0xffffff);
        var answer2Text = this.add.text(-30, -25, "11", { fontFamily: "Arial", fontSize: "48px" });
        var answer2Container = this.add.container(240, 450, [answer2Circle, answer2Text]);
        answer2Container.setInteractive(new Phaser.Geom.Circle(0, 0, 70), Phaser.Geom.Circle.Contains);
        answer2Container.on('pointerover', function () {
            answer2Container.scale = 1.05;
        });
        answer2Container.on('pointerout', function () {
            answer2Container.scale = 1;
        });

        var answer3Circle = this.add.circle(0, 0, 60, 0x00b0f0);
        answer3Circle.setStrokeStyle(5, 0xffffff);
        var answer3Text = this.add.text(-30, -25, "14", { fontFamily: "Arial", fontSize: "48px" });
        var answer3Container = this.add.container(380, 450, [answer3Circle, answer3Text]);
        answer3Container.setInteractive(new Phaser.Geom.Circle(0, 0, 70), Phaser.Geom.Circle.Contains);
        answer3Container.on('pointerover', function () {
            answer3Container.scale = 1.05;
        });
        answer3Container.on('pointerout', function () {
            answer3Container.scale = 1;
        });
        answer3Container.on('pointerdown', function () {
            timeline.play();
            this.isCorrectAnswer = true;
        }, this);


        // Animation     
        var timeline = this.tweens.createTimeline();

        timeline.add({
            targets: answer4Container,
            alpha: 1,
            ease: 'Power1',
            duration: 1000
        });

    }

    onButtonDown() {
        if (this.isCorrectAnswer) {
            this.scene.start("Page10Scene");
        }
    }

}