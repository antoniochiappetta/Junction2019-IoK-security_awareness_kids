// Pure JS:
document.addEventListener('DOMContentLoaded', function() {
    //store_experience('ransomware','wrong')
    document.getElementById("pay_button").addEventListener("click", handler);
});

// The handler also must go in a .js file
function handler() {

    /////
        localStorage.setItem("active_tab", null);
        localStorage.setItem("use_case", null);

        //////
    store_experience('ransomware','wrong')
}
