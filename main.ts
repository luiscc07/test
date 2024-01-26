let EnemySpawn: number[] = []
let Enemy1: Sprite = null
effects.blizzard.startScreenEffect()
tiles.setCurrentTilemap(tilemap`level3`)
let Attacker = sprites.create(img`
    . . 2 2 b b b b b . . . . . . . 
    . 2 b 4 4 4 4 4 4 b . . . . . . 
    2 2 4 4 4 4 d d 4 4 b . . . . . 
    2 b 4 4 4 4 4 4 d 4 b . . . . . 
    2 b 4 4 4 4 4 4 4 d 4 b . . . . 
    2 b 4 4 4 4 4 4 4 4 4 b . . . . 
    2 b 4 4 4 4 4 4 4 4 4 e . . . . 
    2 2 b 4 4 4 4 4 4 4 b e . . . . 
    . 2 b b b 4 4 4 b b b e . . . . 
    . . e b b b b b b b e e . . . . 
    . . . e e b 4 4 b e e e b . . . 
    . . . . . e e e e e e b d b b . 
    . . . . . . . . . . . b 1 1 1 b 
    . . . . . . . . . . . c 1 d d b 
    . . . . . . . . . . . c 1 b c . 
    . . . . . . . . . . . . c c . . 
    `, SpriteKind.Player)
controller.moveSprite(Attacker, 100, 100)
scene.cameraFollowSprite(Attacker)
tiles.placeOnTile(Attacker, tiles.getTileLocation(10, 3))
game.onUpdateInterval(10000, function () {
    Enemy1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 . . . . . . . 
        . . . . 3 e e e e e . . . . . . 
        . . . 3 e e f e e e 3 . . . . . 
        . . . 3 b e e e e b b . . . . . 
        . 3 3 3 1 e e 1 e e 3 . . . . . 
        3 e e 3 e e e 1 1 e 3 . . . . . 
        . 3 3 3 e 1 e e 1 e f 3 . . . . 
        . . 3 f 1 1 1 e e e 3 . . . . . 
        . . 3 e e 1 1 1 e e 3 3 . . . . 
        . . 3 3 e e 1 e e 3 e b 3 . . . 
        . . . 3 e e b e f 3 e e 3 . . . 
        . . 3 3 f e e e e e 3 3 . . . . 
        . 3 3 e e e e e e e e 3 3 . . . 
        . 3 b e e 3 3 e 3 e f e 3 . . . 
        `, SpriteKind.Player)
    Enemy1.startEffect(effects.blizzard, 500)
    Enemy1.follow(Attacker, 20)
    EnemySpawn = [0, 1]
    Enemy1.setPosition(randint(0, scene.screenWidth()), 0)
})
