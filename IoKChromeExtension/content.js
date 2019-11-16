// content.js
/*chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {
            var firstHref = $("a[href^='http']").eq(0).attr("href");

            console.log(firstHref);

            // This line is new!
            chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
        }
    }
);*/


console.log("logging document");
console.log(document);

console.log("showing popup");

$(document).ready(function() {
    var path = chrome.extension.getURL('components/pishing/pishing.css');
    console.log(path);
    $('head').append($('<link>')
        .attr("rel","stylesheet")
        .attr("type","text/css")
        .attr("href", path));
});

// put the html for you popup here
my_dialog_popup = '<dialog><div class="title">\n' +
    '\t\t<img id="img1" src="assets/images/facebook.png" /> Facebook Login\n' +
    '\t</div>\n' +
    '\t<br>\n' +
    '\t<br>\n' +
    '\n' +
    '\t<div class="container">\n' +
    '\t\t<form class="form" action="../solution/solution.html">\n' +
    '\t\t\t<label>Email or Phone: </label><input class="form-control" placeholder="Email" type="mail" name="name" autofocus required>\n' +
    '\t\t\t<br>\n' +
    '\t\t\t<label>Password: </label><input class="form-control" placeholder="Password" required>\n' +
    '\t\t\t<input type="checkbox" />keep me logged in\n' +
    '\t\t\t<br>\n' +
    '\t\t\t<br>\n' +
    '\t\t\t<input class="form-control fb-btn btn-lg btn-primary" id="submit" type="submit" value="Sign In">\n' +
    '\t\t\t<br>\n' +
    '\t\t\t<br>\n' +
    '\t\t</form>\n' +
    '\n' +
    '\t\t<!--<form class="form" action="../solution/solution.html">\n' +
    '\t\t\t<label></label>First Name: </label><input class="form-control" autofocus required>\n' +
    '\t\t\t<label>Last Name: </label><input class="form-control" required>\n' +
    '\t\t\t<label>Email: </label><input class="form-control" required>\n' +
    '\t\t\t<label>Password: </label><input class="form-control" required>\n' +
    '\t\t\t<label>Address: </label><input class="form-control" required>\n' +
    '\t\t\t<label>Phone Number: </label><input class="form-control" required>\n' +
    '\t\t\t<br/>\n' +
    '\t\t\t<input class="form-control btn btn-lg btn-primary" type="submit">\n' +
    '\t\t</form>-->\n' +
    '\t</div><br><button>Close</button></dialog>';
document.body.innerHTML += my_dialog_popup;

// show popup
var dialog = document.querySelector("dialog");
dialog.querySelector("button").addEventListener("click", function() {
    dialog.close()
});
dialog.showModal();
