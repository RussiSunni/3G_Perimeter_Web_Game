var game;
window.onload = function () {
    var config = {
        type: Phaser.AUTO,
        width: 1280,
        height: 720,
        parent: 'phaser-game',
        scene: [Page9Scene, Page2Scene, Page3Scene, Page4Scene, Page5Scene, Page6Scene, Page7Scene, Page8Scene, Page1Scene, Page10Scene]
    };
    game = new Phaser.Game(config);
}