class Page10Scene extends Phaser.Scene {
    constructor() {
        super('Page10Scene');
        this.audio1Sound;
    }
    preload() {
        //load our images or sounds 
        this.load.image("background", "images/background.jpg");
        this.load.image("logo", "images/logo.png");
        this.load.image("fish02", "images/fish02.png");
        this.load.image("shark02", "images/shark02.png");
        this.load.image("cross", "images/cross.png");

        this.load.audio("audio1", ["audio/page10/1-SubBlock_Oh-dear-Nitro-the-shark-is-ch.mp3"]);
        this.load.audio("applause", ["audio/applause.wav"]);
        this.load.audio("correctAudio", ["audio/page10/3-SubBlock_5-is-correct-Excellent-work.mp3"]);

        this.load.audio("buzzer", "audio/buzzer.mp3");
        this.load.audio("incorrectAudio", ["audio/page10/4-SubBlock_Oh-dear-no-That-is-incorrect.mp3"]);
    }

    create() {
        // Background.
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);
        this.background.setInteractive();
        this.background.on("pointerdown", this.onButtonDown, this);

        this.audio1Sound = this.sound.add("audio1");
        this.audio1Sound.on("complete", this.playSharkAnimation, this);
        this.applauseSound = this.sound.add("applause");
        this.applauseSound.on("complete", this.playSecondCorrectSound, this);
        this.correctSound = this.sound.add("correctAudio");
        this.correctSound.on("complete", this.playFishAnimation, this);
        this.buzzerSound = this.sound.add("buzzer");
        this.buzzerSound.on("complete", this.playSecondIncorrectSound, this);
        this.incorrectSound = this.sound.add("incorrectAudio");

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
            // this.scene.start("Page11Scene");
            this.applauseSound.play();
        }, this);


        var answer2Circle = this.add.circle(0, 0, 70, 0xed7d31);
        var answer2Text = this.add.text(-30, -25, "7in", { fontFamily: "Arial", fontSize: "48px" });
        var answer2Cross = this.add.image(0, 0, "cross");
        answer2Cross.scale = 2;
        answer2Cross.alpha = 0;
        var answer2Container = this.add.container(850, 600, [answer2Circle, answer2Text, answer2Cross]);

        answer2Container.setInteractive(new Phaser.Geom.Circle(0, 0, 70), Phaser.Geom.Circle.Contains);
        answer2Container.on('pointerover', function () {
            answer2Container.scale = 1.05;
        });
        answer2Container.on('pointerout', function () {
            answer2Container.scale = 1;
        });
        answer2Container.on('pointerdown', function () {
            answer2Cross.alpha = 1;
            this.buzzerSound.play();
        }, this);

        var answer3Circle = this.add.circle(0, 0, 70, 0xed7d31);
        var answer3Text = this.add.text(-30, -25, "9in", { fontFamily: "Arial", fontSize: "48px" });
        var answer3Cross = this.add.image(0, 0, "cross");
        answer3Cross.scale = 2;
        answer3Cross.alpha = 0;
        var answer3Container = this.add.container(1000, 600, [answer3Circle, answer3Text, answer3Cross]);
        answer3Container.setInteractive(new Phaser.Geom.Circle(0, 0, 70), Phaser.Geom.Circle.Contains);
        answer3Container.on('pointerover', function () {
            answer3Container.scale = 1.05;
        });
        answer3Container.on('pointerout', function () {
            answer3Container.scale = 1;
        });
        answer3Container.on('pointerdown', function () {
            answer3Cross.alpha = 1;
            this.buzzerSound.play();
        }, this);

        var answer4Circle = this.add.circle(0, 0, 70, 0xed7d31);
        var answer4Text = this.add.text(-30, -25, "6in", { fontFamily: "Arial", fontSize: "48px" });
        var answer4Cross = this.add.image(0, 0, "cross");
        answer4Cross.scale = 2;
        answer4Cross.alpha = 0;
        var answer4Container = this.add.container(1150, 600, [answer4Circle, answer4Text, answer4Cross]);
        answer4Container.setInteractive(new Phaser.Geom.Circle(0, 0, 70), Phaser.Geom.Circle.Contains);
        answer4Container.on('pointerover', function () {
            answer4Container.scale = 1.05;
        });
        answer4Container.on('pointerout', function () {
            answer4Container.scale = 1;
        });
        answer4Container.on('pointerdown', function () {
            answer4Cross.alpha = 1;
            this.buzzerSound.play();
        }, this);



        var triangle = this.add.triangle(-123, 195, 0, 0, 250, 0, 125, 200, 0x4472c4);
        triangle.setStrokeStyle(6, 0xffffff);
        var rect = this.add.rectangle(0, 0, 500, 200, 0x4472c4);
        // rect.setStrokeStyle(6, 0xffffff);
        var line1 = this.add.line(2, -100, 0, 0, 500, 0, 0xffffff);
        line1.setLineWidth(3);
        var line2 = this.add.line(-244, 0, 0, 0, 0, 200, 0xffffff);
        line2.setLineWidth(3);
        var line3 = this.add.line(250, 0, 0, 0, 0, 200, 0xffffff);
        line3.setLineWidth(3);


        this.text3 = this.add.text(-150, -30, "Perimeter = 44in", { fontFamily: "Arial", fontSize: "36px", fontStyle: "bold" });
        this.text4 = this.add.text(-50, -140, "13in", { fontFamily: "Arial", fontSize: "36px", fontStyle: "bold" });
        this.text5 = this.add.text(260, -20, "6in", { fontFamily: "Arial", fontSize: "36px", fontStyle: "bold" });
        this.text6 = this.add.text(-310, -20, "6in", { fontFamily: "Arial", fontSize: "36px", fontStyle: "bold" });
        this.text7 = this.add.text(-245, 180, "7in", { fontFamily: "Arial", fontSize: "36px", fontStyle: "bold" });
        this.text8 = this.add.text(-50, 180, "7in", { fontFamily: "Arial", fontSize: "36px", fontStyle: "bold" });
        this.text9 = this.add.text(120, 100, "?", { fontFamily: "Arial", fontSize: "36px", fontStyle: "bold" });

        var shapeContainer = this.add.container(310, 250, [triangle, rect, line1, line2, line3, this.text3, this.text4, this.text5, this.text6, this.text7, this.text8, this.text9]);

        this.fish02 = this.add.image(900, 350, "fish02");
        this.fish02.flipX = true;
        this.fish02.scaleX = 1;
        this.fish02.scaleY = 1;

        // Animation
        var timeline1 = this.tweens.createTimeline();

        timeline1.add({
            targets: [this.fish02],
            scale: 4,
            ease: 'Power1',
            duration: 2000
        });

        timeline1.play();

        var timer = this.time.delayedCall(2000, this.audio1Play, null, this);
        //var timedEvent = this.time.delayedCall(2000, this.audio1Play, this);

        var shark02 = this.add.image(1700, 150, "shark02");
        shark02.flipX = true;
        shark02.scaleX = 2;
        shark02.scaleY = 2;

        // Animation
        this.timeline2 = this.tweens.createTimeline();

        this.timeline2.add({
            targets: [shark02],
            x: 1300,
            ease: 'Power1',
            duration: 2000
        });


        // Animation
        this.timeline3 = this.tweens.createTimeline();

        this.timeline3.add({
            targets: [this.fish02],
            scale: 1.5,
            ease: 'Power1',
            duration: 1000
        });

        this.timeline3.add({
            targets: [this.fish02],
            y: 450,
            ease: 'Power1',
            duration: 1000
        });

        this.timeline3.add({
            targets: [this.fish02],
            x: 450,
            ease: 'Power1',
            duration: 1000
        });

        this.timeline3.add({
            targets: [this.fish02],
            y: 250,
            ease: 'Power1',
            duration: 1000
        });

        this.timeline3.add({
            targets: [this.fish02],
            x: 200,
            ease: 'Power1',
            duration: 1000
        });

    }

    onButtonDown() {
        this.scene.start("Page10Scene");
    }

    audio1Play(sound) {
        this.audio1Sound.play()
    }

    playSharkAnimation() {
        console.log("test")
        this.timeline2.play();
    }

    playSecondCorrectSound() {
        this.correctSound.play();
    }

    playFishAnimation() {
        this.timeline3.play();
    }

    playSecondIncorrectSound() {
        this.incorrectSound.play();
    }

}