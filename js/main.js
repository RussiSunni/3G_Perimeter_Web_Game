var game;
window.onload = function () {
    var config = {
        type: Phaser.AUTO,
        width: 1280,
        height: 720,
        parent: 'phaser-game',
        scene: [IntroScene, ObjectivesScene, Objective1Scene]
    };
    game = new Phaser.Game(config);
}