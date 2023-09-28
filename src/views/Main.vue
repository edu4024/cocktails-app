<template>
	<div class="container">
		<div class="container-sidebar">
			<SideBar :cocktails="cocktails" />
		</div>
		<router-view />
	</div>
</template>

<script>
import SideBar from '@/components/SideBar';
import { mapGetters } from 'vuex';
export default {
	name: 'Main',
	components: {
		SideBar
	},
	computed: {
		...mapGetters({
			cocktails: 'getCocktails'
		})
	}
};
</script>

<style lang="scss" scoped>
$sidebar-background: #71b1e0;

.container {
	display: flex;
	height: auto;

	.container-sidebar {
		height: 100vh;
		background: $sidebar-background;
	}
}
</style>
