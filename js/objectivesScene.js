class ObjectivesScene extends Phaser.Scene {
    constructor() {
        super('ObjectivesScene');
    }
    preload() {
        //load our images or sounds 
        this.load.image("background", "images/background.jpg");
    }

    create() {

        //define our objects  
        // Background.
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);

    }

    onButtonDown() {

    }

}