const button = document.querySelector("button");
button.addEventListener("click", action);

function action() {
    // Select elements

    const op1 = document.querySelector("#selected1"); // Source unit
    const op2 = document.querySelector("#selected2"); // Target unit
    const inputVal = document.getElementById("val").value; // Input temperature

    // Validate input
    if (inputVal === "" || isNaN(Number(inputVal))) {
        alert("Please enter a valid numeric temperature.");
        return;
    }

    const num = Number(inputVal); // Convert input to a number
    let ans; // To store the result

    // Conversion logic
    if (op1.value === "Celsius") {
        if (op2.value === "Fahrenheit") {
            ans = num * (9 / 5) + 32;
        } else if (op2.value === "Kelvin") {
            ans = num + 273.15;
        } else if (op2.value === "Celsius") {
            ans = num; // No change
        } else {
            alert("Invalid conversion");
            return;
        }
    } else if (op1.value === "Fahrenheit") {
        if (op2.value === "Celsius") {
            ans = (num - 32) * (5 / 9);
        } else if (op2.value === "Kelvin") {
            ans = (num - 32) * (5 / 9) + 273.15;
        } else if (op2.value === "Fahrenheit") {
            ans = num; // No change
        } else {
            alert("Invalid conversion");
            return;
        }
    } else if (op1.value === "Kelvin") {
        if (op2.value === "Celsius") {
            ans = num - 273.15;
        } else if (op2.value === "Fahrenheit") {
            ans = (num - 273.15) * (9 / 5) + 32;
        } else if (op2.value === "Kelvin") {
            ans = num; // No change
        } else {
            alert("Invalid conversion");
            return;
        }
    } else {
        alert("Invalid conversion type");
        return;
    }
    document.getElementById("convertBtn").style.display = "none";
    document.getElementById("refresh").style.display = "block";
    // Display result
    document.getElementById("answer").innerText = `Result: ${ans.toFixed(2)}`;
    document.getElementById("answer").style.color="black";
    document.getElementById("thanku").innerHTML='Thank you &#9786;....';
}
