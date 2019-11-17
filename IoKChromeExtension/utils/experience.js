// MARK: - Experience

function store_experience(category, answer) {
    var key = "";
    if (answer === "correct") {
        key = category + "_correct";
    } else {
        key = category + "_wrong";
    }

    const oldValue = parseInt(localStorage.getItem(key) == null ? 0 : localStorage.getItem(key));
    let value = oldValue + 1;
    if (!oldValue) {
        value = 1
    }
    localStorage.setItem(key, value);
    console.log(localStorage.getItem(key));
  }

  function get_experience(category) {
    console.log(category);
      const correctKey = category + "_correct";
      const wrongKey = category + "_wrong";
      const correctValue = parseInt(localStorage.getItem(correctKey));
      const wrongValue = parseInt(localStorage.getItem(wrongKey));
      const correct = correctValue == null ? 0 : correctValue;
      const wrong = wrongValue == null ? 0 : wrongValue;
      return correct / (correct + wrong + 1);
  }
