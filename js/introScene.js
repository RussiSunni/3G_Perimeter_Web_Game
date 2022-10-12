class IntroScene extends Phaser.Scene {
    constructor() {
        super('IntroScene');
    }
    preload() {
        //load our images or sounds 
        this.load.image("shark01", "images/shark01.png");
    }
    create() {
        //define our objects
        // The text.
        this.text1 = this.add.text(game.config.width / 2, game.config.height / 2 - 200, "Interactive Lessons", { fontFamily: "Arial", color: "#ffd966", fontSize: "50px" });
        this.text1.setOrigin(0.5, 0.5);

        this.text2 = this.add.text(game.config.width / 2, game.config.height / 2 - 100, "PERIMETER", { fontFamily: "Arial", fontSize: "100px" });
        this.text2.setOrigin(0.5, 0.5);

        // Images.
        this.shark01 = this.add.image(150, 500, "shark01");
        this.shark01.scaleX = 0.3;
        this.shark01.scaleY = 0.3;

    }
    update() {
        //constant running loop
    }

}