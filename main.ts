function asdsdadasa0 () {
    basic.clearScreen()
    led.plot(2, 1)
    led.plot(1, 2)
    led.plot(2, 3)
    led.plot(3, 2)
}
input.onButtonPressed(Button.A, function () {
    asdsdadasa0()
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
function sasSSasadsa2s () {
    asdsdadasa0()
    led.plot(0, 0)
    led.plot(4, 4)
    led.plot(4, 0)
    led.plot(0, 4)
}
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 5; index++) {
        asdsdadasa0()
        basic.pause(500)
        sasSSasadsa2s()
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    sasSSasadsa2s()
})
