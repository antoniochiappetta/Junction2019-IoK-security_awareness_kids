// Get URL params

var params = function() {
    function urldecode(str) {
        return decodeURIComponent((str+'').replace(/\+/g, '%20'));
    }

    function transformToAssocArray( prmstr ) {
        var params = {};
        var prmarr = prmstr.split("&");
        for ( var i = 0; i < prmarr.length; i++) {
            var tmparr = prmarr[i].split("=");
            params[tmparr[0]] = urldecode(tmparr[1]);
        }
        return params;
    }

    var prmstr = window.location.search.substr(1);
    return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}();

var games = {
    "phishing": [
        "PasswordCreationTutorial" // put URL here
    ],
    "ransomware": [
        // empty
    ]
}

const category = params["category"];
const answer = params["answer"];

// Depending on the category use a different message

var message = ""
switch (category) {
    case "phishing":
        message = "Don't give away your data";
        break;
    case "ransomware":
        message = "Don't believe to anything";
        break;
}

// Depending on the answer use a different reactionVideo

const reactionVideoURL = answer == "correct" ? "../../assets/animations/success.webm" : "../../assets/animations/failure.webm";
window.onload = function() {
    console.log(reactionVideoURL);
    document.getElementById("reactionVideoSource").src = reactionVideoURL;
    document.getElementById("reactionVideo").load();
} 
