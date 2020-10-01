let Celsius = 0
let fahrenheit = 0
basic.forever(function () {
    Celsius = input.temperature()
    fahrenheit = Celsius * 1.8 + 32
    if (fahrenheit >= 22 && fahrenheit <= 14) {
        basic.showString("stay at home, there is heavy snow")
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (fahrenheit >= 15 && fahrenheit <= 23) {
        basic.showString("go for your skis and have fun")
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
    } else if (fahrenheit >= 24 && fahrenheit <= 32) {
        basic.showString("warning you can only ski in the highest parts")
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
    } else if (fahrenheit >= 33) {
        basic.showString("sorry it is not ski season ")
        basic.showIcon(IconNames.Sad)
    }
})
