// Search BY Name and first letter:

let clickSearch = () => {
	// full details display off:
	document.getElementById("full-Description").style.display = "none";

	// Old search History Delete::
	document.getElementById("searchItems").innerHTML = ``;

	// Get search value:
	let searchValue = document.getElementById("searchBox").value;

	if (searchValue === "") {
		document.getElementById("warning1").style.display = "block";
	} else {
		document.getElementById("warning1").style.display = "none";

		if (searchValue.length == 1) {
			const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchValue}`;
			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					displaySearch(data.meals);
				});
		} else {
			const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					displaySearch(data.meals);
				});
		}
	}
};

// Display Search item:

let displaySearch = data => {
	if (data == null) {
		document.getElementById("warning2").style.display = "block";
	} else {
        document.getElementById("warning2").style.display = "none";
        
        // Display search food
		data.forEach((food) => {
			let itemInformation = `

                    <div class="food" onclick="clickImage('${food.idMeal}')" >
                    	<img src="${food.strMealThumb}" alt="">
                    	<h4>${food.strMeal}</h4>
                    </div>
            `;

			const newDiv = document.createElement("div");
			newDiv.className = "item";
			newDiv.id = "item";
			newDiv.innerHTML = itemInformation;
 
			let box = document.getElementById("searchItems");
			box.appendChild(newDiv);
		});
	}
};

// click Image:

let clickImage = (id) => {
	const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			details(data.meals[0]);
		});
};


// Display Details:
let details = (fullData) => {
	document.getElementById("full-Description").style.display = "block";
	const DetailsDiv = document.getElementById("full-Description");
	 DetailsDiv.innerHTML = `
    
              <div class="row">
                  <div class="image col-md-4 "><img src="${fullData.strMealThumb}"></div>
                  <div class="description col-md-8" id = "description">
                      <h1>${fullData.strMeal}</h1>
                      <h3>Ingredient:</h3>
                      <div class="recipeDetails" id="recipeDetails">
                          <h5> ${fullData.strMeasure1} ${fullData.strIngredient1}</h5>
                          <h5>  ${fullData.strMeasure2} ${fullData.strIngredient2}</h5>
                          <h5>  ${fullData.strMeasure3} ${fullData.strIngredient3}</h5>
                          <h5>  ${fullData.strMeasure4} ${fullData.strIngredient4}</h5>
                          <h5>  ${fullData.strMeasure5} ${fullData.strIngredient5}</h5>
                          <h5>  ${fullData.strMeasure6} ${fullData.strIngredient6}</h5>
                          <h5>  ${fullData.strMeasure7} ${fullData.strIngredient7}</h5>
                          <h5>  ${fullData.strMeasure8} ${fullData.strIngredient8}</h5>
                          <h5>  ${fullData.strMeasure9} ${fullData.strIngredient9}</h5>
                          <h5>  ${fullData.strMeasure10} ${fullData.strIngredient10}</h5>
 
                      </div>
 
                  </div>
              </div>
    `;


 };
