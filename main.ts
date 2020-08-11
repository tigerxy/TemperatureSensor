let y = 0
let currentTemp = 0
let oldTemp = 0
function ShowSmallNumber (x: number) {
    y = x % 10
    if (y == 0) {
        basic.showLeds(`
            . . # # #
            . . # . #
            . . # . #
            . . # . #
            . . # # #
            `)
    }
    if (y == 1) {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
    }
    if (y == 2) {
        basic.showLeds(`
            . . # # #
            . . . . #
            . . # # #
            . . # . .
            . . # # #
            `)
    }
    if (y == 3) {
        basic.showLeds(`
            . . # # #
            . . . . #
            . . # # #
            . . . . #
            . . # # #
            `)
    }
    if (y == 4) {
        basic.showLeds(`
            . . # . #
            . . # . #
            . . # # #
            . . . . #
            . . . . #
            `)
    }
    if (y == 5) {
        basic.showLeds(`
            . . # # #
            . . # . .
            . . # # #
            . . . . #
            . . # # #
            `)
    }
    if (y == 6) {
        basic.showLeds(`
            . . # # #
            . . # . .
            . . # # #
            . . # . #
            . . # # #
            `)
    }
    if (y == 7) {
        basic.showLeds(`
            . . # # #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
    }
    if (y == 8) {
        basic.showLeds(`
            . . # # #
            . . # . #
            . . # # #
            . . # . #
            . . # # #
            `)
    }
    if (y == 9) {
        basic.showLeds(`
            . . # # #
            . . # . #
            . . # # #
            . . . . #
            . . # # #
            `)
    }
    y = Math.floor(x / 10)
    if (y > 0) {
        led.plot(0, 4)
    }
    if (y > 1) {
        led.plot(0, 3)
    }
    if (y > 2) {
        led.plot(0, 2)
    }
    if (y > 3) {
        led.plot(0, 1)
    }
    if (y > 4) {
        led.plot(0, 0)
    }
}
basic.forever(function () {
    currentTemp = input.temperature()
    if (currentTemp != oldTemp) {
        ShowSmallNumber(currentTemp)
        if (currentTemp > oldTemp) {
            music.playMelody("C D E F G A B C5 ", 500)
        } else {
            music.playMelody("C5 B A G F E D C ", 500)
        }
        oldTemp = currentTemp
    }
    basic.pause(5000)
})
