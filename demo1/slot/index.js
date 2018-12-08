import Vue from 'vue'

// slot 案例一
// const comp = {
//     template:  `<div>
//     {{text}}
//     <slot></slot>
//     </div>`,
//     data(){
//         return {
//             text:"子组件"
//         }
//     }
// }

// new Vue({
//     components:{comp},
//     el: '#root',
//     template:`<div>
//     <comp>
//         <span>{{text}}</span>
//     </comp>
//     </div> `,
//     data(){
//         return {
//             text:"父组件"
//         }
//     }
// })


//slot slot实例二
const comp = {
    template:  `<div>
    {{text}}
    <div :style="sty1">
        <slot name="div1"></slot>
    </div>
    <div :style="sty2">
        <slot name="div2"></slot>
    </div>
    </div>`,
    data(){
        return {
            text:"子组件",
            sty1:{
                height:"50px",
                width:"200px",
                border:"solid 1px red"
            },
            sty2:{
                height:"50px",
                width:"200px",
                border:"solid 1px"
            }
        }
    }
}

new Vue({
    components:{comp},
    el: '#root',
    template:`<div>
    <comp>
        <span slot="div1">{{text}}</span>
        <span slot="div2">{{text}}</span>
    </comp>
    </div> `,
    data(){
        return {
            text:"父组件"
        }
    }
})