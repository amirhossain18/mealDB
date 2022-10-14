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
  // console.log(meal)
   const mealDiv= document.createElement('div');
   mealDiv.classList.add('col')
   mealDiv.innerHTML=`
   <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
         
              <button onclick="loadMealDetails(${meal.idMeal})">Detail</button>
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

const loadMealDetails=(mealid)=>{
  const url= `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
fetch(url)
 .then(res=> res.json())
 .then(data=> displayMealsDetails(data.meals[0]))
}

const displayMealsDetails=(details)=>{
console.log(details)
const  detailsContainer= document.getElementById('detail-container')
detailsContainer.innerHTML='';
const mealDIv= document.createElement('div');
mealDIv.classList.add('card');
mealDIv.innerHTML=`
<img class="card-img-top h-50" src="${details.strMealThumb}" alt="Card image cap">
<div class="card-body">
<p class="card-text">${details.strInstructions.slice(0,200)}</p>
<a href=${details.strYoutube}> youTube</a>
</div>`
detailsContainer.appendChild(mealDIv)
}
loadData ('')