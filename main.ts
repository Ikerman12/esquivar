input.onButtonPressed(Button.A, function () {
    JUGADOR_ARRIBA.change(LedSpriteProperty.Y, 1)
    JUGADOR_ABAJO.change(LedSpriteProperty.Y, 1)
    basic.pause(100)
    JUGADOR_ARRIBA.change(LedSpriteProperty.Y, 1)
    JUGADOR_ABAJO.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    JUGADOR_ARRIBA.change(LedSpriteProperty.X, -1)
    JUGADOR_ABAJO.change(LedSpriteProperty.Y, 1)
    basic.pause(100)
    JUGADOR_ARRIBA.change(LedSpriteProperty.X, 1)
    JUGADOR_ABAJO.change(LedSpriteProperty.Y, -1)
})
let JUGADOR_ABAJO: game.LedSprite = null
let JUGADOR_ARRIBA: game.LedSprite = null
JUGADOR_ARRIBA = game.createSprite(1, 3)
JUGADOR_ABAJO = game.createSprite(1, 4)
let OBJETO = game.createSprite(4, 4)
