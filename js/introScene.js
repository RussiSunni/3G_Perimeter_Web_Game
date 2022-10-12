class IntroScene extends Phaser.Scene {
    constructor() {
        super('IntroScene');
    }
    preload() {
        //load our images or sounds 

    }
    create() {
        //define our objects
        console.log("Ready!");
        this.text1 = this.add.text(game.config.width / 2, game.config.height / 2 - 200, "Interactive Lessons", { fontFamily: "Arial", color: "#ffd966", fontSize: "50px" });
        this.text1.setOrigin(0.5, 0.5);

        this.text2 = this.add.text(game.config.width / 2, game.config.height / 2 - 100, "PERIMETER", { fontFamily: "Arial", fontSize: "100px" });
        this.text2.setOrigin(0.5, 0.5);

    }
    update() {
        //constant running loop
    }

}