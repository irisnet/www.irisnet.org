import Vue from 'vue'
import Router from 'vue-router'

import privacy from '@/components/privacy'
import terms from '@/components/terms'
import NewManinet from '../components/NewMainnet';
import NewTestnet from '../components/NewTestnet';
import Home from "../components/Home"
Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/testnets',
                component: NewTestnet,
            },
            {
                path: '/privacy',
                name: 'privacy',
                component: privacy
            },
            {
                path: '/terms',
                name: 'terms',
                component: terms
            },
            {
                path: '/mainnet',
                component: NewManinet
            },
        ]
    })
}

