// Pure JS:
document.addEventListener('DOMContentLoaded', function() {
    //store_experience('ransomware','wrong')
    document.getElementById("pay_button").addEventListener("click", handler);
});

// The handler also must go in a .js file
function handler() {
    store_experience('ransomware','wrong')
}
