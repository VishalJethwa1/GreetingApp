
let text = ""
let pic = document.getElementById("pic")

const dateTimeNow = new Date()
const tommorrow = new Date(dateTimeNow)
tommorrow.setDate(dateTimeNow.getDate() + 1)

const morning = new Date()
morning.setHours(4)
const noon = new Date()
noon.setHours(12)
const evening = new Date()
evening.setHours(17)
const night = new Date()
night.setHours(20)


if(dateTimeNow == morning || dateTimeNow < noon) {
    text = "Good Morning!"
    document.getElementById("greeting").innerHTML = text
    document.getElementById("display").style.backgroundImage = "url('./images/morning.jpg')"
    document.getElementById("display").style.backgroundPosition = "center"
    document.getElementById("display").style.backgroundRepeat = "no-repeat"
    document.getElementById("display").style.backgroundSize = "cover" 
    //document.getElementById("display").style.backgroundAttachment = "fixed" 
} else if (dateTimeNow == noon || dateTimeNow < evening) {
    text = "Good Afternoon!"
    document.getElementById("greeting").innerHTML = text
    document.getElementById("display").style.backgroundImage = "url('./images/afternoon.jpg')"
    document.getElementById("display").style.backgroundPosition = "center"
    document.getElementById("display").style.backgroundRepeat = "no-repeat"
    document.getElementById("display").style.backgroundSize = "cover"
} else if (dateTimeNow == evening || dateTimeNow < night) {
    text = "Good Evening!"
    document.getElementById("greeting").innerHTML = text
    document.getElementById("display").style.backgroundImage = "url('./images/evening.jpg')"
    document.getElementById("display").style.backgroundPosition = "center"
    document.getElementById("display").style.backgroundRepeat = "no-repeat"
    document.getElementById("display").style.backgroundSize = "cover"
} else if(dateTimeNow == night || dateTimeNow < tommorrow) {
    text = "Good Night!"
    document.getElementById("greeting").innerHTML = text
    document.getElementById("display").style.backgroundImage = "url('./images/night.jpg')"
    document.getElementById("display").style.backgroundPosition = "center"
    document.getElementById("display").style.backgroundSize = "cover"
    document.getElementById("display").style.backgroundRepeat = "no-repeat" 
    document.getElementById("greeting").style.color = "white"
    document.getElementById("greeting").style.textShadow = "0px 8px 8px #D3D3D3"
}