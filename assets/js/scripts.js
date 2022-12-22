var h1MessageArray = ["West Sussex Web Design"];
var h2MessageArray = ["Your down-to-earth website designer"];
var speed = 100;
var textPosition1 = 0;
var textPosition2 = 0;



typewriter1 = () => {
    document.querySelector("#h1Message").innerHTML = h1MessageArray[0].substring(0, 
        textPosition1) + '<span>\u25AE</span>';

    if (textPosition1++ != h1MessageArray[0].length) {
        setTimeout("typewriter1()", speed);
    }
    
}

window.addEventListener('load', typewriter1);

typewriter2 = () => {
    document.querySelector("#h2Message").innerHTML = h2MessageArray[0].substring(0, 
        textPosition2) + '<span>\u25AE</span>';

    if (textPosition2++ != h2MessageArray[0].length) {
        setTimeout("typewriter2()", speed);
    }
    
}

window.setTimeout(typewriter2, 4000);