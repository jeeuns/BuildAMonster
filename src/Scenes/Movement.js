class Movement extends Phaser.Scene{
    constructor() {
        super("sceneName");
        this.my = {sprite: {}}; // Create an object to hold sprite bindings

        this.bodyX = 400;
        this.bodyY = 450;

        this.emittedSprite = null;
    }

    preload() {
        this.load.setPath("./assets/");

        //player sprite
        this.load.image("Player", "character_roundRed.png");

        //player emitting object
        this.load.image("Blast", "effect_blast.png");

        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Movement.js</h2>'

    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        //sprite body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "Player");
        my.sprite.body.setScale(2);

        my.sprite.shot = this.add.sprite(this.blastX, this.blastY, "Blast");
        my.sprite.shot.visible = false;


        //Movement Keys
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.Space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {

        //PRESS SPACE TO SHOOT
        if (Phaser.Input.Keyboard.JustDown(this.Space)) {
            this.emitSprite();
            //this.shoot();
        }

        //Key input
        //LEFT
        if (this.keyA.isDown) {
            this.movebody(-20);        
        }

        //RIGHT
        if (this.keyD.isDown) {
            this.movebody(20);        
        }

        if (this.emittedSprite) {
            this.emittedSprite.y -= 50; // Adjust the speed of upward movement as needed
            // Check if emitted sprite is out of screen bounds
            if (this.emittedSprite.y < -this.emittedSprite.height) {
                this.emittedSprite.destroy(); // Destroy the emitted sprite if it's out of bounds
                this.emittedSprite = null; // Reset emitted sprite reference
            }
        }
    }
    
    movebody(amount) {

        this.my.sprite.body.x += amount;

        if (this.my.sprite.body.x < 0) {
            this.my.sprite.body.x = 0;
        } else if (this.my.sprite.body.x > this.game.config.width) {
            this.my.sprite.body.x = this.game.config.width;
        }
        
    }

    // shoot() {
    //     this.my.sprite.shot.x = this.my.sprite.body.x;
    //     this.my.sprite.shot.y = this.my.sprite.body.y;
    //     this.my.sprite.shot.visible = true;

    //     this.tweens.add({
    //         targets: this.my.sprite.shot,
    //         y: -100,
    //         duration: 500,
    //         onComplete: () => {
    //             this.my.sprite.shot.visible = false;
    //         }
    //     });
    // }

    emitSprite() {
        this.emittedSprite = this.add.sprite(this.my.sprite.body.x, this.my.sprite.body.y, "Blast");
        }

}