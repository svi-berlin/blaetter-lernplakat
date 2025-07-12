input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    basic.setLedColor(0xff0000)
    serialmp3.playMp3Track(5, 6)
    basic.setLedColor(0x00ff00)
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showIcon(IconNames.Heart)
    serialmp3.playMp3Track(1, 6)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showIcon(IconNames.Happy)
    serialmp3.playMp3Track(1, 6)
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    basic.setLedColor(0xff0000)
    serialmp3.playMp3Track(4, 6)
    basic.setLedColor(0x00ff00)
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    basic.setLedColor(0xff0000)
    serialmp3.playMp3Track(6, 6)
    basic.setLedColor(0x00ff00)
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    basic.setLedColor(0xff0000)
    serialmp3.playMp3Track(7, 6)
    basic.setLedColor(0x00ff00)
})
basic.setLedColor(0xff0000)
serialmp3.connectSerialMp3(DigitalPin.C16, DigitalPin.C17)
serialmp3.setMp3Volume(30)
basic.setLedColor(0x00ff00)
basic.forever(function () {
	
})
