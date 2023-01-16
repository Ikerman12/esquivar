input.onButtonPressed(Button.A, function () {
    JUGADOR_1.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    JUGADOR_1.change(LedSpriteProperty.X, 1)
})
let OBJETO: game.LedSprite = null
let JUGADOR_1: game.LedSprite = null
JUGADOR_1 = game.createSprite(2, 4)
basic.forever(function () {
    basic.pause(randint(1000, 1500))
    OBJETO = game.createSprite(randint(0, 4), 2)
    for (let index = 0; index < 4; index++) {
    	
    }
    basic.pause(100)
    JUGADOR_1.change(LedSpriteProperty.Y, 1)
    if (JUGADOR_1.isTouching(OBJETO)) {
        game.gameOver()
    }
    basic.pause(100)
    game.addScore(1)
    OBJETO.delete()
})
