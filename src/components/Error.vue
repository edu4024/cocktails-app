<template>
	<div class="errorPage">
		<h1>404 Not found</h1>
		<router-link
			to="/"
			tag="button"
			exact
			class="side-btn"
		>
			Home
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'Error'
};
</script>

<style lang="scss" scoped>
$sidebar-hover-background: #eff9ff;
.errorPage {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

.side-btn {
	width: 80px;
	height: 50px;
	margin: 5px 15px;
	border: none;
	border-radius: 5px;
	&:hover {
	 background-color: $sidebar-hover-background;
 }
}
</style>
