const recipe = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "Veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "Non-Veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "Veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "Non-Veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "Non-Veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "Veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "Veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "Non-Veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "Veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "Non-Veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "Veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "Non-Veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "Veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "Non-Veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "Veg",
        "isLiked": false,
        "rating": 4.9
    }
];

const searchBar = document.querySelector("#search");
const filteringDataVisisble = document.querySelector(".filteringDataVisisble");


function recipeCardsMaking(recipe){
    let makingDivCard = document.createElement("div");
    makingDivCard.setAttribute("class","cardSquare");
    makingDivCard.innerHTML=`
    <img src="${recipe.imageSrc}" alt="recipe.name" class="cardImageSizing">
    <div class="cardDetials">
       <p class="vegAreNonVeg">${recipe.type}</p>
       <div class="nameAndStarDivid">
         <h3 id="textSizing">${recipe.name}</h3>
         <div id="startRating">
         <p class="startColorChange">★</p>
         <span class="racipeRating">${recipe.rating}</span>
         </div>
       </div>
       <div class="timeAndLikes">
          <p class="timeColorChange">${recipe.time}</p>
          <div>
          <i class="loveColorChange fa-regular fa-heart"></i>
          <i class="fa-solid fa-comment-dots"></i>
          </div>
       </div>
    <div/>
    `;
    filteringDataVisisble.appendChild(makingDivCard);
}

function addingCards(recipeCardsDisplay){
    console.log("hi");
    filteringDataVisisble.innerHTML="";
    recipeCardsDisplay.forEach((recipe)=>{
       recipeCardsMaking(recipe);
    });
}



addingCards(recipe);



searchBar.addEventListener("keyup",()=>{
    console.log("hi");
    console.log(searchBar.value);
});













const menu = document.querySelector("#menu");
const menuShow = document.querySelector("#menuShow");
const deleteMenu = document.querySelector("#deleteMenu");

menu.addEventListener("click",()=>{
    console.log("hi");
    menuShow.classList.toggle("hide");
});

deleteMenu.addEventListener("click",()=>{
    menuShow.classList.toggle("hide");
});



