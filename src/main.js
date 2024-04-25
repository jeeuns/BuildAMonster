// Regina Kim
// Created: 4/24/2024
// Phaser: 3.70.0
//
// 1D Movement
//
// Class assignment for CMPM 120 where we explore 1D of movement
//
// 
// Art assets from Kenny Assets "Scribble Platformer" set:
// https://kenney.nl/assets/scribble-platformer

"use strict"

// game config
let config = {
    parent: 'phaser-game',
    type: Phaser.CANVAS,
    render: {
        pixelArt: true  // prevent pixel art from getting blurred when scaled
    },
    width: 800,
    height: 600,
    scene: [Movement],
    fps: { 
        forceSetTimeOut: true,
        target: 30
    }
}


const game = new Phaser.Game(config);