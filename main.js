document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".block");
    const card = document.querySelector(".card");

    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            const value = e.target.value;

            if (value.length > 1) {
                e.target.value = value.slice(0, 1); // Keep only the first digit
            }

            if (value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && index > 0 && input.value === "") {
                inputs[index - 1].focus(); // Move focus to the previous input on backspace
            }
        });
    });
});

function validateInputs() {
    const inputs = document.querySelectorAll(".block");
    let allFilled = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            allFilled = false;
        }
    });

    if (!allFilled) {
        alert("Please fill in all the fields");
    } else {
       
        document.querySelector(".card").style.display = "none"; // Hide the card
    }
}
