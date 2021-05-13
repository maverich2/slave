input.onButtonPressed(Button.A, function () {
    if (cursore > 0) {
        cursore += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("" + mia_sigla + "5")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "g") {
        avviato = 1
        cursore = 5
    } else {
        utente = receivedString.substr(0, 1)
        codice = receivedString.substr(1, 1)
        if (utente == mia_sigla) {
            if (codice == "k") {
                basic.showIcon(IconNames.Heart)
            } else {
                basic.showString(codice)
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (cursore < 9) {
        cursore += 1
    }
})
let codice = ""
let utente = ""
let avviato = 0
let cursore = 0
let mia_sigla = ""
radio.setGroup(101)
mia_sigla = "r"
basic.forever(function () {
    if (avviato == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    } else {
        basic.showNumber(cursore)
    }
})
