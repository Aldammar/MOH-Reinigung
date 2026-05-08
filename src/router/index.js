import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ServicesView from '../views/ServicesView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
const routes = [
    { path: '/MOH-Reinigung', name: 'Home', component: HomeView },
    { path: '/leistungen', name: 'Services', component: ServicesView },
    // Service-Seiten als eigene flache Routes
    { path: '/leistungen/baureinigung', name: 'Baureinigung', component: () => import('../views/services/BaureinigungView.vue') },
    { path: '/leistungen/wohnungsreinigung', name: 'Wohnungsreinigung', component: () => import('../views/services/WohnungsreinigungView.vue') },
    { path: '/leistungen/reinigungsunternehmen', name: 'Reinigungsunternehmen', component: () => import('../views/services/ReinigungsunternehmenView.vue') },
    { path: '/leistungen/glasreinigung', name: 'GlasreinigungDetail', component: () => import('../views/services/GlasreinigungView.vue') },
    { path: '/leistungen/treppenhausreinigung', name: 'Treppenhausreinigung', component: () => import('../views/services/TreppenhausreinigungView.vue') },
    { path: '/leistungen/aussenreinigung', name: 'Aussenreinigung', component: () => import('../views/services/AussenreinigungView.vue') },
    { path: '/leistungen/haushaltsaufloesung', name: 'Haushaltsaufloesung', component: () => import('../views/services/HaushaltsaufloesungView.vue') },
    { path: '/leistungen/winterdienst', name: 'Winterdienst', component: () => import('../views/services/WinterdienstView.vue') },
    { path: '/leistungen/gartenpflege', name: 'Gartenpflege', component: () => import('../views/services/GartenpflegeView.vue') },
    { path: '/leistungen/bueroreinigung', name: 'Bueroreinigung', component: () => import('../views/services/BueroreinigungView.vue') },
    { path: '/leistungen/pflege-objekten', name: 'PflegeObjekten', component: () => import('../views/services/PflegeObjektenView.vue') },
    { path: '/leistungen/hotel-restaurant-reinigung', name: 'HotelRestaurantReinigung', component: () => import('../views/services/HotelRestaurantReinigungView.vue') },
    { path: '/ueber-uns', name: 'About', component: AboutView },
    { path: '/kontakt', name: 'Contact', component: ContactView }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    }
});
export default router;
//# sourceMappingURL=index.js.map