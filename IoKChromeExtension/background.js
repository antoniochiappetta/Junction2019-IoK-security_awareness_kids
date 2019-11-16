var activeTab = null;
var use_case = null;

chrome.tabs.onRemoved.addListener(function(tabid, removed) {

    console.log("Tab closed:" ,tabid, activeTab);
    if (tabid===activeTab) {
        activeTab = null;
        use_case = null;
        chrome.tabs.create({ url: chrome.runtime.getURL("./components/solution/solution.html?category=" +use_case+"&answer=correct") }, function(tab) {
            console.log("Opened: " + tab.url);
        });
    }
});


// how to redirect
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {

        if (Math.random() > 0.5) {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                activeTab = tabs[0].id;
                use_case = "ransomware"
            });
            return {redirectUrl: chrome.runtime.getURL("./components/ransomware/ransomware_redirect.html")};
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
