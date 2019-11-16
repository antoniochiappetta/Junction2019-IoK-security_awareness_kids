// Get experience level

function store_experience(category, answer) {
  var key = ""
  if (answer == "correct") {
      key = category + "_correct";
  } else {
      key = category + "_wrong";
  }
  
  const oldValue = localStorage.getItem(key) == undefined ? 0 : localStorage.getItem(key);
  const value = oldValue + 1;
  localStorage.setItem(key, value);
  console.log(localStorage.getItem(key));
}

function get_experience(category) {
    const correctKey = category + "_correct";
    const wrongKey = category + "_wrong";
    const correctValue = localStorage.getItem(correctKey);
    const wrongValue = localStorage.getItem(wrongKey);
    const correct = correctValue == undefined ? 0 : correctValue;
    const wrong = wrongValue == undefined ? 0 : wrongValue;
    return correct / (correct + wrong);
}

console.log(get_experience("phishing"));