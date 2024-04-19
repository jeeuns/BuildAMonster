class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.headX = this.bodyX;
        this.headY = this.bodyY - 150;

        this.rightLegX = this.bodyX + 80;
        this.rightLegY = this.bodyY + 100;

        this.leftLegX = this.bodyX - 80;
        this.leftLegY = this.bodyY + 100;

        this.rightArmX = this.bodyX + 90;
        this.rightArmY = this.bodyY - 10;

        this.leftArmX = this.bodyX - 90;
        this.leftArmY = this.bodyY - 10;

        this.eyeX = this.bodyX;
        this.eyeY = this.bodyY - 200;

        this.mouthX = this.bodyX;
        this.mouthY = this.bodyY - 130;
        
        this.smileX = this.bodyX;
        this.smileY = this.bodyY - 130;

        this.earLeftX = this.bodyX - 60;
        this.earLeftY = this.bodyY - 250;
        
        this.earRightX = this.bodyX + 60;
        this.earRightY = this.bodyY - 250;

        this.noseX = this.bodyX;
        this.noseY = this.bodyY - 150;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redC.png");

        my.sprite.head = this.add.sprite(this.headX, this.headY, "monsterParts", "body_redE.png");

        // //leg X/Y
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_greenC.png");
        
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_greenC.png");
        my.sprite.leftLeg.flipX = true;

        // //arm XY

        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_yellowD.png");

        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_yellowD.png");
        my.sprite.leftArm.flipX = true;

        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_cute_light.png");

        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthC.png");
        //my.sprite.mouth.visible = false; //visibility test

        my.sprite.fang = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fang.visible = false; //visibility test
       
        // //need two ears
        my.sprite.leftear = this.add.sprite(this.earLeftX, this.earLeftY, "monsterParts", "detail_red_ear.png");
        my.sprite.leftear.flipX = true;

        my.sprite.rightear = this.add.sprite(this.earRightX, this.earRightY, "monsterParts", "detail_red_ear.png");

        my.sprite.nose = this.add.sprite(this.noseX, this.noseY, "monsterParts", "nose_yellow.png");

        //Create Key Objects
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        //Smile case (when s is pressed) only one mouth open at a time!
        if (this.input.keyboard.on("keydown-S", function() {
            my.sprite.mouth.visible = true;
            my.sprite.fang.visible = false;
        }));

        //fangs case (when f is pressed)
        if (this.input.keyboard.on("keydown-F", function() {
            my.sprite.mouth.visible = false;
            my.sprite.fang.visible = true;
        }));

        //movement case (A/D)
        //A = left

        //A = left
        if (this.keyA.isDown) {
            this.movebody(-10);        
        }

        //D = right
        if (this.keyD.isDown) {
            this.movebody(10);        
        }
    }
    movebody(amount) {

        this.my.sprite.body.x += amount;
        this.my.sprite.head.x += amount;
        this.my.sprite.rightLeg.x += amount;
        this.my.sprite.leftLeg.x += amount;
        this.my.sprite.rightArm.x += amount;
        this.my.sprite.leftArm.x += amount;
        this.my.sprite.eye.x += amount;
        this.my.sprite.mouth.x += amount;
        this.my.sprite.fang.x += amount;
        this.my.sprite.leftear.x += amount;
        this.my.sprite.rightear.x += amount;
        this.my.sprite.nose.x += amount;

    }

}