import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import MyContacts from '../pages/MyContacts.vue';
import MyProjects from '../pages/MyProjects.vue';
import PersonalData from '../pages/PersonalData.vue';

const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'main',
            component: HomePage
        },
        {
            path: '/home',
            name: 'home',
            component: HomePage
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: MyContacts
        },
        {
            path: '/project',
            name: 'project',
            component: MyProjects
        },
        {
            path: '/personal',
            name: 'personal',
            component: PersonalData
        },
        
    ],
    history: createWebHashHistory()
})



export default router;