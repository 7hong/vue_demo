import Router from 'vue-router'

import routes from './routes'



export default () => {
    return new Router({
        routes,
        mode: 'history',
        // scrollBehavior(to, from, savePosition) {
        //     if(savePosition) {
        //         return savePosition;
        //     } else {
        //         return {x:0,y:0};
        //     }
        // }
        // parseQuery(query){
        //     //字符串转对象
        // },
        // stringifyQuery(obj) {
        //     //对象转字符串
        // },
        beforeEnter(to,form,next){
            next()
        }

    })
}
