import Vue from 'vue'

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
    // template:`<div>
    //     <span>123</span>
    //     <span>456</span>
    // </div>`,
    // render(h){
    //     return h('div',{},[
    //         h('comp',{},[
    //             h('span',this.$slots.div1,'123'),
    //             h('span',this.$slots.div2,'456')
    //         ])
    //     ]);
    // },
    data(){
        return {
            text:"父组件"
        }
    }
})