import Vue from 'vue';
import VueRouter from 'vue-router';
import Description from '@/components/Description';
import Error from '@/components/Error';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: { name: 'cocktail', params: { id: 'margarita' } },
		name: 'home',
		component: Description,
		children: [
			{
				path: '/:id',
				component: Description,
				name: 'cocktail'
			}
		]
	},
	{
		path: '/404',
		component: Error,
		name: '404'
	},
	{
		path: '*',
		redirect: { name: '404' },
		name: 'error'
	}
];

const router = new VueRouter({
	mode: 'history',
	routes
});


export default router;
