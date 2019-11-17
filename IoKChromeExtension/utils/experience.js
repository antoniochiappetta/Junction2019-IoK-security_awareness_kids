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

