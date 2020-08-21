scene.onOverlapTile(SpriteKind.Enemy, myTiles.tile2, function (sprite, location) {
    mySprite2.setPosition(randint(0, 500), randint(0, 500))
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    scene.cameraShake(8, 200)
    pause(5)
    mySprite2.setPosition(randint(0, 500), randint(0, 500))
    info.changeScoreBy(-1)
    info.player2.changeScoreBy(1)
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    mySprite.destroy()
    pause(1000)
    game.splash(game.askForString("Name for High score. Please text."))
    game.splash("Game Over! Your score is:", "" + info.score())
    game.reset()
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
info.setScore(0)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 200, 200)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite2.setPosition(randint(0, 500), randint(0, 500))
tiles.setTilemap(tiles.createTilemap(hex`3200320003030303030303030303030303030303010101010101010303030303030303030303030303030303030303030303030303030303030303030303030303030303030301010101010101030303030303030303030303030303030303030303030303030303030303030303030303030303030303030101010101010103030303030303030303030303030303030303030303030303030303030303030303030303030303030303010101010101010303030303030303030303030303030303030303030303030303030303030303030303030303030303030301010101010101030303030303030303030303030303030303030303030303030303010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010303030301010101010103030303030303030303030303030303030303030303030303030303030303030303030401010101030303030505010101010303030303030303030303030303030303030303030303030303030303030303030304010101010103030303050501010101030303030303030303030303030303030303030303030303030303030303030303030401010101010303030305050101010103030303020202020202020202020202020202020202020303030303030303030304010101010101030303030505010101010303030302020202020202020202020202020202020202030303030303030303040101010101010303030303050501010101030303030202020202020202020202020202020202020203030303030303030304010101010103030303030305050101010103030303020202020202020202020202020202020202020303030303030303040101010101030303030303030505010101010303030302020202020202020202020202020202020202030303030303030304010101010303030303030303050501010101030303030202020202020202020202020202020202020203030303030303030401010103030303030303030305050101010103030303020202020202020202020202020202020202020303030303030303040101010303030303030303030505010101010303030302020202020202020202020202020202020202030303030303030304010101030303030303030303050501010101030303030202020202020202020202020202020202020203030303030303030401010101010101010303030305050101010103030303020202020202020202020202020202020202020303030303030303040101010101010101030303030505010101010303030302020202020202020202020202020202020202030303030303030304010101010101010103030303050501010101030303030202020202020202020202020202020202020203030303030303030401010101010101010303030305050101010103030303020202020202020202020202020202020202020303030303030303040101010101010101030303030505010101010303030302020202020202020202020202020202020202030303030303030304010101010101010103030303050501010101030303030202020202020202020202020202020202020203030303030303030401010103030303030303030305050101010103030303020202020202020202020202020202020202020303030303030303040101010303030303030303030505010101010303030302020202020202020202020202020202020202030303030303030304010101030303030303030303050501010101030303030202020202020202020202020202020202020203030303030303030401010103030303030303030305050101010103030303020202020202020202020202020202020202020303030303030303040101010303030303030303030505010101010303030302020202020202020202020202020202020202030303030303030304010101030303030303030303050501010101030303030202020202020202020202020202020202020203030303030303030401010103030303030303030305050101010103030303020202020202020202020202020202020202020303030303030303040101010303030303030303030505010101010303030303030303030303030303030303030303030303030303030303030304010101030303030303030303050501010101030303030303030303030303030303030303030303030303030303030303030401010103030303030303030305050101010103030303030303030303030303030303030303030303030303030303030303040101010303030303030303030505010101010101010101010101010101010101010101010101010101010101010101010101010101010101010103030303050501010101010101010101010101010101010101010101010101010101010101010101010101010101010101010303030305050101010101010101010101010101010101010101010101010101010101010101010101010101010101010101030303030505010101010101010101010101010101010101010101010101010101010101010101010101010101010101010103030303010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010303030303030303030303030303030303030101010101010101030303030303030303030303030303030303030303030303030303030303030303030303030303030303010101010101010103030303030303030303030303030303030303030303030303030303030303030303030303030303030301010101010101010303030303030303030303030303030303030303030303030303030303030303030303030303030303030101010101010101030303030303030303030303030303030303030303030303030303030303030303030303030303030303010101010101010103030303030303030303030303030303030303030303030303030303030303030303030303030303030301010101010101010303030303030303030303030303030303030303030303030303030303030303030303030303030303030101010101010101030303030303030303030303030303030303030303030303`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 
    . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 2 . . . . . . 
    . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 2 . . . . . . . 
    . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 2 . . . . . . . 
    . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile5,myTiles.tile6], TileScale.Sixteen))
scene.cameraFollowSprite(mySprite)
mySprite2.follow(mySprite, 150)
info.setLife(5)
forever(function () {
    pause(1000)
    info.changeScoreBy(1)
})
