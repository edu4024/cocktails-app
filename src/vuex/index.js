import Vue from 'vue';
import Vuex from 'vuex';
import cocktailModule from '@/vuex/cocktailModule';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		cocktailModule
	}
});
