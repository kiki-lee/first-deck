effects.confetti.startScreenEffect()
scene.setBackgroundColor(12)
let mySprite = sprites.create(img`
    ..........................................................b5b...
    .fffffffffffffffffffffffffffffffffffffffffffff...........b5b....
    .f1111111111111111111111111111111111111111111f........bbbbbb....
    .f1c1c11c11cc11cc11c1c11111111111111111111111f.......bb55555b...
    .f1ccc1c1c1c1c1c1c1c1c11111111111111122122111f......bb5d1f5d4c..
    .f1c1c1ccc1cc11cc111c111111111111111211211211f......b551ffdd444b
    .f1c1c1c1c1c111c1111c111111111111111211111211f......b55dfb4444b.
    .f1c1c111111111111111111111111111111121112111f.....bd55554444b..
    .f1111111111111111111111111111111111112121111f...bbddd5555555b..
    .f1cc11ccc1cc11ccc1c1c1cc111c11c1c11111211111f..bdddbbb5555555b.
    .f1c1c11c11c1c11c11ccc1c1c1c1c1c1c11111111111ffffddb55dc555555b.
    .f1cc111c11cc111c11c1c1c1c1ccc11c111111111111f..cbbd5dcd555555b.
    .f1c1c1ccc1c1c11c11c1c1cc11c1c11c111111111111f..cb55bcdd555555b.
    .f1cc1111111111111111111111111111111111111111f..bbcccddd55555db.
    .fffffffffffffffffffffffffffffffffffffffffffff......ccddd555bb..
    ......................................................cccccbb...
    `, SpriteKind.Player)
mySprite.setPosition(-100, 60)
mySprite.setVelocity(20, 0)
