import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

let router = new Router({
    mode: 'hash',
    base:process.env.BASE_URL,
    scrollBehavior:(to,from,position)=>{
        if (position) {
            return position;
        } else {
            return {x:0,y:0}
        }
    },
    routes: [
        {
            path:'/',
            redirect: '/index'
        },
        {
            path: '/index',
            name:'index',
            redirect: '/index/plan',
            component: ()=>import('./pages/index'),
            children:[
                {
                    path:'plan1',
                    name:'plan1',
                    meta:{},
                    component: ()=>import('./pages/plan/1')
                    
                },
                {
                    path:'plan2',
                    name:'plan2',
                    meta:{},
                    component: ()=>import('./pages/plan/2')
                    
                },
                {
                    path:'plan3',
                    name:'plan3',
                    meta:{},
                    component: ()=>import('./pages/plan/3')
                    
                },
                {
                    path:'plan4',
                    name:'plan4',
                    meta:{},
                    component: ()=>import('./pages/plan/4')
                    
                },
                {
                    path:'plan5',
                    name:'plan5',
                    meta:{},
                    component: ()=>import('./pages/plan/5')
                    
                },
                {
                    path:'plan6',
                    name:'plan6',
                    meta:{},
                    component: ()=>import('./pages/plan/6')
                    
                },
                {
                    path:'plan7',
                    name:'plan7',
                    meta:{},
                    component: ()=>import('./pages/plan/7')
                    
                },
                {
                    path:'dashboard',
                    name:'dashboard',
                    meta:{},
                    component: ()=>import('./pages/dashboard')
                    
                },
                {
                    path:'aimwall',
                    name:'aim-wall',
                    meta:{},
                    component: ()=>import('./pages/aimwall')
                    
                },
                {
                    path:'future',
                    name:'future',
                    meta:{},
                    component: ()=>import('./pages/future')
                    
                },
            ]
        }
    ]
})

export default router;
