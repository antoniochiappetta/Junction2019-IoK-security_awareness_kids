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

var message = "";
switch (category) {
    case "phishing":
        message = "Phishing is a way that criminals get sensitive information (like usernames or passwords). It is a method of social engineering. Very often, phishing is done by electronic mail. This mail appears to come from a bank or other service provider. It usually says that because of some change in the system, the users need to re-enter their usernames/passwords to confirm them. The emails usually have a link to a page that looks almost like that of the real bank.\n";
        break;
    case "ransomware":
        message = "Ransomware can infect your machine if you accidentally pick up malware from a website or download!\n" +
            "\n" +
            "It operates in an alarming way, locking your PC out of the blue and accusing you of committing a crime, before demanding payment to make your system usable again.\n"+
            "\n"+
            "Never pay the 'fine'. Most of the time is just a fake attack, your computer is fine and you just need to close the current tab and any other popups; \n" +
            "If you can't access your PC you can still try to remove the malaware asking your parents to run an anti-virus.\n\r" +
            "1. Don't click on attachments, banners or links without knowing their true origin.\n\r" +
            "2. Don't install or run non-trusted or unknown software.\n\r" +
            "3. Don't install mobile apps from unknown providers/sources.";
        break;
    case "fb_fake_request":
        message = "NEVER accept friendship requests from people you do not know on social networks!\n" +
            "\n" +
            "There are make bad intentioned people who fakes their identity on social networks and pretend to be your friends\n" +
            "Never engage a conversation or provide any kind of information to these individuals!\n" +
            "Immediately tell your parents.";
        break;
}


// Depending on the answer use a different reactionVideo

const reactionVideoURL = answer == "correct" ? "../../assets/animations/success.webm" : "../../assets/animations/failure.webm";
const result_color = answer == "correct" ? "#7BC943" : "#ED1C24";
const result_text = answer == "correct" ? "Correct!" : "Wrong!";
window.onload = function() {
    console.log(reactionVideoURL);
    document.getElementById("reactionVideoSource").src = reactionVideoURL;
    document.getElementById("reactionVideo").load();


    console.log(document.getElementById("bubble-heading"));
    document.getElementById("bubble-heading").innerText = category;
    document.getElementById("bubble-description").innerHTML = message;
    this.document.getElementById("result_div").innerHTML = result_text;
    document.getElementById("result_rect").style.background = result_color;
};

// Depending on the answer show a different reaction color
