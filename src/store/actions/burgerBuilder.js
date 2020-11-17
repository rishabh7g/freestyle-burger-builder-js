import * as actionTypes from "./actions";
import axios from "../../z-axios/axios-orders";

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name,
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};

export const setIngredients = (ing) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ing
  }
}

export const fetchIngredientFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  }
}

export const initIngredients = () => {
  return dispatch => {
     axios
      .get("https://react-my-burger-d2172.firebaseio.com/ingredients.json")
      .then((response) => {
        dispatch(setIngredients(response.data))
      })
      .catch((error) => {
        dispatch(fetchIngredientFailed());
      });
  }
}