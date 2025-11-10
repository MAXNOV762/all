 const history = new Set(JSON.parse(localStorage.getItem("history")) || []);
        document.getElementById("MyForm").addEventListener("submit", function(event) {
event.preventDefault();

let dzialanie = document.getElementById("option").value;
let a = parseFloat(document.getElementById("first").value);
let b = parseFloat(document.getElementById("second").value);
let result;
if (dzialanie === "/" && b === 0) {
    document.getElementById("demo").innerHTML = "Can't divide by zero!";
    document.getElementById("demo").style.color = "red";
    return; 
  }
if (isNaN(a) || isNaN(b)) {
    document.getElementById("demo").innerHTML = "Enter correct data!";
    document.getElementById("demo").style.color = "red";
    return;
}

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
 
history.add(a + dzialanie + b + "=" + result);

localStorage.setItem("history", JSON.stringify(Array.from(history)));

  renderHistory();
})
function renderHistory() {
let text = "<ul>";
for(const x of history.values()) {
    text += "<li>" + x + "</li>";
}
text +="</ul>";
document.getElementById("demo").innerHTML = text;
}


document.getElementById("clear").addEventListener("click", () => {
    history.clear();
    document.getElementById("demo").innerHTML = "";
});

renderHistory();