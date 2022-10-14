const loadData = (search)=>{
  const url=  `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`  
  fetch(url)
    .then(res=> res.json())
    .then(data=> displayMeals(data.meals))
}

const displayMeals = meals=> {
 
 const mailsContent= document.getElementById('mealsContainer')
 mailsContent.innerHTML='';
 meals.forEach(meal=>{
  console.log(meal)
   const mealDiv= document.createElement('div');
   mealDiv.classList.add('col')
   mealDiv.innerHTML=`
   <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            </div>
          </div>
   `
   mailsContent.appendChild(mealDiv)
 })
}

const scerchFood=()=>{
  const searchField= document.getElementById('text-field')
  const searchText= searchField.value
  loadData (searchText)
  searchField= '';
}



loadData ('a')