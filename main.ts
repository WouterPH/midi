radio.onReceivedNumber(function (receivedNumber) {
    input2 = 0
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
let input2 = 0
serial.redirectToUSB()
radio.setGroup(1)
