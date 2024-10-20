import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';
import ServiceView from '@/views/ServiceView.vue';
import PortfolioView from '@/views/PortfolioView.vue';
import ContactView from '@/views/ContactView.vue';
import InfoView from '@/views/InfoView.vue';
import ProductionView from '@/views/Single/ProductionView.vue';
import LettersView from '@/views/Single/LettersView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: MainView,
		},
		{
			path: '/service',
			name: 'service',
			component: ServiceView,
		},
		{
			path: '/portfolio',
			name: 'portfolio',
			component: PortfolioView,
		},
		{
			path: '/contact',
			name: 'contact',
			component: ContactView,
		},
		{
			path: '/info',
			name: 'info',
			component: InfoView,
		},
		{
			path: '/production',
			name: 'production',
			component: ProductionView,
		},
		{
			path: '/letters',
			name: 'letters',
			component: LettersView,
		},
	],
});

export default router;
