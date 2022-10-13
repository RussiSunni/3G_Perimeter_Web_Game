var game;
window.onload = function () {
    var config = {
        type: Phaser.AUTO,
        width: 1280,
        height: 720,
        parent: 'phaser-game',
        scene: [Page1Scene, Page2Scene, Page3Scene, Page4Scene]
    };
    game = new Phaser.Game(config);
}