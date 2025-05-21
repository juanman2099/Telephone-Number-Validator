const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
    const number = input.value.trim();
    if (!number) {
        alert("Please provide a phone number");
        return;
    }
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    if (regex.test(number)) {
        resultsDiv.textContent = `Valid US number: ${number}`;
        result.style.display = "block";
    } else {
        resultsDiv.textContent = `Invalid US number: ${number}`;    
        result.style.display = "block";
    }
});

clearBtn.addEventListener("click", () => {
    input.value = "";
    resultsDiv.textContent = "";
    result.style.display = "none";
});