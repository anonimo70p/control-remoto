radio.onReceivedNumber(function (receivedNumber) {
    if (1 == receivedNumber) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
    if (0 == receivedNumber) {
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (3 == receivedNumber) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 199)
        maqueen.motorStop(maqueen.Motors.M2)
    }
    if (4 == receivedNumber) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 199)
        maqueen.motorStop(maqueen.Motors.M1)
    }
})
radio.setGroup(183)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(200)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 79)
    }
})
