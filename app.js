var button = document.getElementById("maleButton");

button.addEventListener("mousedown", function () {
    this.classList.toggle("active");
});

var button = document.getElementById("femaleButton");

button.addEventListener("mousedown", function () {
    this.classList.toggle("active");
});

const buttons = document.querySelectorAll(".plec");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        // Wyłączanie wszystkich przycisków
        buttons.forEach(btn => btn.classList.remove("active"));
        // Włączanie klikniętego przycisku
        this.classList.add("active");
    });
});



function calculateCalories() {
    var gender = document.getElementById('maleButton').classList.contains('active') ? 'male' : 'female';
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var age = parseFloat(document.getElementById('age').value);
    var activityLevel = parseFloat(document.getElementById('activity-level').value);
    var goal = document.getElementById('goal').value;

    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert("Wprowadź prawidłowe wartości dla wszystkich pól.");
        return;
    }

    var bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    var totalCalories;

    switch (goal) {
        case 'maintain':
            totalCalories = bmr * activityLevel;
            break;
        case 'lose':
            totalCalories = bmr * activityLevel - 500; // 500 kcal deficiency per day for weight loss
            break;
        case 'gain':
            totalCalories = bmr * activityLevel + 500; // 500 kcal surplus per day for weight gain
            break;
        default:
            totalCalories = bmr * activityLevel;
            break;
    }

    document.getElementById('result').innerText = "Twoje dzienne zapotrzebowanie kaloryczne wynosi: " + totalCalories.toFixed(2) + " kcal.";
}

document.getElementById('result').style.display = 'block';
    document.getElementById('result').innerText = "Twoje dzienne zapotrzebowanie kaloryczne wynosi: " + totalCalories.toFixed(2) + " kcal.";
    document.getElementById('calculationForm').style.display = 'none';