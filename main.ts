serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    basic.showNumber(0)
    basic.pause(500)
    basic.clearScreen()
})
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200
)
serial.redirectToUSB()
