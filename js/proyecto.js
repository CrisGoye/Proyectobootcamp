//API

const url = 'https://www.themealdb.com/api/json/v1/1/random.php';

fetch(url)
    .then(response => response.json())
    .then(data => {
        const meal = data.meals[0];
        const mealDiv = document.getElementById('gallery');
        mealDiv.innerHTML = `
            <h3>${meal.strMeal}</h3>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <p>${meal.strInstructions}</p>
        `;
    })
    .catch(error => console.error('Error:', error));
