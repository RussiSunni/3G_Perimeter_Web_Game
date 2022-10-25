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


        // Keypad     


        var calcBG = this.add.rectangle(0, 0, 300, 320, 0xacb6de);
        calcBG.setStrokeStyle(2, 0x000000);

        var key1 = this.add.rectangle(-100, -120, 100, 80, 0xacb6de);
        key1.setStrokeStyle(2, 0x000000);
        var key1Text = this.add.text(0, 0, "1", { fontFamily: "Arial", fontSize: "48px", color: "0x000000", align: "center" });
        Phaser.Display.Align.In.Center(key1Text, key1);

        var key2 = this.add.rectangle(0, -120, 100, 80, 0xacb6de);
        key2.setStrokeStyle(2, 0x000000);
        var key2Text = this.add.text(0, 0, "2", { fontFamily: "Arial", fontSize: "48px", color: "0x000000", align: "center" });
        Phaser.Display.Align.In.Center(key2Text, key2);

        var key3 = this.add.rectangle(100, -120, 100, 80, 0xacb6de);
        key3.setStrokeStyle(2, 0x000000);
        var key3Text = this.add.text(0, 0, "3", { fontFamily: "Arial", fontSize: "48px", color: "0x000000", align: "center" });
        Phaser.Display.Align.In.Center(key3Text, key3);

        var key4 = this.add.rectangle(-100, -40, 100, 80, 0xacb6de);
        key4.setStrokeStyle(2, 0x000000);
        var key4Text = this.add.text(0, 0, "4", { fontFamily: "Arial", fontSize: "48px", color: "0x000000", align: "center" });
        Phaser.Display.Align.In.Center(key4Text, key4);

        var key5 = this.add.rectangle(0, -40, 100, 80, 0xacb6de);
        key5.setStrokeStyle(2, 0x000000);
        var key5Text = this.add.text(0, 0, "5", { fontFamily: "Arial", fontSize: "48px", color: "0x000000", align: "center" });
        Phaser.Display.Align.In.Center(key5Text, key5);

        var key6 = this.add.rectangle(100, -40, 100, 80, 0xacb6de);
        key6.setStrokeStyle(2, 0x000000);
        var key6Text = this.add.text(0, 0, "6", { fontFamily: "Arial", fontSize: "48px", color: "0x000000", align: "center" });
        Phaser.Display.Align.In.Center(key6Text, key6);

        var key7 = this.add.rectangle(-100, 40, 100, 80, 0xacb6de);
        key7.setStrokeStyle(2, 0x000000);
        var key7Text = this.add.text(0, 0, "7", { fontFamily: "Arial", fontSize: "48px", color: "0x000000", align: "center" });
        Phaser.Display.Align.In.Center(key7Text, key7);

        var key8 = this.add.rectangle(0, 40, 100, 80, 0xacb6de);
        key8.setStrokeStyle(2, 0x000000);
        var key8Text = this.add.text(0, 0, "8", { fontFamily: "Arial", fontSize: "48px", color: "0x000000", align: "center" });
        Phaser.Display.Align.In.Center(key8Text, key8);

        var key9 = this.add.rectangle(100, 40, 100, 80, 0xacb6de);
        key9.setStrokeStyle(2, 0x000000);
        var key9Text = this.add.text(0, 0, "9", { fontFamily: "Arial", fontSize: "48px", color: "0x000000", align: "center" });
        Phaser.Display.Align.In.Center(key9Text, key9);

        var key10 = this.add.rectangle(-100, 120, 100, 80, 0xacb6de);
        key10.setStrokeStyle(2, 0x000000);
        var key10Text = this.add.text(0, 0, "10", { fontFamily: "Arial", fontSize: "48px", color: "0x000000", align: "center" });
        Phaser.Display.Align.In.Center(key10Text, key10);

        var key11 = this.add.rectangle(0, 120, 100, 80, 0xacb6de);
        key11.setStrokeStyle(2, 0x000000);
        var key11Text = this.add.text(0, 0, "11", { fontFamily: "Arial", fontSize: "48px", color: "0x000000", align: "center" });
        Phaser.Display.Align.In.Center(key11Text, key11);

        var key12 = this.add.rectangle(100, 120, 100, 80, 0xacb6de);
        key12.setStrokeStyle(2, 0x000000);
        var key12Text = this.add.text(0, 0, "12", { fontFamily: "Arial", fontSize: "48px", color: "0x000000", align: "center" });
        Phaser.Display.Align.In.Center(key12Text, key12);


        var calcContainer = this.add.container(200, 500, [calcBG, key1, key2, key3, key4, key5, key6, key7, key8, key9, key10, key11, key12, key1Text, key2Text, key3Text, key4Text, key5Text, key6Text, key7Text, key8Text, key9Text, key10Text, key11Text, key12Text]);
        //  this.rect.fillGradientStyle(0xb0500f, 0xffffff, 1);

    }

    onButtonDown() {
        this.scene.start("Page6Scene");
    }


}