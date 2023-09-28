<template>
	<figure class="image-wrapper">
		<img class="image-item" :src="source" loading="lazy" alt="cocktail image">
	</figure>
</template>

<script>
export default {
	name: 'ImageItem',
	props: {
		source: {
			type: String,
			required: true
		}
	}
};
</script>

<style scoped>
.image-item {
	width: 300px;
	height: 15%;
}
@media only screen and (max-width: 600px) {
	.image-item {
		width: 40vw;
		height: 20vh;
	}
}
</style>
