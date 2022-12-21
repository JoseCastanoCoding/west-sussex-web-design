var messageArray = ["Your down-to-earth website designer :)"];
var speed = 100;
var textPosition = 0;


typewriter = () => {
    document.querySelector("#message").innerHTML = messageArray[0].substring(0, 
        textPosition) + '<span>\u25AE</span>';

    if (textPosition++ != messageArray[0].length) {
        setTimeout("typewriter()", speed);
    }
    
}

window.addEventListener('load', typewriter);