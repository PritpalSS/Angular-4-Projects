import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
	recipes: State
}

export interface State {
	recipes: Recipe[];
}

const initialState: State = {
	recipes: [
  	new Recipe('A Test Recipe', 'This i simply a test', 'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg', [new Ingredient('Cheese', 2), new Ingredient('Fries', 5)]),
    new Recipe('Another Test Recipe', 'This i simply a test', 'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg', [new Ingredient('Buns', 2), new Ingredient('Vegs', 4)])
  ]
};

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
	switch (action.type) {
		case (RecipeActions.SET_RECIPES):
			return {
				...state,
				recipes: [...action.payload]
			};
		case (RecipeActions.ADD_RECIPE):
			return {
				...state,
				recipes: [...state.recipes, action.payload]
			};
		case (RecipeActions.UPDATE_RECIPE):
			const recipe = state.recipes[action.payload.index];
			const updatedRecipe = {
				...recipe,
				...action.payload.updatedRecipe
			};
			const recipes = [...state.recipes];
			recipes[action.payload.index] = updatedRecipe;
			return {
				...state,
				recipes: recipes
			};
		case (RecipeActions.DELETE_RECIPE):
			const oldRecipes = [...state.recipes];
			oldRecipes.splice(action.payload, 1);
			return {
				...state,
				recipes: oldRecipes
			};
		default:
			return state;
	}
}