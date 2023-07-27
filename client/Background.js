
    class Background {
        constructor(scene) {
            this.scene = scene;
            // Create a light blue rectangle for the water background
            this.water = this.scene.add.rectangle(this.scene.cameras.main.width / 2, this.scene.cameras.main.height / 2, 
                                                  this.scene.cameras.main.width, this.scene.cameras.main.height, 0xadd8e6);
        }

        resize(width, height) {
            // Resize and reposition the water rectangle
            this.water.setPosition(width / 2, height / 2);
            this.water.setSize(width, height);
        }
    }
    