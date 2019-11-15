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

// put the html for you popup here
my_dialog_popup = '<dialog>This is a dialog.<br><button>Close</button></dialog>';
document.body.innerHTML += my_dialog_popup;

// show popup
var dialog = document.querySelector("dialog");
dialog.querySelector("button").addEventListener("click", function() {
    dialog.close()
});
dialog.showModal();
