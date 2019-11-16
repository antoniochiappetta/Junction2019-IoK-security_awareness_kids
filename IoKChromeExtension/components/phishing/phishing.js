// Pure JS:
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("submit").addEventListener("click", handler);
});

// The handler also must go in a .js file
function handler() {
    store_experience('phishing','wrong')
}
