// MARK: - Experience level

function get_experience(category) {
    const correctKey = category + "_correct";
    const wrongKey = category + "_wrong";
    const correctValue = parseInt(localStorage.getItem(correctKey));
    const wrongValue = parseInt(localStorage.getItem(wrongKey));

    const correct = isNaN(correctValue) ? 0 : correctValue;
    const wrong = isNaN(wrongValue) ? 0 : wrongValue;

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

exp_level = get_experience("fb_fake_request");
console.log("fb_fake_request exp:", exp_level);
prob_limit = 0.7; // Ensure always no more than 30% probability of being redirected
if (Math.random() > Math.max(prob_limit, exp_level)) {
// if (1) { // set the probability to 1, just for debug
    $(document).ready(function () {
        var el = document.getElementsByClassName('_4962')[0];
        var newEl = document.createElement('button');
        newEl.setAttribute("id", "modBtn");
        newEl.classList.add("fake_modal-btn");

        el.parentNode.replaceChild(newEl, el);

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                var popup = document.createElement('div');
                popup.innerHTML = this.responseText;
                document.getElementsByTagName("body")[0].appendChild(popup);
        
                document.getElementsByClassName("fake_pic")[0].src = "chrome-extension://" + chrome.i18n.getMessage("@@extension_id") + "/components/fb_fake_request/pics/image.jpg";
                var fake_request_inputs = document.getElementsByClassName("fake_request_input");
                fake_request_inputs[0].action = "chrome-extension://" + chrome.i18n.getMessage("@@extension_id") + "/components/solution/solution.html"
                fake_request_inputs[1].action = "chrome-extension://" + chrome.i18n.getMessage("@@extension_id") + "/components/solution/solution.html"
        
                // Vars
                var modBtn = $('#modBtn'),
                    fake_modal = $('#fake_modal'),
                    close = fake_modal.find('.close');
        
                // open fake_modal when click on open fake_modal button 
                modBtn.on('click', function () {
                    fake_modal.css('display', 'block');
                });
        
                // close fake_modal when click on close button or somewhere out the fake_modal content 
                $(document).on('click', function (e) {
                    var target = $(e.target);
                    if (target.is(fake_modal) || target.is(close)) {
                        fake_modal.css('display', 'none');
                    }
                });
        
                $("#fake_decline_button").on('click', function (e) {
                    store_experience('fb_fake_request', 'correct')
                });
        
                $("#fake_accept_button").on('click', function (e) {
                    store_experience('fb_fake_request', 'wrong')
                });
            }
        };
        xhttp.open("GET", "chrome-extension://" + chrome.i18n.getMessage("@@extension_id") + "/components/fb_fake_request/fb_fake_request.html", true);
        xhttp.send();
    });
}

