input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    basic.setLedColor(0xff0000)
    serialmp3.playMp3Track(3, 1)
    basic.setLedColor(0x00ff00)
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    serialmp3.playMp3Track(1, 1)
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    basic.setLedColor(0xff0000)
    serialmp3.playMp3Track(2, 1)
    basic.setLedColor(0x00ff00)
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    basic.setLedColor(0xff0000)
    serialmp3.playMp3Track(4, 1)
    basic.setLedColor(0x00ff00)
})
basic.setLedColor(0xff0000)
serialmp3.connectSerialMp3(DigitalPin.C16, DigitalPin.C17)
serialmp3.setMp3Volume(30)
serialmp3.playMp3Track(1, 1)
basic.setLedColor(0x00ff00)
basic.forever(function () {
	
})
