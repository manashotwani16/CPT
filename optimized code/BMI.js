const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");

  const height = heightInput.value;
  const weight = weightInput.value;

  if (height === "" || weight === "") {
    alert("Please fill out the input fields!");
    return;
  }

  // Convert height to meters
  const heightInMeters = height / 100;

  // Calculate BMI
  let BMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  // Display BMI
  document.querySelector("#result").innerHTML = BMI;

  // Determine BMI status
  let status = "";
  if (BMI < 18.5) {
    status = "Underweight";
  } else if (BMI < 25) {
    status = "Healthy";
  } else if (BMI < 30) {
    status = "Overweight";
  } else {
    status = "Obese";
  }

  // Display status
  document.querySelector(".comment").innerHTML = `Comment: you are <span id="comment">${status}</span>`;
});
