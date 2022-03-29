var x = document.getElementById("drinkarea");
var y = document.getElementById("top");
x.style.display = "none";
y.style.display = "block";


function showDrink() {
      x.style.display = "block"; 
      y.style.display = "none";
  }
  function showTop() {
    x.style.display = "none";
    y.style.display = "block";
}