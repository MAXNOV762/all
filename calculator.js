 // Load saved history from localStorage (or create empty Set if none exists)
 const history = new Set(JSON.parse(localStorage.getItem("history")) || []);
 
 // Load saved history from localStorage (or create empty Set if none exists)
        document.getElementById("MyForm").addEventListener("submit", function(event) {
event.preventDefault(); // Prevent page reload

// Get selected operation and input numbers
let dzialanie = document.getElementById("option").value;
let a = parseFloat(document.getElementById("first").value);
let b = parseFloat(document.getElementById("second").value);
let result;

// Prevent division by zero
if (dzialanie === "/" && b === 0) {
    document.getElementById("demo").innerHTML = "Can't divide by zero!";
    document.getElementById("demo").style.color = "red";
    return; 
  }
  // Check if input values are valid numbers
if (isNaN(a) || isNaN(b)) {
    document.getElementById("demo").innerHTML = "Enter correct data!";
    document.getElementById("demo").style.color = "red";
    return;
}
// Perform selected math operation
switch(dzialanie) {
    case '+':
        result = a + b;
        document.getElementById("demo").innerHTML = a + "+" + b + "=" + result;
        break;
    case '-':
        result = a - b;
        document.getElementById("demo").innerHTML = a + "-" + b + "=" + result;
        break;
    case '*':
        result = a * b;
        document.getElementById("demo").innerHTML = a + "*" + b + "=" + result;
        break;
    case '/':
        result = a / b;
        document.getElementById("demo").innerHTML = a + "/" + b + "=" + result.toFixed(2);
        break;
};
 
// Save operation to history (Set prevents duplicates)
history.add(a + dzialanie + b + "=" + result);

// Store updated history in localStorage
localStorage.setItem("history", JSON.stringify(Array.from(history)));

// Display updated history
  renderHistory();
})

// Function to display history on the page
function renderHistory() {
let text = "<ul>";
for(const x of history.values()) {
    text += "<li>" + x + "</li>";
}
text +="</ul>";
document.getElementById("demo").innerHTML = text;
}


// Handle "Clear history" button click
document.getElementById("clear").addEventListener("click", () => {
    history.clear();              // Remove all operations from memory
    document.getElementById("demo").innerHTML = ""; // Clear display
});

// Clear display
renderHistory();