<template>
	<div class="sidebar">
		<h3>{{ title.toUpperCase() }}</h3>
		<div v-for="cocktail in cocktails" :key="cocktail.code" class="menu-items">
			<router-link
				:to="{ name: 'cocktail', params: { id: cocktail.code } }"
				active-class="active"
				tag="button"
				exact
				class="side-btn"
			>
				<div class="link-container">
					<h3>{{ cocktail.name }}</h3>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SideBar',
	props: {
		cocktails: {
			type: Array,
			required: true
		}
	},
	data: () => ({
		title: 'what we drink?'
	})
};
</script>

<style lang="scss" scoped>
$sidebar-hover-background: #eff9ff;
$sidebar-active-background: #b7dcf6;

.sidebar {
	min-width: 15vw;
	text-align: center;
}

.side-btn {
	width: 80%;
	margin: 5px 15px;
	border: none;
	border-radius: 5px;
	&:hover {
		background-color: $sidebar-hover-background;
	}
}

.active {
	background-color: $sidebar-active-background;
}
</style>
