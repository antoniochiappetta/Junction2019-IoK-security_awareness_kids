// MARK: - Properties

var activeTab = null;
var use_case = null;

// MARK: - Experience level

function get_experience(category) {
    const correctKey = category + "_correct";
    const wrongKey = category + "_wrong";
    const correctValue = localStorage.getItem(correctKey);
    const wrongValue = localStorage.getItem(wrongKey);

    const correct = correctValue === null ? 0 : correctValue;
    const wrong = wrongValue === null ? 0 : wrongValue;

    return correct / (correct + wrong + 1);
}

function store_experience(category, answer) {
    var key = "";
    if (answer === "correct") {
        key = category + "_correct";
    } else {
        key = category + "_wrong";
    }

    const oldValue = parseInt(localStorage.getItem(key) === undefined ? 0 : localStorage.getItem(key));
    let value = oldValue + 1;
    if (!oldValue) {
        value = 1
    }
    localStorage.setItem(key, value);
    console.log(localStorage.getItem(key));
}

// MARK: - Tab closing (correct reaction to tricks)

chrome.tabs.onRemoved.addListener(function(tabid, removed) {

    console.log("Tab closed:" ,tabid, activeTab);
    if (tabid===activeTab) {
        store_experience(use_case, "correct");
        activeTab = null;
        use_case = null;
        chrome.tabs.create({ url: chrome.runtime.getURL("./components/solution/solution.html?category=" +use_case+"&answer=correct") }, function(tab) {
            console.log("Opened: " + tab.url);
        });
    }
});

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        activeTab = null;
        use_case = null;
    },
    {
       urls: [
            "*://*/components/solution/*"
       ],
       types: ["main_frame", "sub_frame"]
    },
   ["blocking"]
)

// MARK: - Phishing

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        exp_level = get_experience("phishing");
        prob_limit = 0.7 // Ensure always no more than 30% probability of being redirected
        if (Math.random() > Math.max(prob_limit, exp_level)) {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                activeTab = tabs[0].id;
                use_case = "phishing"
            });
            return {redirectUrl: chrome.extension.getURL("./components/phishing/phishing.html")};
        }
    },
    {
       urls: [
           "*://www.facebook.com/*"
       ],
       types: ["main_frame", "sub_frame"]
    },
   ["blocking"]
);

// MARK: - Ransomware

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        exp_level = get_experience("ransomware");
        console.log(exp_level);
        prob_limit = 0.7; // Ensure always no more than 30% probability of being redirected
        if (Math.random() > Math.max(prob_limit, exp_level)) {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                activeTab = tabs[0].id;
                use_case = "ransomware"
            });
            return {redirectUrl: chrome.runtime.getURL("./components/ransomware/ransomware_redirect.html")};
        }
    },
    {
        urls: [
            // Social networks
            "*://www.facebook.com/*",
            "*://www.twitter.com/*",
            // Seach engines
            "*://www.google.com/*",
            "*://www.bing.com/*",
            // Video streaming
            "*://www.netflix.com/*",
            "*://www.youtube.com/*"
        ],
        types: ["main_frame", "sub_frame"]
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
