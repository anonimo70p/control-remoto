radio.onReceivedNumber(function (receivedNumber) {
    if (1 == receivedNumber) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
    if (0 == receivedNumber) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
basic.forever(function () {
    radio.setGroup(183)
})
