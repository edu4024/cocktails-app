import axios from 'axios';
export default {
	state: {
		cocktailList: [
			{ name: 'margarita', code: 'margarita' },
			{ name: 'mojito', code: 'mojito' },
			{ name: 'a1', code: 'a1' },
			{ name: 'kir', code: 'kir' }
		],
		cocktail: {},
		cocktailsHistory: []
	},
	getters: {
		getCocktails(state) {
			return state.cocktailList;
		},
		getCocktail(state) {
			return state.cocktail;
		}
	},
	actions: {
		async getCocktail(context, code = 'margarita') {
			const cocktail = context.state.cocktailsHistory.find(item => item.strDrink.toLowerCase() === code);
			if (cocktail) {
				context.commit('setCocktail', cocktail);
			} else {
				const { data } = await axios.get(process.env.VUE_APP_REQ_URL + code);
				context.commit('setCocktail', data.drinks[0]);
				context.commit('pushCocktails', data.drinks[0]);
			}
		}
	},
	mutations: {
		setCocktail(state, payload) {
			state.cocktail = payload;
		},
		pushCocktails(state, payload) {
			state.cocktailsHistory.push(payload);
		}
	}
};
