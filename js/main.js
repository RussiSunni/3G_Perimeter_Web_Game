var game;
window.onload = function () {
    var config = {
        type: Phaser.AUTO,
        width: 1280,
        height: 720,
        parent: 'phaser-game',
        // physics: {
        //     default: 'arcade',
        //     arcade: {
        //         debug: true,
        //         gravity: { y: 200 }
        //     }
        // },
        scene: [Page1Scene, Page2Scene, Page4Scene, Page5Scene, Page6Scene, Page7Scene, Page8Scene, Page10Scene, Page11Scene]
    };
    game = new Phaser.Game(config);
}