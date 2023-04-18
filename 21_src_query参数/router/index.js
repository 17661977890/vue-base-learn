import VueRouter from 'vue-router' 
// 引入组件 
import About from '../pages/About' 
import Home from '../pages/Home'  
import News from '../pages/News'
import Message from '../pages/Message'    
import Details from '../pages/Details'    
// 创建并暴露一个路由器 
export default new VueRouter({  
    routes:[   
        {   
            path:'/about',    
            component:About   
        },   
        {    
            path:'/home',   
            component:Home,
            children: [{
                // 注意这里不能加/
                path: 'news',
                component: News
            }, {
                path: 'message',
                component: Message,
                children:[{
                    path: 'detail',
                    component: Details
                }]
            }]
        }  
    ] 
})