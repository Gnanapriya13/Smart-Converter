const value = document.getElementById("val");
const select1 = document.getElementById("selected1");
const select2 = document.getElementById("selected2");
const mybutton = document.getElementById("convertBtn");
const result = document.getElementById("answer");
let a;

mybutton.onclick = function () {
    let input = value.value.trim(); // Trim spaces
    if (select1.value == "Decimal") {
        if (isNaN(input) || input === "") {
            alert("Please enter a valid decimal input");
            return;
        } else {
            a = parseInt(input, 10); // Convert to decimal
            if (select2.value == "Binary") a = a.toString(2);
            else if (select2.value == "Octal") a = a.toString(8);
            else if (select2.value == "Hexadecimal") a = a.toString(16).toUpperCase();
            else alert("Select a valid conversion");
        }
    } else if (select1.value == "Binary") {
        if (!/^[01]+$/.test(input)) {
            alert("Invalid binary input!");
            return;
        } else {
            a = parseInt(input, 2); // Convert binary to decimal
            if (select2.value == "Decimal") a = a;
            else if (select2.value == "Octal") a = a.toString(8);
            else if (select2.value == "Hexadecimal") a = a.toString(16).toUpperCase();
            else alert("Select a valid conversion");
        }
    } else if (select1.value == "Octal") {
        if (!/^[0-7]+$/.test(input)) {
            alert("Invalid octal input!");
            return;
        } else {
            a = parseInt(input, 8); // Convert octal to decimal
            if (select2.value == "Decimal") a = a;
            else if (select2.value == "Binary") a = a.toString(2);
            else if (select2.value == "Hexadecimal") a = a.toString(16).toUpperCase();
            else alert("Select a valid conversion");
        }
    } else if (select1.value == "Hexadecimal") {
        if (!/^[0-9A-Fa-f]+$/.test(input)) {
            alert("Invalid hexadecimal input!");
            return;
        } else {
            a = parseInt(input, 16); // Convert hexadecimal to decimal
            if (select2.value == "Decimal") a = a;
            else if (select2.value == "Binary") a = a.toString(2);
            else if (select2.value == "Octal") a = a.toString(8);
            else alert("Select a valid conversion");
        }
    }

    // Display result
    if (a !== undefined) {
        document.getElementById("convertBtn").style.display = "none";
    document.getElementById("refresh").style.display = "block";
        document.getElementById("answer").innerText = `Result: ${a}`;
        document.getElementById("thanku").innerHTML = 'Thank you &#9786;....';
    }
};
