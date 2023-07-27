
    class TitleScene extends Phaser.Scene {
        constructor() {
            super({ key: 'TitleScene' });
        }

        create() {
            // Create the background
            this.background = new Background(this);
        }

        resize(width, height) {
            // Pass the resize event to the background
            this.background.resize(width, height);
        }
    }
    