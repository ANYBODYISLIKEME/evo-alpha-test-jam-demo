namespace SpriteKind {
    export const Word = SpriteKind.create()
    export const instantdeath = SpriteKind.create()
    export const dead = SpriteKind.create()
    export const asset = SpriteKind.create()
    export const dna = SpriteKind.create()
    export const shooter_plant = SpriteKind.create()
    export const acidspit = SpriteKind.create()
    export const briefly_invulnerable = SpriteKind.create()
    export const acid = SpriteKind.create()
    export const spore = SpriteKind.create()
    export const spore_er = SpriteKind.create()
    export const boss = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.boss, function (sprite, otherSprite) {
    life += -1
    sprites.destroy(otherSprite)
    Gooey.setKind(SpriteKind.briefly_invulnerable)
    timer.after(1500, function () {
        Gooey.setKind(SpriteKind.Player)
    })
})
function store () {
    store_active = true
    blockMenu.setControlsEnabled(true)
    blockMenu.showMenu([
    "Jump" + " Cost: " + "1",
    "Double Jump" + " Cost: " + "3",
    "Cough Ball" + " Cost: " + "4",
    "Legs" + " Cost: " + "6",
    "Antennas" + " Cost:" + "6",
    "Color Change" + " Cost:" + "7",
    "Ultimate Evolution" + " Cost:" + "9",
    "Leave And Evolve"
    ], MenuStyle.List, MenuLocation.FullScreen)
    blockMenu.setColors(4, 12)
    cool_dna_animation = sprites.create(img`
        7 . . . 6 
        6 4 4 5 7 
        7 . . . 6 
        . 6 4 7 . 
        . 7 . 6 . 
        . . 6 . . 
        . 7 . 6 . 
        . 6 5 7 . 
        7 . . . 6 
        6 4 5 4 7 
        7 . . . 6 
        `, SpriteKind.asset)
    animation.runImageAnimation(
    cool_dna_animation,
    [img`
        . . . . . . . 
        . 7 . . . 6 . 
        . 6 4 4 5 7 . 
        . 7 . . . 6 . 
        . . 6 4 7 . . 
        . . 7 . 6 . . 
        . . . 6 . . . 
        . . 7 . 6 . . 
        . . 6 5 7 . . 
        . 7 . . . 6 . 
        . 6 4 5 4 7 . 
        . 7 . . . 6 . 
        . . . . . . . 
        `,img`
        . . . . . . . 
        . 7 . . 6 . . 
        . 6 4 4 7 . . 
        . 7 . . 6 . . 
        . . 6 7 . . . 
        . . 7 6 . . . 
        . . . 6 . . . 
        . . 7 6 . . . 
        . . 6 7 . . . 
        . 7 . . 6 . . 
        . 6 4 4 7 . . 
        . 7 . . 6 . . 
        . . . . . . . 
        `,img`
        . . . . . . . 
        . . 7 6 . . . 
        . . 6 7 . . . 
        . . 7 6 . . . 
        . . 6 7 . . . 
        . . 7 6 . . . 
        . . . 6 . . . 
        . . 7 6 . . . 
        . . 6 7 . . . 
        . . 7 6 . . . 
        . . 6 7 . . . 
        . . 7 6 . . . 
        . . . . . . . 
        `,img`
        . . . . . . . 
        . . . 6 . . . 
        . . . 7 . . . 
        . . . 6 . . . 
        . . . 7 . . . 
        . . . 6 . . . 
        . . . 6 . . . 
        . . . 6 . . . 
        . . . 7 . . . 
        . . . 6 . . . 
        . . . 7 . . . 
        . . . 6 . . . 
        . . . . . . . 
        `,img`
        . . . . . . . 
        . . . 6 7 . . 
        . . . 7 6 . . 
        . . . 6 7 . . 
        . . . 7 6 . . 
        . . . 6 7 . . 
        . . . 6 . . . 
        . . . 6 7 . . 
        . . . 7 6 . . 
        . . . 6 7 . . 
        . . . 7 6 . . 
        . . . 6 7 . . 
        . . . . . . . 
        `,img`
        . . . . . . . 
        . . 6 . . 7 . 
        . . 7 4 4 6 . 
        . . 6 . . 7 . 
        . . . 7 6 . . 
        . . . 6 7 . . 
        . . . 6 . . . 
        . . . 6 7 . . 
        . . . 7 6 . . 
        . . 6 . . 7 . 
        . . 7 4 4 6 . 
        . . 6 . . 7 . 
        . . . . . . . 
        `],
    100,
    true
    )
    cool_dna_animation.z = 102
    cool_dna_animation.setFlag(SpriteFlag.RelativeToCamera, true)
    cool_dna_animation.setPosition(5, 110)
    cool_dna_animation.z = 101
    bluebird77 = textsprite.create("bluebird 77 (B for Info)", 0, 6)
    bluebird77.setFlag(SpriteFlag.RelativeToCamera, true)
    bluebird77.setPosition(76, 88)
    bluebird77.z = 102
    bluebird77.setMaxFontHeight(1)
    scene.setBackgroundImage(img`
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444cccc4444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444cccc44444444444cc4444ccccccc44444444444444444444444444444444444444444444444
        4444cc44444444444444444444444444444444444444444444444444444444444444444444444444444444444ccccccccccccccccc444444444444444444444444444444444444444444444444444444
        444444ccc4444444444444444444444444444444444fffffffffffff4444444444444444444444444444444cccccccccccccccccc4444444444444444444444444444444444444444444444444444444
        444444ccccccccccccccc444444444fffffffffffff444444444444444444444444444444444444444444444cccc44444cc444444ccccc444444444444444444fff44444444444444444444444444444
        44444cccccccccc44444444444444444444fffffffffff444444444444444444444444444444444444444ccc444444ccc444444444444444444444444ffffff4444ffffff44444444444444444444444
        44444ccccccc44cccccc44444444444444444fffffffffffffffffffff4444444444444444444444444444444444cc444444444444444444444444444444444fffffffffffffffff4444444444444444
        44ccc444444444444444444444fffffffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ffffff44ffffffffffffff44444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ffffffffffffffffffffffff444444444444
        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ffffffff44444ffffff444444
        44444444444444444444444444444444444444444444444444444cccc4444444444444444444444444444444444444444444444444444444444444444444444ffffffff4444444444444444444444444
        4444444444444444444444444444444444444444444444ccccccc44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444ccccccccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444ff44444444444444444444444444ccccccccccccccc444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444fff4444444444444444444444444444444cccccc44444444444444444444444444444ffff4444444ffffffffffffff4444444444444444444444444444444444444444444444444444444444
        4444444ffff444444444444444444444444444cccc44444cccc444444444444444444444444444444ffffffff4444444444444fffffffffffff444444444444444444444444444444444444444444444
        4444444ffff4444444444444444444444444cccc444444444cccc444444444444444444444fffffffffffffffffffffffffffff444444444444444444444444444444444444444444444444444444444
        4444444ffff4444444444444444444444444444444444444444c4444444444444444444444444444444eeeeeeeee4fffffffffffffffffffff4444444444444444444444444444444444444444444444
        e444444fffff4444444444444444444444444444444444444444444444444444444444444444444ffffffffffffffeff444444444fffff44444444444444444444444444444444444444444444444444
        e444444ffcff444444444444444444444444444444444444444444444444444444444444fffffff44eeeeeeeeeeeffee4444444444444444444444444444444444444444444444444444444444444444
        ee44444fccff44444444444444444444444444444444444444444444444444444444444444444444eeeeeeeeefffeeeee444444444444444444444444444444444444444444444444444444444444444
        ee44444fcccff44444444444444444444444444444444444444444444444444444444444444444eeeeeeeeeffeeeeeeeee444444444444444444444444444444444444444444444444444444cccc4444
        eee444ffcccff444444444444444444eeee444444444444444444444444444444444444444444eeeeeeeeffeeeeeeeeeeeee4444444444444444444444444444444cccc44444444444cccccc44444444
        eee444ffcccff444444444444444eeeeeeee4444444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444444ccc444ccccccccccc44444444444444
        eeee44ffcccff444444444444444eeeeeeeeee444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeee444444444444444444444444444444ccccccceeccccccc444444444444
        eeee44ffcccfff4444444444444eeeeeeeeeeeeeeee44444444e44444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44444444444444444444444444cccceeeeeecccccce44cccccc444444
        eeeee4ffcccfff44444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeee444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee444444444444444444444444444eeeeeeeeeeeeeecccccc444cccc44
        eeeee4ffccccff4444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeccc444444
        eeeeeeffccccff4444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeffcccccf44444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeefccccccf4444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeefccccccf4444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeffcccccf44eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeefffffccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeefffffccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeffffffcffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeffffffcfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeffffffccfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeffffffccfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeefffffffcccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffcfcfefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffcccfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeefffffffffcccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeefffffffffffccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffcfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeefffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeefffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeefffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffccccffeeeeeeeeeeeeeeefcffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeefffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffcffffffffffffeeeeeeeeefcffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeefffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffcfffffffffffffffffffffcfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffcfffffffffccfcfcfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffcfffffcccfcffcffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcfcffffffffffffcfffcffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcfcfffffffffffcffccfffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcfcffffffffffffccffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffcfcfffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffcfcfffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffcfcffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffcfffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffeeeee
        eeeeefffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffeeee
        eeeeeffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffeee
        eeeeeffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffee
        eeeeefffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe
        eeeeefffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        eeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        eeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        eeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        eeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        eeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        eeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        efffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    visual_amount_of_dna = textsprite.create("x" + (dna_amount + 0), 0, 1)
    visual_amount_of_dna.setFlag(SpriteFlag.RelativeToCamera, true)
    visual_amount_of_dna.setPosition(17, 110)
    visual_amount_of_dna.z = 101
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(231, 9), true)
    tiles.setWallAt(tiles.getTileLocation(231, 10), true)
    tiles.setWallAt(tiles.getTileLocation(231, 11), true)
    tiles.setTileAt(tiles.getTileLocation(231, 9), assets.tile`myTile0`)
    tiles.setTileAt(tiles.getTileLocation(231, 10), assets.tile`myTile0`)
    tiles.setTileAt(tiles.getTileLocation(231, 11), assets.tile`myTile0`)
    tiles.setTileAt(location, assets.tile`myTile9`)
    tiles.setTileAt(tiles.getTileLocation(250, 11), assets.tile`myTile13`)
    fix()
    game.showLongText("YOU AWAKENED THE APEX PLANT!", DialogLayout.Bottom)
    game.showLongText("LAST OF ITS SPECIES", DialogLayout.Bottom)
    game.showLongText("HATCHED FROM THE EGG YOU SAW EARLIER.", DialogLayout.Bottom)
    game.showLongText("Now you must claim its position as Apex", DialogLayout.Bottom)
    boss_hp = statusbars.create(120, 6, StatusBarKind.EnemyHealth)
    boss_hp.setStatusBarFlag(StatusBarFlag.SmoothTransition, false)
    boss_hp.setColor(15, 2, 3)
    boss_hp.setBarBorder(1, 1)
    boss_hp.positionDirection(CollisionDirection.Top)
    boss_hp.setOffsetPadding(0, 2)
    bossy.ay = 400
    bossy.follow(Gooey, 90)
    boss_active = true
})
function fix () {
    game.setDialogFrame(img`
        ..cccccccccccccccccccc..
        .c67777777777777777776c.
        c676cccccccccccccccc676c
        c76cccccccccccccccccc67c
        c7cd1111111111111111dc7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7cd1111111111111111dc7c
        c67cccccccccccccccccc76c
        cc67777777777777777776cc
        .cccccccccccccccccccccc.
        ..cccccccccccccccccccc..
        `)
    game.setDialogCursor(img`
        7 . . . 6 
        6 4 4 5 7 
        7 . . . 6 
        . 6 4 7 . 
        . 7 . 6 . 
        . . 6 . . 
        . 7 . 6 . 
        . 6 5 7 . 
        7 . . . 6 
        6 4 5 4 7 
        7 . . . 6 
        `)
}
sprites.onOverlap(SpriteKind.acid, SpriteKind.boss, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    boss_hp.value += randint(0, -3)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.spore_er, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    controller.moveSprite(Gooey, 30, 0)
    color.setColor(7, color.rgb(0, 100, 100), 200)
    timer.after(1000, function () {
        color.startFadeFromCurrent(color.originalPalette)
        if (legs == true) {
            controller.moveSprite(Gooey, 135, 0)
        } else {
            controller.moveSprite(Gooey, 100, 0)
        }
    })
})
function again () {
    if (Math.percentChance(50)) {
        acidspit2 = sprites.createProjectileFromSprite(img`
            . f f . 
            f 7 7 f 
            f 7 7 f 
            . f f . 
            `, Gooey, 50, randint(-30, -120))
        acidspit2.setKind(SpriteKind.acid)
        acidspit2.ay = 300
        acidspit2.setFlag(SpriteFlag.GhostThroughWalls, true)
    } else if (Math.percentChance(50)) {
        acidspit2 = sprites.createProjectileFromSprite(img`
            . f f . 
            f 7 7 f 
            f 7 7 f 
            . f f . 
            `, Gooey, -50, randint(-30, -120))
        acidspit2.setKind(SpriteKind.acid)
        acidspit2.ay = 300
        acidspit2.setFlag(SpriteFlag.GhostThroughWalls, true)
    } else {
        again()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.dna, function (sprite, otherSprite) {
    dna_amount += 1
    sprites.destroy(otherSprite)
})
function die () {
    timer.after(500, function () {
        color.startFade(color.originalPalette, color.Black, 200)
        timer.after(1000, function () {
            scene.setBackgroundImage(img`
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                `)
            tiles.setCurrentTilemap(tilemap`level2`)
            color.setPalette(
            color.originalPalette
            )
            TextDeath = textsprite.create(" You Died!", 0, 6)
            TextDeath.setFlag(SpriteFlag.RelativeToCamera, true)
            TextDeath.setPosition(80, 40)
            Gooey.setFlag(SpriteFlag.RelativeToCamera, true)
            Gooey.ay = 0
            Gooey.setPosition(80, 100)
            sprites.destroyAllSpritesOfKind(SpriteKind.instantdeath)
            sprites.destroyAllSpritesOfKind(SpriteKind.dna)
            sprites.destroyAllSpritesOfKind(SpriteKind.shooter_plant)
            timer.after(1000, function () {
                sprites.destroyAllSpritesOfKind(SpriteKind.dead)
                sprites.destroyAllSpritesOfKind(SpriteKind.Text)
                MAINMENU.setButtonEventsEnabled(true)
                start()
            })
        })
    })
}
function gamestart () {
    dna_amount = 0
    life = 3
    life_text = textsprite.create("Life:" + life)
    life_text.setPosition(20, 113)
    life_text.setFlag(SpriteFlag.RelativeToCamera, true)
    MAINMENU.close()
    Title_Screen_Active = false
    sprites.destroy(Title_But_I_Thought_it_Would_be_Cooler_to_let_it_Move_Around)
    MAINMENU.setButtonEventsEnabled(false)
    if (lifestage == 1) {
        Gooey = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f . . . . 
            . f 6 7 7 7 7 7 7 7 7 6 f . . . 
            . f 6 7 7 7 7 7 7 7 7 7 6 f . . 
            f 6 7 f 7 7 7 f 7 7 7 7 7 6 f . 
            f 6 7 7 7 7 7 7 7 7 7 7 7 7 6 f 
            f f f f f f f f f f f f f f f f 
            f . f . f . f . f . f . f . f . 
            `, SpriteKind.Player)
    } else {
        Gooey = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f . . . . 
            . f 6 7 7 7 7 7 7 7 7 6 f . . . 
            . f 6 7 7 7 7 7 7 7 7 7 6 f . . 
            f 6 7 f 7 7 7 f 7 7 7 7 7 6 f . 
            f 6 7 7 7 7 7 7 7 7 7 7 7 7 6 f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.Player)
    }
    Gooey.z = 101
    tiles.setCurrentTilemap(tilemap`level1`)
    scene.setBackgroundImage(img`
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbeeeeeeeeeeeeeeeeeeeeebbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeeeeeeeeeeeeeeeeeebbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeee
        eeeeeeeebbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbeeeeebbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbe
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee55555555555eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee55544444444444555eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5444444444444444445eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee544444444444444444445eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaa
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5544444444444444444444455eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaa
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5444444444444444444444445eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaaaaa
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee544444444444444444444444445eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaa
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee54444444444444444444444444445eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaaaaaaa
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5444444444444444444444444444445eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaa
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5444444444444444444444444444445eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5444444444444444444444444444445eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee544444444444444444444444444444445eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee544444444444444444444444444444445eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee544444444444444444444444444444445eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee544444444444444444444444444444445eeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee544444444444444444444444444444445eeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee544444444444444444444444444444445eeeeeeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee544444444444444444444444444444445eeeeeeeeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee544444444444444444444444444444445eeeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeee544444444444444444444444444444445eeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeee544444444444444444444444444444445aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaee5444444444444444444444444444aaaa5aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa4444444444444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        `)
    tiles.placeOnTile(Gooey, tiles.getTileLocation(1, 11))
    if (legs == true) {
        controller.moveSprite(Gooey, 135, 0)
    } else {
        controller.moveSprite(Gooey, 100, 0)
    }
    scene.cameraFollowSprite(Gooey)
    Gooey.ay = 400
    if (lifestage == 1) {
        characterAnimations.loopFrames(
        Gooey,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f . . . . 
            . f 6 7 7 7 7 7 7 7 7 6 f . . . 
            . f 6 7 7 7 7 7 7 7 7 7 6 f . . 
            f 6 7 f 7 7 7 f 7 7 7 7 7 6 f . 
            f 6 7 7 7 7 7 7 7 7 7 7 7 7 6 f 
            f f f f f f f f f f f f f f f f 
            f . f . f . f . f . f . f . f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f . . . . 
            . f 6 7 7 7 7 7 7 7 7 6 f . . . 
            . f 6 7 7 7 7 7 7 7 7 7 6 f . . 
            f 6 7 f 7 7 7 f 7 7 7 7 7 6 f . 
            f 6 7 7 7 7 7 7 7 7 7 7 7 7 6 f 
            f f f f f f f f f f f f f f f f 
            . . . . . . . . f . f . f . f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f . . . . 
            . f 6 7 7 7 7 7 7 7 7 6 f . . . 
            . f 6 7 7 7 7 7 7 7 7 7 6 f . . 
            f 6 7 f 7 7 7 f 7 7 7 7 7 6 f . 
            f 6 7 7 7 7 7 7 7 7 7 7 7 7 6 f 
            f f f f f f f f f f f f f f f f 
            f . f . f . f . . . . . . . . . 
            `],
        80,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        Gooey,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f f f f . . 
            . . . f 6 7 7 7 7 7 7 7 7 6 f . 
            . . f 6 7 7 7 7 7 7 7 7 7 6 f . 
            . f 6 7 7 7 7 7 f 7 7 7 f 7 6 f 
            f 6 7 7 7 7 7 7 7 7 7 7 7 7 6 f 
            f f f f f f f f f f f f f f f f 
            . f . f . f . f . f . f . f . f 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f f f f . . 
            . . . f 6 7 7 7 7 7 7 7 7 6 f . 
            . . f 6 7 7 7 7 7 7 7 7 7 6 f . 
            . f 6 7 7 7 7 7 f 7 7 7 f 7 6 f 
            f 6 7 7 7 7 7 7 7 7 7 7 7 7 6 f 
            f f f f f f f f f f f f f f f f 
            . f . f . f . f . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f f f f . . 
            . . . f 6 7 7 7 7 7 7 7 7 6 f . 
            . . f 6 7 7 7 7 7 7 7 7 7 6 f . 
            . f 6 7 7 7 7 7 f 7 7 7 f 7 6 f 
            f 6 7 7 7 7 7 7 7 7 7 7 7 7 6 f 
            f f f f f f f f f f f f f f f f 
            . . . . . . . . . f . f . f . f 
            `],
        75,
        characterAnimations.rule(Predicate.MovingRight)
        )
    } else if (lifestage == 0) {
        characterAnimations.loopFrames(
        Gooey,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f . . . . 
            . f 6 7 7 7 7 7 7 7 7 6 f . . . 
            . f 6 7 7 7 7 7 7 7 7 7 6 f . . 
            f 6 7 f 7 7 7 f 7 7 7 7 7 6 f . 
            f 6 7 7 7 7 7 7 7 7 7 7 7 7 6 f 
            f f f f f f f f f f f f f f f f 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f . . . . . 
            f 6 7 7 7 7 7 7 7 7 6 f . . . . 
            f 6 7 7 7 7 7 7 7 7 7 6 f . . . 
            f 6 7 f 7 7 7 f 7 7 7 7 7 6 f . 
            f 6 7 7 7 7 7 7 7 7 7 7 7 7 6 f 
            f f f f f f f f f f f f f f f f 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f . . . . . 
            f 6 7 7 7 7 7 7 7 7 6 f . . . . 
            f 6 7 7 7 7 7 7 7 7 7 6 f . . . 
            f 6 f 7 7 7 f 7 7 7 7 7 6 f . . 
            f 6 7 7 7 7 7 7 7 7 7 7 7 6 f . 
            f f f f f f f f f f f f f f f . 
            `],
        75,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        Gooey,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f f f f . . 
            . . . f 6 7 7 7 7 7 7 7 7 6 f . 
            . . f 6 7 7 7 7 7 7 7 7 7 6 f . 
            . f 6 7 7 7 7 7 f 7 7 7 f 7 6 f 
            f 6 7 7 7 7 7 7 7 7 7 7 7 7 6 f 
            f f f f f f f f f f f f f f f f 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f f f f . 
            . . . . f 6 7 7 7 7 7 7 7 7 6 f 
            . . . f 6 7 7 7 7 7 7 7 7 7 6 f 
            . f 6 7 7 7 7 7 f 7 7 7 f 7 6 f 
            f 6 7 7 7 7 7 7 7 7 7 7 7 7 6 f 
            f f f f f f f f f f f f f f f f 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f f f f . 
            . . . . f 6 7 7 7 7 7 7 7 7 6 f 
            . . . f 6 7 7 7 7 7 7 7 7 7 6 f 
            . . f 6 7 7 7 7 7 f 7 7 7 f 6 f 
            . f 6 7 7 7 7 7 7 7 7 7 7 7 6 f 
            . f f f f f f f f f f f f f f f 
            `],
        75,
        characterAnimations.rule(Predicate.MovingRight)
        )
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Title_Screen_Active == false) {
        if (can_spit == true) {
            if (Math.percentChance(50)) {
                acidspit2 = sprites.createProjectileFromSprite(img`
                    . f f . 
                    f 7 7 f 
                    f 7 7 f 
                    . f f . 
                    `, Gooey, 50, randint(-30, -120))
                acidspit2.setKind(SpriteKind.acid)
                acidspit2.ay = 300
                acidspit2.setFlag(SpriteFlag.GhostThroughWalls, true)
            } else if (Math.percentChance(50)) {
                acidspit2 = sprites.createProjectileFromSprite(img`
                    . f f . 
                    f 7 7 f 
                    f 7 7 f 
                    . f f . 
                    `, Gooey, -50, randint(-30, -120))
                acidspit2.setKind(SpriteKind.acid)
                acidspit2.ay = 300
                acidspit2.setFlag(SpriteFlag.GhostThroughWalls, true)
            } else {
                again()
            }
        }
    }
})
function death_drained () {
    if (lifestage == 1) {
        if (characterAnimations.matchesRule(Gooey, characterAnimations.rule(Predicate.FacingLeft))) {
            animation.runImageAnimation(
            Gooey,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f f f f f f f f f f . . . . 
                . f 6 7 7 7 7 7 7 7 7 6 f . . . 
                . f 6 7 7 7 7 7 7 7 7 7 6 f . . 
                f 6 7 f 7 7 7 f 7 7 7 7 7 6 f . 
                f 6 7 7 7 7 7 7 7 7 7 7 7 7 6 f 
                f f f f f f f f f f f f f f f f 
                f . f . f . f . f . f . f . f . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f f f f f f f f f f f . . . 
                . f 6 7 7 7 7 7 7 7 7 7 6 f . . 
                f 6 7 f 7 7 7 f 7 7 7 7 7 6 f . 
                f 6 7 7 7 7 7 7 7 7 7 7 7 7 6 f 
                f f f f f f f f f f f f f f f f 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f f f f f f f f f f f f . . 
                f 6 7 7 7 7 7 7 7 7 7 7 7 6 f . 
                f 6 7 f 7 7 7 f 7 7 7 7 7 7 6 f 
                f f f f f f f f f f f f f f f f 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                f f f f f f f f f f f f f f f . 
                f 6 7 f 7 7 7 f 7 7 7 7 7 7 6 f 
                f f f f f f f f f f f f f f f f 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                f f f f f f f f f f f f f f f f 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f f f f f f f f f f f f f . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f f f f f f f f f f f f . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f f f f f f f f f f . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            75,
            false
            )
            timer.after(500, function () {
                die()
            })
        } else if (characterAnimations.matchesRule(Gooey, characterAnimations.rule(Predicate.FacingRight))) {
            animation.runImageAnimation(
            Gooey,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f f f f f . . 
                . . . f 6 7 7 7 7 7 7 7 7 6 f . 
                . . f 6 7 7 7 7 7 7 7 7 7 6 f . 
                . f 6 7 7 7 7 7 f 7 7 7 f 7 6 f 
                f 6 7 7 7 7 7 7 7 7 7 7 7 7 6 f 
                f f f f f f f f f f f f f f f f 
                . f . f . f . f . f . f . f . f 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f f f f f f f f f f f f . 
                . . f 6 7 7 7 7 7 7 7 7 7 6 f . 
                . f 6 7 7 7 7 7 f 7 7 7 f 7 6 f 
                f 6 7 7 7 7 7 7 7 7 7 7 7 7 6 f 
                f f f f f f f f f f f f f f f f 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f f f f f f f f f f f f f . 
                . f 6 7 7 7 7 7 7 7 7 7 7 7 6 f 
                f 6 7 7 7 7 7 7 f 7 7 7 f 7 6 f 
                f f f f f f f f f f f f f f f f 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f f f f f f f f f f f f f f 
                f 6 7 7 7 7 7 7 f 7 7 7 f 7 6 f 
                f f f f f f f f f f f f f f f f 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                f f f f f f f f f f f f f f f f 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f f f f f f f f f f f f f . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f f f f f f f f f f f f . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f f f f f f f f f f . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            75,
            false
            )
            timer.after(500, function () {
                die()
            })
        }
    } else {
        if (characterAnimations.matchesRule(Gooey, characterAnimations.rule(Predicate.FacingLeft))) {
            animation.runImageAnimation(
            Gooey,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f f f f f f f f f f . . . . 
                . f 6 7 7 7 7 7 7 7 7 6 f . . . 
                . f 6 7 7 7 7 7 7 7 7 7 6 f . . 
                f 6 7 f 7 7 7 f 7 7 7 7 7 6 f . 
                f 6 7 7 7 7 7 7 7 7 7 7 7 7 6 f 
                f f f f f f f f f f f f f f f f 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f f f f f f f f f f f . . . 
                . f 6 7 7 7 7 7 7 7 7 7 6 f . . 
                f 6 7 f 7 7 7 f 7 7 7 7 7 6 f . 
                f 6 7 7 7 7 7 7 7 7 7 7 7 7 6 f 
                f f f f f f f f f f f f f f f f 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f f f f f f f f f f f f . . 
                f 6 7 7 7 7 7 7 7 7 7 7 7 6 f . 
                f 6 7 f 7 7 7 f 7 7 7 7 7 7 6 f 
                f f f f f f f f f f f f f f f f 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                f f f f f f f f f f f f f f f . 
                f 6 7 f 7 7 7 f 7 7 7 7 7 7 6 f 
                f f f f f f f f f f f f f f f f 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                f f f f f f f f f f f f f f f f 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f f f f f f f f f f f f f . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f f f f f f f f f f f f . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f f f f f f f f f f . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            75,
            false
            )
            timer.after(500, function () {
                die()
            })
        } else if (characterAnimations.matchesRule(Gooey, characterAnimations.rule(Predicate.FacingRight))) {
            animation.runImageAnimation(
            Gooey,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f f f f f . . 
                . . . f 6 7 7 7 7 7 7 7 7 6 f . 
                . . f 6 7 7 7 7 7 7 7 7 7 6 f . 
                . f 6 7 7 7 7 7 f 7 7 7 f 7 6 f 
                f 6 7 7 7 7 7 7 7 7 7 7 7 7 6 f 
                f f f f f f f f f f f f f f f f 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f f f f f f f f f f f f . 
                . . f 6 7 7 7 7 7 7 7 7 7 6 f . 
                . f 6 7 7 7 7 7 f 7 7 7 f 7 6 f 
                f 6 7 7 7 7 7 7 7 7 7 7 7 7 6 f 
                f f f f f f f f f f f f f f f f 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f f f f f f f f f f f f f . 
                . f 6 7 7 7 7 7 7 7 7 7 7 7 6 f 
                f 6 7 7 7 7 7 7 f 7 7 7 f 7 6 f 
                f f f f f f f f f f f f f f f f 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f f f f f f f f f f f f f f 
                f 6 7 7 7 7 7 7 f 7 7 7 f 7 6 f 
                f f f f f f f f f f f f f f f f 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                f f f f f f f f f f f f f f f f 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f f f f f f f f f f f f f . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f f f f f f f f f f f f . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f f f f f f f f f f . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            75,
            false
            )
            timer.after(500, function () {
                die()
            })
        }
    }
}
sprites.onOverlap(SpriteKind.acid, SpriteKind.shooter_plant, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Title_Screen_Active == false) {
        if (jump == false) {
            timer.throttle("diebythis", 3000, function () {
                controller.moveSprite(Gooey, 0, 0)
                Gooey.setKind(SpriteKind.dead)
                death_drained()
            })
        }
        if (jump == true) {
            if (Gooey.isHittingTile(CollisionDirection.Bottom)) {
                Gooey.vy += -250
            }
        }
        if (!(Gooey.isHittingTile(CollisionDirection.Bottom))) {
            if (double_jump == true) {
                timer.throttle("hmm", 2500, function () {
                    Gooey.vy += -75
                })
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    life += -1
    sprites.destroy(otherSprite)
    Gooey.setKind(SpriteKind.briefly_invulnerable)
    timer.after(1500, function () {
        Gooey.setKind(SpriteKind.Player)
    })
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    game.setDialogFrame(img`
        ..cccccccccccccccccccc..
        .c67777777777777777776c.
        c676cccccccccccccccc676c
        c76cccccccccccccccccc67c
        c7cd1111111111111111dc7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7cd1111111111111111dc7c
        c67cccccccccccccccccc76c
        cc67777777777777777776cc
        .cccccccccccccccccccccc.
        ..cccccccccccccccccccc..
        `)
    game.setDialogCursor(img`
        7 . . . 6 
        6 4 4 5 7 
        7 . . . 6 
        . 6 4 7 . 
        . 7 . 6 . 
        . . 6 . . 
        . 7 . 6 . 
        . 6 5 7 . 
        7 . . . 6 
        6 4 5 4 7 
        7 . . . 6 
        `)
    game.showLongText("Note the game development was started with only 3-days 9-hours 50-minutes and 39-seconds remaining", DialogLayout.Full)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (blockMenu.selectedMenuOption() == "Jump" + " Cost: " + "1") {
        fix()
        game.showLongText("Provides an Exoskeleton for your Blob, letting him Jump without Dying ", DialogLayout.Full)
    } else if (blockMenu.selectedMenuOption() == "Double Jump" + " Cost: " + "3") {
        fix()
        game.showLongText("Allows your Blob to Form a Surface Within Itself, therefore allowing it to jump off of itself, he must recover before able to this action again.", DialogLayout.Full)
    } else if (blockMenu.selectedMenuOption() == "Cough Ball" + " Cost: " + "4") {
        fix()
        game.showLongText("Evolves a defense mechanism which allows the blob to cough up parts of itself, can be used to harm predators, uncontrol-able.", DialogLayout.Full)
    } else if (blockMenu.selectedMenuOption() == "Legs" + " Cost: " + "6") {
        fix()
        game.showLongText("Gives your blob tiny legs, lets you run faster", DialogLayout.Full)
    } else if (blockMenu.selectedMenuOption() == "Antennas" + " Cost:" + "6") {
        fix()
        game.showLongText("Look Cool with These Tiny Ear Replacements, Does not Raise Price of Adaptations (NOT IN ALPHA)", DialogLayout.Full)
    } else if (blockMenu.selectedMenuOption() == "Color Change" + " Cost:" + "7") {
        fix()
        game.showLongText("Makes you a White un-blending color, Cosmetic Only (Does Not Raise the Price of Adaptations (NOT IN ALPHA)", DialogLayout.Full)
    } else if (blockMenu.selectedMenuOption() == "Ultimate Evolution" + " Cost:" + "9") {
        fix()
        game.showLongText("???, does something good? (NOT IN ALPHA)", DialogLayout.Full)
    }
})
function unused_content () {
    scene.setBackgroundImage(img`
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbfffffffffffffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbfffffffffffffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbfffffffffffffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbfffffffffffffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbfffffffffffffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbffffffffffccbbbbbbbbfffffccbbbfffffccbbbfffffccbbbfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbffffffffffccbbbbbbbbfffffccbbbfffffccbbbfffffccbbbfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbffffffffffccbbbbbbbbfffffccbbbfffffccbbbfffffccbbbfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbffffffffffccbbbbbbbbfffffccbbbfffffccbbbfffffccbbbfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbffffffffffccbbbbbbbbfffffccbbbfffffccbbbfffffccbbbfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbfffffccbbbbbbbbbbbbbfffffccbbbfffffccbbbfffffccbbbfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbfffffccbbbbbbbbbbbbbfffffccbbbfffffccbbbfffffccbbbfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbfffffccbbbbbbbbbbbbbfffffccbbbfffffccbbbfffffccbbbfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbfffffccbbbbbbbbbbbbbfffffccbbbfffffccbbbfffffccbbbfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbfffffccbbbbbbbbbbbbbfffffccbbbfffffccbbbfffffccbbbfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbfffffffffffffffccbbbbbbbbfffffccbbbbbbbbbbbbbfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbfffffffffffffffccbbbbbbbbfffffccbbbbbbbbbbbbbfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbfffffffffffffffccbbbbbbbbfffffccbbbbbbbbbbbbbfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbfffffffffffffffccbbbbbbbbfffffccbbbbbbbbbbbbbfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbfffffffffffffffccbbbbbbbbfffffccbbbbbbbbbbbbbfffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    music.play(music.createSong(hex`00b4000408040500001c00010a006400f401640000040000000000000000000000000005000004180000000400012408000c00012948004c0001204c005000011403001c0001dc00690000045e0100040000000000000000000005640001040003060070007400010f05001c000f0a006400f4010a00000400000000000000000000000000000000023c0018001c00012420002400012528002c00011138003c00012240004400012748005000012058005c0001205c006000011468006c00011d70007400012206001c00010a006400f401640000040000000000000000000000000000000002120000000400012408000c00012928002c00012207001c00020a006400f4016400000400000000000000000000000000000000030c0058005c0001205c0060000114`), music.PlaybackMode.UntilDone)
}
function start () {
    SpeedDirection_Types = [
    -75,
    75,
    100,
    -100,
    50,
    -50
    ]
    Title_Screen_Active = true
    scene.setBackgroundImage(img`
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444cccc4444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444cccc44444444444cc4444ccccccc44444444444444444444444444444444444444444444444
        4444cc44444444444444444444444444444444444444444444444444444444444444444444444444444444444ccccccccccccccccc444444444444444444444444444444444444444444444444444444
        444444ccc4444444444444444444444444444444444fffffffffffff4444444444444444444444444444444cccccccccccccccccc4444444444444444444444444444444444444444444444444444444
        444444ccccccccccccccc444444444fffffffffffff444444444444444444444444444444444444444444444cccc44444cc444444ccccc444444444444444444fff44444444444444444444444444444
        44444cccccccccc44444444444444444444fffffffffff444444444444444444444444444444444444444ccc444444ccc444444444444444444444444ffffff4444ffffff44444444444444444444444
        44444ccccccc44cccccc44444444444444444fffffffffffffffffffff4444444444444444444444444444444444cc444444444444444444444444444444444fffffffffffffffff4444444444444444
        44ccc444444444444444444444fffffffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ffffff44ffffffffffffff44444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ffffffffffffffffffffffff444444444444
        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ffffffff44444ffffff444444
        44444444444444444444444444444444444444444444444444444cccc4444444444444444444444444444444444444444444444444444444444444444444444ffffffff4444444444444444444444444
        4444444444444444444444444444444444444444444444ccccccc44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444ccccccccccc4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444ff44444444444444444444444444ccccccccccccccc444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444fff4444444444444444444444444444444cccccc44444444444444444444444444444ffff4444444ffffffffffffff4444444444444444444444444444444444444444444444444444444444
        4444444ffff444444444444444444444444444cccc44444cccc444444444444444444444444444444ffffffff4444444444444fffffffffffff444444444444444444444444444444444444444444444
        4444444ffff4444444444444444444444444cccc444444444cccc444444444444444444444fffffffffffffffffffffffffffff444444444444444444444444444444444444444444444444444444444
        4444444ffff4444444444444444444444444444444444444444c4444444444444444444444444444444eeeeeeeee4fffffffffffffffffffff4444444444444444444444444444444444444444444444
        e444444fffff4444444444444444444444444444444444444444444444444444444444444444444ffffffffffffffeff444444444fffff44444444444444444444444444444444444444444444444444
        e444444ffcff444444444444444444444444444444444444444444444444444444444444fffffff44eeeeeeeeeeeffee4444444444444444444444444444444444444444444444444444444444444444
        ee44444fccff44444444444444444444444444444444444444444444444444444444444444444444eeeeeeeeefffeeeee444444444444444444444444444444444444444444444444444444444444444
        ee44444fcccff44444444444444444444444444444444444444444444444444444444444444444eeeeeeeeeffeeeeeeeee444444444444444444444444444444444444444444444444444444cccc4444
        eee444ffcccff444444444444444444eeee444444444444444444444444444444444444444444eeeeeeeeffeeeeeeeeeeeee4444444444444444444444444444444cccc44444444444cccccc44444444
        eee444ffcccff444444444444444eeeeeeee4444444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444444ccc444ccccccccccc44444444444444
        eeee44ffcccff444444444444444eeeeeeeeee444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeee444444444444444444444444444444ccccccceeccccccc444444444444
        eeee44ffcccfff4444444444444eeeeeeeeeeeeeeee44444444e44444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44444444444444444444444444cccceeeeeecccccce44cccccc444444
        eeeee4ffcccfff44444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeee444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee444444444444444444444444444eeeeeeeeeeeeeecccccc444cccc44
        eeeee4ffccccff4444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeccc444444
        eeeeeeffccccff4444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeffcccccf44444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeefccccccf4444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeefccccccf4444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeffcccccf44eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeefffffccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeefffffccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeffffffcffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeffffffcfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeffffffccfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeffffffccfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeefffffffcccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffcfcfefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffcccfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeefffffffffcccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeefffffffffffccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffcfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeefffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeefffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeefffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffccccffeeeeeeeeeeeeeeefcffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeefffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffcffffffffffffeeeeeeeeefcffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffcccccfffffffffeeeeeeffcffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffcffffffeeeffcfcffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffcfffffffffccfcfcfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffcffffffccfcffcffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcffffffffffffcffffccfffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcfcfffffffffffcffccfffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcfcffffffffffffccffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffcfcfffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffcfcfffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffcfcffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffcfffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffeeeeeee
        eeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffeeeee
        eeeeefffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffeeee
        eeeeeffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffeee
        eeeeeffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffee
        eeeeefffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe
        eeeeefffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        eeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        eeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        eeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        eeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        eeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        eeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        efffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    Title_But_I_Thought_it_Would_be_Cooler_to_let_it_Move_Around = sprites.create(img`
        ..........................................................
        .11111111111111111........................................
        1fffffffffffffffcc1.......................................
        1fffffffffffffffcc1.......................................
        1fffffffffffffffcc1.......................................
        1fffffffffffffffcc1.......................................
        1fffffffffffffffcc1...........................1111111.....
        1fffffcc1111111111...........................1fffffcc1....
        1fffffcc1....................................1fffffcc1....
        1fffffcc1....................................1fffffcc1....
        1fffffcc1....................................1fffffcc1....
        1fffffcc11111........1111111...1111111...11111fffffcc1111.
        1ffffffffffcc1......1fffffcc1.1fffffcc1.1fffffcc...fffffc1
        1ffffffffffcc1......1fffffcc1.1fffffcc1.1fffffcc...fffffc1
        1ffffffffffcc1......1fffffcc1.1fffffcc1.1fffffcc...fffffc1
        1ffffffffffcc1......1fffffcc1.1fffffcc1.1fffffcc...fffffc1
        1ffffffffffcc1......1fffffcc1.1fffffcc1.1fffffcc...fffffc1
        1fffffcc11111.......1fffffcc1.1fffffcc1.1fffffcc...fffffc1
        1fffffcc1...........1fffffcc1.1fffffcc1.1fffffcc...fffffc1
        1fffffcc1...........1fffffcc1.1fffffcc1.1fffffcc...fffffc1
        1fffffcc1...........1fffffcc1.1fffffcc1.1fffffcc...fffffc1
        1fffffcc1111111111..1fffffcc111fffffcc1.1fffffcc...fffffc1
        1fffffffffffffffcc1.111111fffffcc11111...11111fffffcc1111.
        1fffffffffffffffcc1......1fffffcc1...........1fffffcc1....
        1fffffffffffffffcc1......1fffffcc1...........1fffffcc1....
        1fffffffffffffffcc1......1fffffcc1...........1fffffcc1....
        1fffffffffffffffcc1......1fffffcc1...........1fffffcc1....
        .11111111111111111........1111111.............1111111.....
        `, SpriteKind.Word)
    Title_But_I_Thought_it_Would_be_Cooler_to_let_it_Move_Around.setPosition(35, 25)
    Title_But_I_Thought_it_Would_be_Cooler_to_let_it_Move_Around.setStayInScreen(true)
    Title_But_I_Thought_it_Would_be_Cooler_to_let_it_Move_Around.z = 100
    Title_But_I_Thought_it_Would_be_Cooler_to_let_it_Move_Around.setFlag(SpriteFlag.BounceOnWall, true)
    Title_But_I_Thought_it_Would_be_Cooler_to_let_it_Move_Around.setVelocity(SpeedDirection_Types._pickRandom(), SpeedDirection_Types._pickRandom())
    MAINMENU = miniMenu.createMenu(
    miniMenu.createMenuItem("Evolve", img`
        7 . . . 6 
        6 4 4 5 7 
        7 . . . 6 
        . 6 4 7 . 
        . 7 . 6 . 
        . . 6 . . 
        . 7 . 6 . 
        . 6 5 7 . 
        7 . . . 6 
        6 4 5 4 7 
        7 . . . 6 
        `),
    miniMenu.createMenuItem("Adapt", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f . . . f . . . . . . . . 
        . . f f f f f f f f f f . . . . 
        . f d 1 1 1 1 1 1 1 1 d f . . . 
        . f d 1 1 1 1 1 1 1 1 1 d f . . 
        f d 1 f 1 1 1 f 1 1 1 1 1 d f . 
        f d 1 1 1 1 1 1 1 1 1 1 1 1 d f 
        f f f f f f f f f f f f f f f f 
        f . f . f . f . f . f . f . f . 
        `),
    miniMenu.createMenuItem("Die", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f . . . . 
        . f 1 1 d 1 1 1 1 1 1 1 f . . . 
        . f 1 1 d d d 1 1 1 1 1 d f . . 
        f 1 1 1 d 1 1 d 1 1 d d 1 1 f . 
        f 1 d d 1 1 1 d d d 1 1 1 1 1 f 
        f f f f f f f f f f f f f f f f 
        `)
    )
    MAINMENU.setButtonEventsEnabled(true)
    MAINMENU.setFrame(img`
        ..cccccccccccccccccccc..
        .c67777777777777777776c.
        c676cccccccccccccccc676c
        c76cccccccccccccccccc67c
        c7cd1111111111111111dc7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7c111111111111111111c7c
        c7cd1111111111111111dc7c
        c67cccccccccccccccccc76c
        cc67777777777777777776cc
        .cccccccccccccccccccccc.
        ..cccccccccccccccccccc..
        `)
    MAINMENU.setFlag(SpriteFlag.RelativeToCamera, true)
    MAINMENU.setPosition(45, 25)
    MAINMENU.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selection == "Evolve") {
            gamestart()
        } else if (selection == "Adapt") {
            disablemenu()
            store()
        } else if (selection == "Die") {
            game.showLongText("Your Species Has Not Fought off The Apex Creatures!", DialogLayout.Bottom)
            game.setGameOverMessage(false, "Died Out!")
            game.gameOver(false)
        }
    })
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.instantdeath, function (sprite, otherSprite) {
    if (lifestage == 0) {
        sprites.destroy(sprite)
        sprite.setKind(SpriteKind.dead)
        controller.moveSprite(sprite, 0, 0)
        Gooey = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f . . . . 
            . f 1 1 d 1 1 1 1 1 1 1 f . . . 
            . f 1 1 d d d 1 1 1 1 1 d f . . 
            f 1 1 1 d 1 1 d 1 1 d d 1 1 f . 
            f 1 d d 1 1 1 d d d 1 1 1 1 1 f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.dead)
    } else if (lifestage == 1) {
        sprites.destroy(sprite)
        sprite.setKind(SpriteKind.dead)
        controller.moveSprite(sprite, 0, 0)
        Gooey = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f . . . . 
            . f 1 1 d 1 1 1 1 1 1 1 f . . . 
            . f 1 1 d d d 1 1 1 1 1 d f . . 
            f 1 1 1 d 1 1 d 1 1 d d 1 1 f . 
            f 1 d d 1 1 1 d d d 1 1 1 1 1 f 
            f f f f f f f f f f f f f f f f 
            1 . 1 . d . 1 . d . 1 . 1 . 1 . 
            `, SpriteKind.dead)
    }
    die()
})
function disablemenu () {
    sprites.destroy(Title_But_I_Thought_it_Would_be_Cooler_to_let_it_Move_Around)
    MAINMENU.close()
    MAINMENU.setButtonEventsEnabled(false)
}
blockMenu.onMenuOptionSelected(function (option, index) {
    if (option == "Jump" + " Cost: " + "1" && dna_amount >= 1) {
        jump = true
        dna_amount += -1
    } else if (option == "Double Jump" + " Cost: " + "3" && dna_amount >= 3) {
        double_jump = true
        dna_amount += -3
    } else if (option == "Cough Ball" + " Cost: " + "4" && dna_amount >= 4) {
        can_spit = true
        dna_amount += -4
    } else if (option == "Legs" + " Cost: " + "6" && dna_amount >= 6) {
        legs = true
        lifestage = 1
        dna_amount += -6
    } else if (option == "Antennas" + " Cost:" + "6" && dna_amount >= 6) {
        cosmetic1 = true
        dna_amount += -6
    } else if (option == "Color Change" + " Cost:" + "7" && dna_amount >= 7) {
        cosmetic2 = true
        dna_amount += -7
    } else if (option == "Ultimate Evolution" + " Cost:" + "9" && dna_amount >= 9) {
        ult_evo = true
        dna_amount += -9
    } else if (option == "Leave And Evolve") {
        store_active = false
        blockMenu.closeMenu()
        blockMenu.setControlsEnabled(false)
        sprites.destroyAllSpritesOfKind(SpriteKind.Text)
        sprites.destroy(cool_dna_animation)
        start()
    }
    MAINMENU.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selection == "Evolve") {
            gamestart()
        } else if (selection == "Adapt") {
            disablemenu()
            store()
        } else if (selection == "Die") {
            game.showLongText("Your Species Has Not Fought off The Apex Creatures!", DialogLayout.Bottom)
            game.setGameOverMessage(false, "Died Out!")
            game.gameOver(false)
        }
    })
})
sprites.onOverlap(SpriteKind.acid, SpriteKind.spore, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
let spore_pellet: Sprite = null
let big_egg: Sprite = null
let spore2: Sprite = null
let evil_plant: Sprite = null
let dnas: Sprite = null
let Spiky2: Sprite = null
let Spiky1: Sprite = null
let very_noxious_gas_pellet: Sprite = null
let SpeedDirection_Types: number[] = []
let Title_But_I_Thought_it_Would_be_Cooler_to_let_it_Move_Around: Sprite = null
let Title_Screen_Active = false
let life_text: TextSprite = null
let MAINMENU: miniMenu.MenuSprite = null
let TextDeath: TextSprite = null
let acidspit2: Sprite = null
let bossy: Sprite = null
let boss_hp: StatusBarSprite = null
let visual_amount_of_dna: TextSprite = null
let bluebird77: TextSprite = null
let cool_dna_animation: Sprite = null
let Gooey: Sprite = null
let life = 0
let lifestage = 0
let boss_active = false
let store_active = false
let ult_evo = false
let cosmetic2 = false
let cosmetic1 = false
let legs = false
let can_spit = false
let double_jump = false
let jump = false
let dna_amount = 0
start()
dna_amount = 0
jump = false
double_jump = false
can_spit = false
legs = false
cosmetic1 = false
cosmetic2 = false
ult_evo = false
store_active = false
boss_active = false
lifestage = 0
game.onUpdateInterval(250, function () {
    for (let value of sprites.allOfKind(SpriteKind.shooter_plant)) {
        very_noxious_gas_pellet = sprites.createProjectileFromSprite(img`
            . 8 6 . 
            8 7 7 6 
            8 7 7 6 
            . 6 6 . 
            `, value, randint(-80, 80), randint(-80, 80))
        very_noxious_gas_pellet.setFlag(SpriteFlag.GhostThroughWalls, true)
    }
})
forever(function () {
    if (store_active == true) {
        visual_amount_of_dna.setText("x" + (dna_amount + 0))
    }
})
forever(function () {
    for (let value2 of tiles.getTilesByType(assets.tile`myTile3`)) {
        tiles.setTileAt(value2, assets.tile`transparency16`)
        Spiky1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . f 
            . . f . . . . . . . . . . . f e 
            . f e f . . . . . . . . . f e e 
            . f e f . . . . . . . . . f e e 
            f e e 4 f . . . . . . . . f 4 e 
            f e e 4 f . . . . . . . . f 4 e 
            f e e e f . . . . . . . f e e e 
            e e e e f . . . . . . . f e e e 
            e e e 4 e f . . . f . . f 4 e e 
            e e e 4 e f . . f e f f e 4 e e 
            e e e 4 e f . f e 4 e f e e e e 
            e e e e e e f f e 4 e f e e e e 
            e e e e e 4 f e 4 e e f 4 e e e 
            e e e e e 4 f e 4 e e f 4 e e e 
            e e e e e 4 f e e e e f 4 e e e 
            `, SpriteKind.instantdeath)
        tiles.placeOnTile(Spiky1, value2)
    }
    for (let value3 of tiles.getTilesByType(assets.tile`myTile5`)) {
        tiles.setTileAt(value3, assets.tile`transparency16`)
        Spiky2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            f . . . . . . . . . . . . . . . 
            e f . . . . . . . . . . . f . . 
            e e f . . . . . . . . . f e f . 
            e e f . . . . . . . . . f e f . 
            e 4 f . . . . . . . . f 4 e e f 
            e 4 f . . . . . . . . f 4 e e f 
            e e e f . . . . . . . f e e e f 
            e e e f . . . . . . . f e e e e 
            e e 4 f . . f . . . f e 4 e e e 
            e e 4 e f f e f . . f e 4 e e e 
            e e e e f e 4 e f . f e 4 e e e 
            e e e e f e 4 e f f e e e e e e 
            e e e 4 f e e 4 e f 4 e e e e e 
            e e e 4 f e e 4 e f 4 e e e e e 
            e e e 4 f e e e e f 4 e e e e e 
            `, SpriteKind.instantdeath)
        tiles.placeOnTile(Spiky2, value3)
    }
    for (let value4 of tiles.getTilesByType(assets.tile`myTile8`)) {
        tiles.setTileAt(value4, assets.tile`transparency16`)
        dnas = sprites.create(img`
            7 . . . 6 
            6 4 4 5 7 
            7 . . . 6 
            . 6 4 7 . 
            . 7 . 6 . 
            . . 6 . . 
            . 7 . 6 . 
            . 6 5 7 . 
            7 . . . 6 
            6 4 5 4 7 
            7 . . . 6 
            `, SpriteKind.dna)
        animation.runImageAnimation(
        dnas,
        [img`
            . . . . . . . 
            . 7 . . . 6 . 
            . 6 4 4 5 7 . 
            . 7 . . . 6 . 
            . . 6 4 7 . . 
            . . 7 . 6 . . 
            . . . 6 . . . 
            . . 7 . 6 . . 
            . . 6 5 7 . . 
            . 7 . . . 6 . 
            . 6 4 5 4 7 . 
            . 7 . . . 6 . 
            . . . . . . . 
            `,img`
            . . . . . . . 
            . 7 . . 6 . . 
            . 6 4 4 7 . . 
            . 7 . . 6 . . 
            . . 6 7 . . . 
            . . 7 6 . . . 
            . . . 6 . . . 
            . . 7 6 . . . 
            . . 6 7 . . . 
            . 7 . . 6 . . 
            . 6 4 4 7 . . 
            . 7 . . 6 . . 
            . . . . . . . 
            `,img`
            . . . . . . . 
            . . 7 6 . . . 
            . . 6 7 . . . 
            . . 7 6 . . . 
            . . 6 7 . . . 
            . . 7 6 . . . 
            . . . 6 . . . 
            . . 7 6 . . . 
            . . 6 7 . . . 
            . . 7 6 . . . 
            . . 6 7 . . . 
            . . 7 6 . . . 
            . . . . . . . 
            `,img`
            . . . . . . . 
            . . . 6 . . . 
            . . . 7 . . . 
            . . . 6 . . . 
            . . . 7 . . . 
            . . . 6 . . . 
            . . . 6 . . . 
            . . . 6 . . . 
            . . . 7 . . . 
            . . . 6 . . . 
            . . . 7 . . . 
            . . . 6 . . . 
            . . . . . . . 
            `,img`
            . . . . . . . 
            . . . 6 7 . . 
            . . . 7 6 . . 
            . . . 6 7 . . 
            . . . 7 6 . . 
            . . . 6 7 . . 
            . . . 6 . . . 
            . . . 6 7 . . 
            . . . 7 6 . . 
            . . . 6 7 . . 
            . . . 7 6 . . 
            . . . 6 7 . . 
            . . . . . . . 
            `,img`
            . . . . . . . 
            . . 6 . . 7 . 
            . . 7 4 4 6 . 
            . . 6 . . 7 . 
            . . . 7 6 . . 
            . . . 6 7 . . 
            . . . 6 . . . 
            . . . 6 7 . . 
            . . . 7 6 . . 
            . . 6 . . 7 . 
            . . 7 4 4 6 . 
            . . 6 . . 7 . 
            . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(dnas, value4)
    }
    for (let value5 of tiles.getTilesByType(assets.tile`myTile10`)) {
        tiles.setTileAt(value5, assets.tile`transparency16`)
        evil_plant = sprites.create(img`
            . . . . . . . . f f f . . . . 
            . . . . . f f f 2 5 4 f . . . 
            . . . . f 7 2 6 f f f 4 f . . 
            . . . f 2 f f f 2 2 6 f 7 f . 
            . . . f 7 f 2 2 2 2 2 f 2 f . 
            . . f 5 f 2 2 2 2 2 2 f 5 f . 
            . f 4 f 5 2 2 2 2 2 7 f 2 f . 
            . f 4 f 5 5 2 2 2 2 f 4 f . . 
            . . f 2 f 2 2 2 2 f 5 f . . . 
            . . . f 6 f 6 2 2 f 2 f . . . 
            . . . f 6 f 2 2 2 f 7 f . . . 
            . . f 2 f 5 2 2 2 7 f 6 f . . 
            . . f 4 f 2 2 2 2 7 f 7 f . . 
            . f 5 f 4 2 2 2 2 2 2 f 7 f . 
            . f 2 f 4 6 2 2 2 2 6 f 2 f . 
            `, SpriteKind.shooter_plant)
        animation.runImageAnimation(
        evil_plant,
        [img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . f f f . . . . . 
            . . . . . . f f f 2 5 4 f . . . . 
            . . . . . f 7 2 6 f f f 4 f . . . 
            . . . . f 2 f f f 2 2 6 f 7 f . . 
            . . . . f 7 f 2 2 2 2 2 f 2 f . . 
            . . . f 5 f 2 2 2 2 2 2 f 5 f . . 
            . . f 4 f 5 2 2 2 2 2 7 f 2 f . . 
            . . f 4 f 5 5 2 2 2 2 f 4 f . . . 
            . . . f 2 f 2 2 2 2 f 5 f . . . . 
            . . . . f 6 f 6 2 2 f 2 f . . . . 
            . . . . f 6 f 2 2 2 f 7 f . . . . 
            . . . f 2 f 5 2 2 2 7 f 6 f . . . 
            . . . f 4 f 2 2 2 2 7 f 7 f . . . 
            . . f 5 f 4 2 2 2 2 2 2 f 7 f . . 
            . . f 2 f 4 6 2 2 2 2 6 f 2 f . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . f f f . . . . . . 
            . . . . . f f f 2 5 4 f . . . . . 
            . . . . f 7 2 6 f f f 4 f . . . . 
            . . . f 2 f f f 2 2 6 f 7 f . . . 
            . . . f 7 f 2 2 2 2 2 f 2 f . . . 
            . . f 5 f 2 2 2 2 2 2 f 5 f . . . 
            . f 4 f 5 2 2 2 2 2 7 f 2 f . . . 
            . f 4 f 5 5 2 2 2 2 f 4 f . . . . 
            . . f 2 f 2 2 2 2 f 5 f . . . . . 
            . . . f 6 f 6 2 2 f 2 f . . . . . 
            . . . f 6 f 2 2 2 f 7 f 6 f . . . 
            . . . f 4 f 2 2 2 2 7 f 7 f . . . 
            . . f 5 f 4 2 2 2 2 2 2 f 7 f . . 
            . . f 2 f 4 6 2 2 2 2 6 f 2 f . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . f f f . . . . . 
            . . . . . . f f f 2 5 4 f . . . . 
            . . . . . f 7 2 6 f f f 4 f . . . 
            . . . . f 2 f f f 2 2 6 f 7 f . . 
            . . . . f 7 f 2 2 2 2 2 f 2 f . . 
            . . . f 5 f 2 2 2 2 2 2 f 5 f . . 
            . . f 4 f 5 2 2 2 2 2 7 f 2 f . . 
            . . f 4 f 5 5 2 2 2 2 f 4 f . . . 
            . . . f 2 f 2 2 2 2 f 5 f . . . . 
            . . . . f 6 f 6 2 2 f 2 f . . . . 
            . . . . f 6 f 2 2 2 f 7 f . . . . 
            . . . f 2 f 5 2 2 2 7 f 6 f . . . 
            . . . f 4 f 2 2 2 2 7 f 7 f . . . 
            . . f 5 f 4 2 2 2 2 2 2 f 7 f . . 
            . . f 2 f 4 6 2 2 2 2 6 f 2 f . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f f . . . . 
            . . . . . . . f f f 2 5 4 f . . . 
            . . . . . . f 7 2 6 f f f 4 f . . 
            . . . . . f 2 f f f 2 2 6 f 7 f . 
            . . . . . f 7 f 2 2 2 2 2 f 2 f . 
            . . . . f 5 f 2 2 2 2 2 2 f 5 f . 
            . . . f 4 f 5 2 2 2 2 2 7 f 2 f . 
            . . . f 4 f 5 5 2 2 2 2 f 4 f . . 
            . . . . f 2 f 2 2 2 2 f 5 f . . . 
            . . . . f f 6 f 6 2 2 f 2 f . . . 
            . . . f 2 f 5 2 2 2 7 f 6 f . . . 
            . . . f 4 f 2 2 2 2 7 f 7 f . . . 
            . . f 5 f 4 2 2 2 2 2 2 f 7 f . . 
            . . f 2 f 4 6 2 2 2 2 6 f 2 f . . 
            . . . . . . . . . . . . . . . . . 
            `],
        150,
        true
        )
        tiles.placeOnTile(evil_plant, value5)
    }
    for (let value6 of tiles.getTilesByType(assets.tile`myTile12`)) {
        tiles.setTileAt(value6, assets.tile`transparency16`)
        spore2 = sprites.create(img`
            . . . . . . . . f f f . . . . 
            . . . . . f f f 2 5 4 f . . . 
            . . . . f 7 2 6 f f f 4 f . . 
            . . . f 2 f f f 5 5 6 f 7 f . 
            . . . f 7 f 5 5 5 5 5 f 2 f . 
            . . f 5 f 5 5 5 5 5 5 f 5 f . 
            . f 4 f 5 5 5 5 5 5 7 f 2 f . 
            . f 4 f 5 5 5 5 5 5 f 4 f . . 
            . . f 2 f 5 5 5 5 f 5 f . . . 
            . . . f 6 f 6 5 5 f 2 f . . . 
            . . . f 6 f 5 5 5 f 7 f . . . 
            . . f 2 f 5 5 5 5 7 f 6 f . . 
            . . f 4 f 5 5 5 5 7 f 7 f . . 
            . f 5 f 4 5 5 5 5 5 5 f 7 f . 
            . f 2 f 4 6 5 5 5 5 6 f 2 f . 
            `, SpriteKind.spore)
        animation.runImageAnimation(
        spore2,
        [img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . f f f . . . . . 
            . . . . . . f f f 2 5 4 f . . . . 
            . . . . . f 7 2 6 f f f 4 f . . . 
            . . . . f 2 f f f 5 5 6 f 7 f . . 
            . . . . f 7 f 5 5 5 5 5 f 2 f . . 
            . . . f 5 f 5 5 5 5 5 5 f 5 f . . 
            . . f 4 f 5 5 5 5 5 5 7 f 2 f . . 
            . . f 4 f 5 5 5 5 5 5 f 4 f . . . 
            . . . f 2 f 5 5 5 5 f 5 f . . . . 
            . . . . f 6 f 6 5 5 f 2 f . . . . 
            . . . . f 6 f 5 5 5 f 7 f . . . . 
            . . . f 2 f 5 5 5 5 7 f 6 f . . . 
            . . . f 4 f 5 5 5 5 7 f 7 f . . . 
            . . f 5 f 4 5 5 5 5 5 5 f 7 f . . 
            . . f 2 f 4 6 5 5 5 5 6 f 2 f . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . f f f . . . . . 
            . . . . . . f f f 2 5 4 f . . . . 
            . . . . . f 7 2 6 f f f 4 f . . . 
            . . . . f 2 f f f 5 5 6 f 7 f . . 
            . . . . f 7 f 5 5 5 5 5 f 2 f . . 
            . . . f 5 f 5 5 5 5 5 5 f 5 f . . 
            . . f 4 f 5 5 5 5 5 5 7 f 2 f . . 
            . . f 4 f 5 5 5 5 5 5 f 4 f . . . 
            . . . f 2 f 5 5 5 5 f 5 f . . . . 
            . . . . f 6 f 6 5 5 f 2 f . . . . 
            . . . . f 5 f 5 5 5 f 2 f . . . . 
            . . . . f 6 f 5 5 5 f 7 f . . . . 
            . . . f 2 f 5 5 5 5 7 f 6 f . . . 
            . . . f 4 f 5 5 5 5 7 f 7 f . . . 
            . . f 5 f 4 5 5 5 5 5 5 f 7 f . . 
            . . f 2 f 4 6 5 5 5 5 6 f 2 f . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . f f f . . . . . 
            . . . . . . f f f 2 5 4 f . . . . 
            . . . . . f 7 2 6 f f f 4 f . . . 
            . . . . f 2 f f f 5 5 6 f 7 f . . 
            . . . . f 7 f 5 5 5 5 5 f 2 f . . 
            . . . f 5 f 5 5 5 5 5 5 f 5 f . . 
            . . f 4 f 5 5 5 5 5 5 7 f 2 f . . 
            . . f 4 f 5 5 5 5 5 5 f 4 f . . . 
            . . . f 2 f 5 5 5 5 f 5 f . . . . 
            . . . . f 6 f 6 5 5 f 2 f . . . . 
            . . . . f 5 f 5 5 5 f 2 f . . . . 
            . . . . f 6 f 5 5 5 f 7 f . . . . 
            . . . f 2 f 5 5 5 5 7 f 6 f . . . 
            . . . f 4 f 5 5 5 5 7 f 7 f . . . 
            . . f 5 f 4 5 5 5 5 5 5 f 7 f . . 
            . . f 2 f 4 6 5 5 5 5 6 f 2 f . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . f f f . . . . . 
            . . . . . . f f f 2 5 4 f . . . . 
            . . . . . f 7 2 6 f f f 4 f . . . 
            . . . . f 2 f f f 5 5 6 f 7 f . . 
            . . . . f 7 f 5 5 5 5 5 f 2 f . . 
            . . . f 5 f 5 5 5 5 5 5 f 5 f . . 
            . . f 4 f 5 5 5 5 5 5 7 f 2 f . . 
            . . f 4 f 5 5 5 5 5 5 f 4 f . . . 
            . . . f 2 f 5 5 5 5 f 5 f . . . . 
            . . . . f 6 f 6 5 5 f 2 f . . . . 
            . . . . f 6 f 5 5 5 f 7 f . . . . 
            . . . f 2 f 5 5 5 5 7 f 6 f . . . 
            . . . f 4 f 5 5 5 5 7 f 7 f . . . 
            . . f 5 f 4 5 5 5 5 5 5 f 7 f . . 
            . . f 2 f 4 6 5 5 5 5 6 f 2 f . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . f f f . . . . . 
            . . . . . . f f f 2 5 4 f . . . . 
            . . . . . f 7 2 6 f f f 4 f . . . 
            . . . . f 2 f f f 5 5 6 f 7 f . . 
            . . . . f 7 f 5 5 5 5 5 f 2 f . . 
            . . . f 5 f 5 5 5 5 5 5 f 5 f . . 
            . . f 4 f 5 5 5 5 5 5 7 f 2 f . . 
            . . f 4 f 5 5 5 5 5 5 f 4 f . . . 
            . . . f 2 f 5 5 5 5 f 5 f . . . . 
            . . . . f 6 f 5 5 5 f 7 f . . . . 
            . . . f 2 f 5 5 5 5 7 f 6 f . . . 
            . . . f 4 f 5 5 5 5 7 f 7 f . . . 
            . . f 5 f 4 5 5 5 5 5 5 f 7 f . . 
            . . f 2 f 4 6 5 5 5 5 6 f 2 f . . 
            . . . . . . . . . . . . . . . . . 
            `],
        150,
        true
        )
        tiles.placeOnTile(spore2, value6)
    }
    for (let value7 of tiles.getTilesByType(assets.tile`myTile13`)) {
        tiles.setTileAt(value7, assets.tile`transparency16`)
        bossy = sprites.create(img`
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . 2 2 f f f f 2 2 . . . . 
            . . . f 2 f f f f 2 2 2 f . . . 
            . . f 2 f f f f f 2 2 2 2 f . . 
            . f f 2 2 2 f f f f 2 2 f f f . 
            2 f f 2 2 2 f f f f f f f 2 f f 
            f f f f 2 f f f f f 2 2 2 2 2 f 
            f f f f f f 2 2 f f 2 2 f f 2 f 
            f f 2 2 f f f 2 2 f f f f f 2 f 
            . f f 2 2 f f f f f f f f f f . 
            . . 2 2 2 f f 2 f f f f f f . . 
            . . . . 2 f f f f f 2 2 . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f f f f 2 f . . . . . 
            . . . . . 2 f f 2 2 f . . . . . 
            . . . . . 2 f f f 2 f . . . . . 
            `, SpriteKind.boss)
        animation.runImageAnimation(
        bossy,
        [img`
            ....................
            ....................
            ........2222........
            ......22ffff22......
            .....f2ffff222f.....
            ....f2fffff2222f....
            ...ff222ffff22fff...
            ..2ff222fffffff2ff..
            ..ffff2fffff22222f..
            ..ffffff22ff22ff2f..
            ..ff22fff22fffff2f..
            ...ff22ffffffffff...
            ....222ff2ffffff....
            ......2fffff22......
            ........ffff........
            .......ffff2f.......
            .......2ff22f.......
            .......2fff2f.......
            ....................
            ....................
            `,img`
            ....................
            ....................
            .........2222.......
            .......22ffff22.....
            ......f2ffff222f....
            .....f2fffff2222f...
            ....ff222ffff22fff..
            ...2ff222fffffff2ff.
            ...ffff2fffff22222f.
            ...ffffff22ff22ff2f.
            ...ff22fff22fffff2f.
            ....ff22ffffffffff..
            .....222ff2ffffff...
            .......2fffff22.....
            .......ffff.........
            ......ffff2f........
            ......2ff22f........
            ......2fff2f........
            ....................
            ....................
            `,img`
            ....................
            ....................
            ........2222........
            ......22ffff22......
            .....f2ffff222f.....
            ....f2fffff2222f....
            ...ff222ffff22fff...
            ..2ff222fffffff2ff..
            ..ffff2fffff22222f..
            ..ffffff22ff22ff2f..
            ..ff22fff22fffff2f..
            ...ff22ffffffffff...
            ....222ff2ffffff....
            ......2fffff22......
            ........ffff........
            .......ffff2f.......
            .......2ff22f.......
            .......2fff2f.......
            ....................
            ....................
            `,img`
            ....................
            ....................
            .......2222.........
            .....22ffff22.......
            ....f2ffff222f......
            ...f2fffff2222f.....
            ..ff222ffff22fff....
            .2ff222fffffff2ff...
            .ffff2fffff22222f...
            .ffffff22ff22ff2f...
            .ff22fff22fffff2f...
            ..ff22ffffffffff....
            ...222ff2ffffff.....
            .....2fffff22.......
            .........ffff.......
            ........ffff2f......
            ........2ff22f......
            ........2fff2f......
            ....................
            ....................
            `],
        100,
        true
        )
        tiles.placeOnTile(bossy, value7)
    }
    for (let value8 of tiles.getTilesByType(assets.tile`myTile15`)) {
        tiles.setTileAt(value8, assets.tile`transparency16`)
        big_egg = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . 2 2 f f f f 2 2 . . . . 
            . . . . 2 f f f 2 2 2 2 . . . . 
            . . . 2 f f f f 2 2 2 f 2 . . . 
            . . . 2 f f 2 f f 2 2 f 2 . . . 
            . . 2 f f f f f f f f f f 2 . . 
            . . 2 f 2 2 f f f f f f f 2 . . 
            . . 2 2 2 2 f f f f 2 2 f 2 . . 
            . . f 2 2 f f f f 2 2 2 f f . . 
            . . f f f f f f f 2 2 2 f f . . 
            . . f 2 f f 2 2 f 2 2 f 2 f . . 
            . . . f f f 2 2 f f f f f . . . 
            . . . . f 2 f f f f 2 f . . . . 
            . . . . . f f f f f f . . . . . 
            `, SpriteKind.asset)
        animation.runImageAnimation(
        big_egg,
        [img`
            ..................
            ..................
            .......2222.......
            .....22ffff22.....
            .....2fff2222.....
            ....2ffff222f2....
            ....2ff2ff22f2....
            ...2ffffffffff2...
            ...2f22fffffff2...
            ...2222ffff22f2...
            ...f22ffff222ff...
            ...fffffff222ff...
            ...f2ff22f22f2f...
            ....fff22fffff....
            .....f2ffff2f.....
            ......ffffff......
            ..................
            ..................
            `,img`
            ..................
            ..................
            ......2222........
            .....22ffff22.....
            .....2fff2222.....
            ....2ffff222f2....
            ....2ff2ff22f2....
            ...2ffffffffff2...
            ...2f22fffffff2...
            ...2222ffff22f2...
            ...f22ffff222ff...
            ...fffffff222ff...
            ...f2ff22f22f2f...
            ....fff22fffff....
            .....f2ffff2f.....
            ......ffffff......
            ..................
            ..................
            `,img`
            ..................
            ..................
            ......2222........
            ....22ffff22......
            .....2fff2222.....
            ....2ffff222f2....
            ....2ff2ff22f2....
            ...2ffffffffff2...
            ...2f22fffffff2...
            ...2222ffff22f2...
            ...f22ffff222ff...
            ...fffffff222ff...
            ...f2ff22f22f2f...
            ....fff22fffff....
            .....f2ffff2f.....
            ......ffffff......
            ..................
            ..................
            `,img`
            ..................
            ..................
            ......2222........
            ....22ffff22......
            ...2fff2222.......
            ...2ffff222f2.....
            ....2ff2ff22f2....
            ...2ffffffffff2...
            ...2f22fffffff2...
            ...2222ffff22f2...
            ...f22ffff222ff...
            ...fffffff222ff...
            ...f2ff22f22f2f...
            ....fff22fffff....
            .....f2ffff2f.....
            ......ffffff......
            ..................
            ..................
            `,img`
            ..................
            ..................
            ......2222........
            ....22ffff22......
            ...2fff2222.......
            ...2ffff222f2.....
            ...2ff2ff22f2.....
            ...2ffffffffff2...
            ...2f22fffffff2...
            ...2222ffff22f2...
            ...f22ffff222ff...
            ...fffffff222ff...
            ...f2ff22f22f2f...
            ....fff22fffff....
            .....f2ffff2f.....
            ......ffffff......
            ..................
            ..................
            `,img`
            ..................
            ..................
            ......2222........
            ....22ffff22......
            ...2fff2222.......
            ...2ffff222f2.....
            ...2ff2ff22f2.....
            ..2ffffffffff2....
            ...2f22fffffff2...
            ...2222ffff22f2...
            ...f22ffff222ff...
            ...fffffff222ff...
            ...f2ff22f22f2f...
            ....fff22fffff....
            .....f2ffff2f.....
            ......ffffff......
            ..................
            ..................
            `,img`
            ..................
            ..................
            ......2222........
            ....22ffff22......
            ...2fff2222.......
            ...2ffff222f2.....
            ...2ff2ff22f2.....
            ..2ffffffffff2....
            ..2f22fffffff2....
            ...2222ffff22f2...
            ...f22ffff222ff...
            ...fffffff222ff...
            ...f2ff22f22f2f...
            ....fff22fffff....
            .....f2ffff2f.....
            ......ffffff......
            ..................
            ..................
            `,img`
            ..................
            ..................
            ......2222........
            ....22ffff22......
            ...2fff2222.......
            ...2ffff222f2.....
            ...2ff2ff22f2.....
            ..2ffffffffff2....
            ..2f22fffffff2....
            ..2222ffff22f2....
            ...f22ffff222ff...
            ...fffffff222ff...
            ...f2ff22f22f2f...
            ....fff22fffff....
            .....f2ffff2f.....
            ......ffffff......
            ..................
            ..................
            `,img`
            ..................
            ..................
            .......2222.......
            ....22ffff22......
            ...2fff2222.......
            ...2ffff222f2.....
            ...2ff2ff22f2.....
            ..2ffffffffff2....
            ..2f22fffffff2....
            ..2222ffff22f2....
            ..f22ffff222ff....
            ...fffffff222ff...
            ...f2ff22f22f2f...
            ....fff22fffff....
            .....f2ffff2f.....
            ......ffffff......
            ..................
            ..................
            `,img`
            ..................
            ..................
            .......2222.......
            .....22ffff22.....
            ...2fff2222.......
            ...2ffff222f2.....
            ...2ff2ff22f2.....
            ..2ffffffffff2....
            ..2f22fffffff2....
            ..2222ffff22f2....
            ..f22ffff222ff....
            ..fffffff222ff....
            ...f2ff22f22f2f...
            ....fff22fffff....
            .....f2ffff2f.....
            ......ffffff......
            ..................
            ..................
            `,img`
            ..................
            ..................
            .......2222.......
            .....22ffff22.....
            .....2fff2222.....
            ...2ffff222f2.....
            ...2ff2ff22f2.....
            ..2ffffffffff2....
            ..2f22fffffff2....
            ..2222ffff22f2....
            ..f22ffff222ff....
            ..fffffff222ff....
            ..f2ff22f22f2f....
            ....fff22fffff....
            .....f2ffff2f.....
            ......ffffff......
            ..................
            ..................
            `,img`
            ..................
            ..................
            .......2222.......
            .....22ffff22.....
            .....2fff2222.....
            ....2ffff222f2....
            ...2ff2ff22f2.....
            ..2ffffffffff2....
            ..2f22fffffff2....
            ..2222ffff22f2....
            ..f22ffff222ff....
            ..fffffff222ff....
            ..f2ff22f22f2f....
            ...fff22fffff.....
            .....f2ffff2f.....
            ......ffffff......
            ..................
            ..................
            `,img`
            ..................
            ..................
            .......2222.......
            .....22ffff22.....
            .....2fff2222.....
            ....2ffff222f2....
            ....2ff2ff22f2....
            ..2ffffffffff2....
            ..2f22fffffff2....
            ..2222ffff22f2....
            ..f22ffff222ff....
            ..fffffff222ff....
            ..f2ff22f22f2f....
            ...fff22fffff.....
            ....f2ffff2f......
            ......ffffff......
            ..................
            ..................
            `,img`
            ..................
            ..................
            .......2222.......
            .....22ffff22.....
            .....2fff2222.....
            ....2ffff222f2....
            ....2ff2ff22f2....
            ...2ffffffffff2...
            ..2f22fffffff2....
            ..2222ffff22f2....
            ..f22ffff222ff....
            ..fffffff222ff....
            ..f2ff22f22f2f....
            ...fff22fffff.....
            ....f2ffff2f......
            .....ffffff.......
            ..................
            ..................
            `,img`
            ..................
            ..................
            .......2222.......
            .....22ffff22.....
            .....2fff2222.....
            ....2ffff222f2....
            ....2ff2ff22f2....
            ...2ffffffffff2...
            ...2f22fffffff2...
            ..2222ffff22f2....
            ..f22ffff222ff....
            ..fffffff222ff....
            ..f2ff22f22f2f....
            ...fff22fffff.....
            ....f2ffff2f......
            .....ffffff.......
            ..................
            ..................
            `,img`
            ..................
            ..................
            .......2222.......
            .....22ffff22.....
            .....2fff2222.....
            ....2ffff222f2....
            ....2ff2ff22f2....
            ...2ffffffffff2...
            ...2f22fffffff2...
            ...2222ffff22f2...
            ..f22ffff222ff....
            ..fffffff222ff....
            ..f2ff22f22f2f....
            ...fff22fffff.....
            ....f2ffff2f......
            .....ffffff.......
            ..................
            ..................
            `,img`
            ..................
            ..................
            .......2222.......
            .....22ffff22.....
            .....2fff2222.....
            ....2ffff222f2....
            ....2ff2ff22f2....
            ...2ffffffffff2...
            ...2f22fffffff2...
            ...2222ffff22f2...
            ...f22ffff222ff...
            ..fffffff222ff....
            ..f2ff22f22f2f....
            ...fff22fffff.....
            ....f2ffff2f......
            .....ffffff.......
            ..................
            ..................
            `,img`
            ..................
            ..................
            .......2222.......
            .....22ffff22.....
            .....2fff2222.....
            ....2ffff222f2....
            ....2ff2ff22f2....
            ...2ffffffffff2...
            ...2f22fffffff2...
            ...2222ffff22f2...
            ...f22ffff222ff...
            ...fffffff222ff...
            ..f2ff22f22f2f....
            ...fff22fffff.....
            ....f2ffff2f......
            .....ffffff.......
            ..................
            ..................
            `,img`
            ..................
            ..................
            .......2222.......
            .....22ffff22.....
            .....2fff2222.....
            ....2ffff222f2....
            ....2ff2ff22f2....
            ...2ffffffffff2...
            ...2f22fffffff2...
            ...2222ffff22f2...
            ...f22ffff222ff...
            ...fffffff222ff...
            ...f2ff22f22f2f...
            ...fff22fffff.....
            ....f2ffff2f......
            .....ffffff.......
            ..................
            ..................
            `,img`
            ..................
            ..................
            .......2222.......
            .....22ffff22.....
            .....2fff2222.....
            ....2ffff222f2....
            ....2ff2ff22f2....
            ...2ffffffffff2...
            ...2f22fffffff2...
            ...2222ffff22f2...
            ...f22ffff222ff...
            ...fffffff222ff...
            ...f2ff22f22f2f...
            ....fff22fffff....
            ....f2ffff2f......
            .....ffffff.......
            ..................
            ..................
            `,img`
            ..................
            ..................
            .......2222.......
            .....22ffff22.....
            .....2fff2222.....
            ....2ffff222f2....
            ....2ff2ff22f2....
            ...2ffffffffff2...
            ...2f22fffffff2...
            ...2222ffff22f2...
            ...f22ffff222ff...
            ...fffffff222ff...
            ...f2ff22f22f2f...
            ....fff22fffff....
            .....f2ffff2f.....
            .....ffffff.......
            ..................
            ..................
            `,img`
            ..................
            ..................
            .......2222.......
            .....22ffff22.....
            .....2fff2222.....
            ....2ffff222f2....
            ....2ff2ff22f2....
            ...2ffffffffff2...
            ...2f22fffffff2...
            ...2222ffff22f2...
            ...f22ffff222ff...
            ...fffffff222ff...
            ...f2ff22f22f2f...
            ....fff22fffff....
            .....f2ffff2f.....
            ......ffffff......
            ..................
            ..................
            `],
        200,
        true
        )
        tiles.placeOnTile(big_egg, value8)
        big_egg.ay = 400
    }
})
forever(function () {
    if (boss_active == true) {
        if (boss_hp.value <= 75) {
            bossy.follow(Gooey, 100)
        } else if (boss_hp.value <= 50) {
            bossy.follow(Gooey, 105)
        } else if (boss_hp.value <= 25) {
            bossy.follow(Gooey, 110)
        } else if (boss_hp.value <= 10) {
            bossy.follow(Gooey, 120)
        } else if (boss_hp.value <= 0) {
            bossy.setKind(SpriteKind.dead)
            sprites.destroy(bossy, effects.fire, 5000)
            timer.after(7500, function () {
                game.showLongText("You Did It", DialogLayout.Bottom)
                game.setGameOverMessage(true, "NEW APEX!")
                timer.after(2000, function () {
                    game.gameOver(true)
                })
            })
        }
    }
})
game.onUpdateInterval(500, function () {
    for (let value9 of sprites.allOfKind(SpriteKind.spore)) {
        spore_pellet = sprites.createProjectileFromSprite(img`
            . f f . 
            f 5 5 f 
            f 6 6 f 
            . f f . 
            `, value9, randint(-80, 80), randint(-80, 80))
        spore_pellet.setKind(SpriteKind.spore_er)
        spore_pellet.setFlag(SpriteFlag.GhostThroughWalls, true)
    }
})
game.onUpdateInterval(100, function () {
    if (Title_Screen_Active == false) {
        life_text.setText("Life:" + life)
        life_text.z = 100
        if (life == 0) {
            timer.throttle("//patch_glitch_more_than_once_exploit", 5000, function () {
                death_drained()
            })
        }
    }
})
