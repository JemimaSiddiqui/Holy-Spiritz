var x = document.getElementById("drinkarea");
var y = document.getElementById("top");
var drink1 = document.getElementById("drink-list1");
var drink2 = document.getElementById("drink-list2");
var drink3 = document.getElementById("drink-list3");
var drink4 = document.getElementById("drink-list4");
var drink5 = document.getElementById("drink-list5");
var drink6 = document.getElementById("drink-list6");
var drink7 = document.getElementById("drink-list7");
drink1.style.display = "none"; 
drink2.style.display = "none"; 
drink3.style.display = "none"; 
drink4.style.display = "none"; 
drink5.style.display = "none"; 
drink6.style.display = "none"; 
drink7.style.display = "none"; 
var drinkListDisplay = document.getElementById("drink-list");
x.style.display = "none";
y.style.display = "block";
// linking both buttons //
var feelingLucky = document.getElementById("feelingLucky")
var cheers = document.getElementById("cheers")
// linking input bar //
var userSearch = document.getElementById("userSearch")
var searchHistory = [];
var drinkList = document.getElementById("drink-list")

// click event for random button //
feelingLucky.addEventListener('click', function randomDrink() {
  // api has there own random query url so just using that here //
  var RandomApiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  fetch(RandomApiUrl).then(function (response) {
    return response.json();
  })
    .then(function (data) {
      // appending h2 and p elements with ingredients, instructions and drink name using vanilla js //
      // some drinks can have up to 10 ingredients, even if they have less it doesnt throw an error and page looks the same either way //
      // considering using jquery and create element and append instead? //
      document.getElementById("randomName").innerText = data.drinks[0].strDrink
      document.getElementById("ingredients1").innerText = data.drinks[0].strIngredient1
      document.getElementById("ingredients2").innerText = data.drinks[0].strIngredient2
      document.getElementById("ingredients3").innerText = data.drinks[0].strIngredient3
      document.getElementById("ingredients4").innerText = data.drinks[0].strIngredient4
      document.getElementById("ingredients5").innerText = data.drinks[0].strIngredient5
      document.getElementById("ingredients6").innerText = data.drinks[0].strIngredient6
      document.getElementById("ingredients7").innerText = data.drinks[0].strIngredient7
      document.getElementById("ingredients8").innerText = data.drinks[0].strIngredient8
      document.getElementById("ingredients9").innerText = data.drinks[0].strIngredient9
      document.getElementById("ingredients10").innerText = data.drinks[0].strIngredient10
      document.getElementById("glassType").innerText = data.drinks[0].strGlass + " recommended"
      document.getElementById("instructions").innerText = data.drinks[0].strInstructions
      // Drink object for reference //
      console.log(data.drinks[0]);
    })
    x.style.display = "block"; 
    y.style.display = "none";
 
})

