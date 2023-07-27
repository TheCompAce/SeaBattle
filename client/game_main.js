
    // Game configuration
    const config = {
        type: Phaser.AUTO,
        width: window.innerWidth,
        height: window.innerHeight,
        scene: [TitleScene, GameScene],
        scale: {
            mode: Phaser.Scale.RESIZE,
            autoCenter: Phaser.Scale.CENTER_BOTH
        }
    };

    // Create a new game instance
    const game = new Phaser.Game(config);

    // Update the game size when the window is resized
    window.addEventListener('resize', function () {
        game.scale.resize(window.innerWidth, window.innerHeight);
        
        // Iterate over each active scene
        for (let scene of game.scene.getScenes(true)) {
            // Check if the scene has a resize method
            if (scene.resize) {
                // Call the scene's resize method
                scene.resize(window.innerWidth, window.innerHeight);
            }
        }
    });
    