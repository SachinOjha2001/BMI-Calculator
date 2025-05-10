function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const feet = parseFloat(document.getElementById('feet').value);
    const inches = parseFloat(document.getElementById('inches').value);
    const result = document.getElementById('result');

    if (!weight || (!feet && !inches)) {
      result.textContent = "Please enter valid weight and height.";
      return;
    }

    // Convert feet and inches to meters
    const totalInches = (feet * 12) + inches;
    const heightMeters = totalInches * 0.0254;

    const bmi = (weight / (heightMeters * heightMeters)).toFixed(2);
    let category = "";
    let foodSuggestion = "";

    if (bmi < 18.5) {
      category = "Underweight";
      foodSuggestion = "Eat more healthy fats, protein-rich foods, nuts, dairy, and whole grains.";
    } else if (bmi < 25) {
      category = "Normal weight";
      foodSuggestion = "Maintain a balanced diet with fruits, vegetables, lean protein, and whole grains.";
    } else if (bmi < 30) {
      category = "Overweight";
      foodSuggestion = "Focus on low-calorie, nutrient-dense foods like salads, lean meats, and whole grains.";
    } else {
      category = "Obese";
      foodSuggestion = "Avoid processed foods and sugar. Eat high-fiber foods, vegetables, and lean protein.";
    }

    result.innerHTML = `
      Your BMI is <strong>${bmi}</strong> (<strong>${category}</strong>)<br><br>
      <strong>Food Suggestion:</strong> ${foodSuggestion}
    `;
  }