// click event for name search //
cheers.addEventListener('click', function chosenDrink() {
  
  var searchValue = userSearch.value.trim();
  searchHistory.push(searchValue);
  var chosenApi = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchValue
  fetch(chosenApi).then(function (response) {
    return response.json();
  })
  .then(function (data) {

      // create a random value to pick a randokm version of the drink selected //
    var rand = Math.floor(Math.random() * data.drinks.length);

    document.getElementById("randomName").innerText = data.drinks[rand].strDrink
      document.getElementById("ingredients1").innerText = data.drinks[rand].strIngredient1
      document.getElementById("ingredients2").innerText = data.drinks[rand].strIngredient2
      document.getElementById("ingredients3").innerText = data.drinks[rand].strIngredient3
      document.getElementById("ingredients4").innerText = data.drinks[rand].strIngredient4
      document.getElementById("ingredients5").innerText = data.drinks[rand].strIngredient5
      document.getElementById("ingredients6").innerText = data.drinks[rand].strIngredient6
      document.getElementById("ingredients7").innerText = data.drinks[rand].strIngredient7
      document.getElementById("ingredients8").innerText = data.drinks[rand].strIngredient8
      document.getElementById("ingredients9").innerText = data.drinks[rand].strIngredient9
      document.getElementById("ingredients10").innerText = data.drinks[rand].strIngredient10
      document.getElementById("ingredients11").innerText = data.drinks[rand].strIngredient11
      document.getElementById("ingredients12").innerText = data.drinks[rand].strIngredient12
      document.getElementById("ingredients13").innerText = data.drinks[rand].strIngredient13
      document.getElementById("ingredients14").innerText = data.drinks[rand].strIngredient14
      document.getElementById("ingredients15").innerText = data.drinks[rand].strIngredient15
      document.getElementById("glassType").innerText = data.drinks[rand].strGlass + " recommended"
      document.getElementById("instructions").innerText = data.drinks[rand].strInstructions
    console.log(data.drinks[0]);

  })
    x.style.display = "block"; 
    y.style.display = "none";
    setDrinks();
    renderDrinks();

 }) 

 function renderDrinks() {
  $(drinkList).html("");

  for (var i = 0; i < searchHistory.length; i++) {
        //var drinkName = searchHistory[i];

        //var li = document.createElement("p");
        //$(li).html("<span>" + drinkName + "</span>");
      // $(li).attr("drink-index", i);

       // $(drinkList).append(li);
        console.log(drinkList);
        if(searchHistory[0] !== undefined){
          console.log("here 0"); 
          document.getElementById("drink-list1").innerHTML = searchHistory[0];
          drink1.style.display = "inline";  
            
        }
        if(searchHistory[1] !== undefined){
          console.log(searchHistory[1]); 
          document.getElementById("drink-list2").innerHTML = searchHistory[1];
          drink2.style.display = "inline";    
        }
        if(searchHistory[2] !== undefined){
          document.getElementById("drink-list3").innerHTML = searchHistory[2];
          drink3.style.display = "inline";  
            
        }
        if(searchHistory[3] !== undefined){
          document.getElementById("drink-list4").innerHTML = searchHistory[3];
          drink4.style.display = "inline";  
            
        }
        if(searchHistory[4] !== undefined){
          document.getElementById("drink-list5").innerHTML = searchHistory[4];
          drink5.style.display = "inline";  
            
        }
        if(searchHistory[5] !== undefined){
          document.getElementById("drink-list6").innerHTML = searchHistory[5];
          drink6.style.display = "inline";  
            
        }
        if(searchHistory[6] !== undefined){
          document.getElementById("drink-list7").innerHTML = searchHistory[6];
          drink7.style.display = "inline";      
        }
    }
    if(searchHistory.length === 7){
      clearAll(); 
    }
    
}

function clearAll(){
  localStorage.removeItem("drinkNames"); //remove that drink from the list 
      drink1.style.display = "none"; 
      drink2.style.display = "none"; 
      drink3.style.display = "none"; 
      drink4.style.display = "none"; 
      drink5.style.display = "none"; 
      drink6.style.display = "none"; 
      drink7.style.display = "none"; 
      init(); 
}

 function setDrinks() {
  localStorage.setItem("drinkNames", JSON.stringify(searchHistory));
}

 // bouncing back button in the corner after searching //
 function showTop() {
  x.style.display = "none";
    y.style.display = "block";
 }

 function init() {
  var storedDrink = JSON.parse(localStorage.getItem("drinkNames"));

  if (storedDrink !== null) {
    searchHistory = storedDrink;
  }
  else {
    searchHistory = []; 
  }
  renderDrinks();
 }
 init();

 // When the "Clear" button is clicked on the screen 
$("#clear-button").click(() => {
  localStorage.removeItem("drinkNames"); //remove that drink from the list 
  drink1.style.display = "none"; 
  drink2.style.display = "none"; 
  drink3.style.display = "none"; 
  drink4.style.display = "none"; 
  drink5.style.display = "none"; 
  drink6.style.display = "none"; 
  drink7.style.display = "none"; 
  //console.log("clear button clicked")
  init(); 
});
