// Function to calculate water intake based on weight, activity level, and climate
function calculateIntake() {
    // Get the weight, activity level, and climate values from the input elements
    var weight = document.getElementById('weight').value;
    var activity = document.getElementById('activity').value;
    var climate = document.getElementById('climate').value;

    var waterIntake = weight * 0.033; // Calculate base water intake based on weight

    // Adjust water intake based on activity level
    if (activity === 'medium') {
        waterIntake += 0.5;
    } else if (activity === 'high') {
        waterIntake += 1;
    }

    // Adjust water intake based on climate
    if (climate === 'cold') {
        waterIntake += 0.5;
    } else if (climate === 'hot') {
        waterIntake += 1;
    }

    waterIntake = Math.round(waterIntake); // Round water intake to the nearest integer

    // Display the result on the page
    document.getElementById('result').textContent = 'Your daily water intake should be ' + waterIntake + ' liters.';
}
