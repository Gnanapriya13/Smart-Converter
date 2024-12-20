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
    if (op1.value === "Meter") {
        if (op2.value === "Centimeter") {
            ans = num * 100;
        } else if (op2.value === "Kilometer") {
            ans = num *0.001;
        } else if (op2.value === "Meter") {
            ans = num; // No change
        } else {
            alert("Invalid conversion");
            return;
        }
    } else if (op1.value === "Centimeter") {
        if (op2.value === "Meter") {
            ans = num*0.01;
        } else if (op2.value === "Kilometer") {
            ans = num/100000;
        } else if (op2.value === "Centimeter") {
            ans = num; // No change
        } else {
            alert("Invalid conversion");
            return;
        }
    } else if (op1.value === "Kilometer") {
        if (op2.value === "Meter") {
            ans = num *1000
        } else if (op2.value === "Centimeter") {
            ans = num*100000
        } else if (op2.value === "Kilometer") {
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
