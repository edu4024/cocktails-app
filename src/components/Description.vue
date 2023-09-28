<template>
	<div v-if="isDataLoaded" class="cocktail">
		<div class="cocktail-information">
			<div class="cocktail-description">
				<h2>{{ cocktail.strDrink }}</h2>
				<p>{{ cocktail.strCategory }}</p>
				<p>{{ cocktail.strAlcoholic }}</p>
				<p>{{ cocktail.strGlass }}</p>
				<h3>Instructions</h3>
				<p>{{ cocktail.strInstructions }}</p>
			</div>
			<div class="cocktail-image">
				<ImageItem :source="cocktail?.strDrinkThumb" />
			</div>
		</div>
		<div class="cocktail-recipe">
			<h3>List of ingredients</h3>
			<div class="items-list">
				<div>
					<ul v-for="ingredient in ingredients" :key="ingredient">
						<li>{{ ingredient }}</li>
					</ul>
				</div>
				<div>
					<ul v-for="portion in portions" :key="portion">
						<li>{{ portion }}</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import ImageItem from '@/components/ImageItem';

export default {
	name: 'Description',
	components: {
		ImageItem
	},
	data: () => ({
		isDataLoaded: false,
		availablePath: ['margarita', 'mojito', 'a1', 'kir'],
		ingredients: [],
		portions: []
	}),
	computed: {
		...mapGetters({
			cocktail: 'getCocktail'
		})
	},
	watch: {
		'$route.params.id': {
			handler: async function (newVal) {
				if (this.availablePath.includes(newVal)) {
					await this.getCocktail(newVal);
					this.mapItems(this.cocktail);
					this.isDataLoaded = true;
					return;
				}
				return this.$router.push({ name: '404' });
			},
			immediate: true
		}
	},
	methods: {
		...mapActions(['getCocktail']),
		mapItems (cocktail) {
			this.ingredients = [];
			this.portions = [];
			for (const [key, value] of Object.entries(cocktail)) {
				if (key.includes('strIngredient') && value) {
					this.ingredients.push(value);
				} else if (key.includes('strMeasure') && value) {
					this.portions.push(value);
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.cocktail-information {
	display: flex;
	justify-content: space-between;
}

.cocktail {
	margin: 0 5vw;
}

.cocktail-recipe {
	display: flex;
	flex-direction: column;
	width: 40%;

	.items-list {
		display: flex;
		justify-content: space-between;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}
}



@media only screen and (max-width: 600px) {
	.cocktail-recipe {
		width: 80%;
	}
	.cocktail-information {
		flex-direction: column;
	}
}
</style>
