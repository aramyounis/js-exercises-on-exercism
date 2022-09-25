/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(time) {
  if (time > 0) return "Not done, please wait.";
  else if (time == 0) return "Lasagna is done.";
  else return "You forgot to set the timer.";
}

export function preparationTime(layer, time = 2) {
  return layer.length * time;
}

export const quantities = (layer) => {
  var res = {
    noodles: 0,
    sauce: 0,
  };

  for (var el in layer) {
    if (layer[el] === "sauce") res.sauce += 0.2;
    else if (layer[el] === "noodles") res.noodles += 50;
  }

  return res;
};

export const addSecretIngredient = (friendsList, myList) => {
  myList.push(friendsList[friendsList.length - 1]);
};

export const scaleRecipe = (recipe, numPortions = 2) => {
  var res = {};

  for (var pr in recipe) {
    res[pr] = Math.round((recipe[pr] / 2) * numPortions * 100) / 100;
  }

  return res;
};
