var favoriteFood = "grapes";

var foodThoughts = function () {
  console.log("original favourite food: " + favoriteFood);
  var favoriteFood = "sushi";
  console.log("New favorite food: " + favoriteFood);
};

foodThoughts();

var foodThoughts = function () {
  console.log("original favourite food: " + favoriteFood);
};
