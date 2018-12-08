import Vue from 'vue'

//********************组件传参数 写法一************************* *//
/*
const Comp = {
    props:{
        num:{
            type:Number
        },
        addf:{
            type:Function
        }
    },
    template:`<div>
    <span>num:{{num}}</span>
    <input type="text" v-model.number="incre" />
    <button @click="add" >ADD</Button>
    </div>
    `,
    data(){
        return {
            // num:0,
            incre:2
        }
    },
    methods:{
        add(){
            this.addf(this.incre);
        }
    }
}
// Vue.component('Comp',Comp)
new Vue({
    components:{Comp},
    el: "#root",
    template:`<div>
    <Comp :num="num" :addf="addf"></Comp>
    </div>
    `,
    data(){
        return {
            num:0
        }
    },
    methods:{
        addf(incre){
            this.num+=incre;
        }
    }

})

*/

const Comp = {
    props:{
        num:{
            type:Number
        }
    },
    template:`<div>
    <span>num:{{num}}</span>
    <input type="text" v-model.number="incre" />
    <button @click="add" >ADD</Button>
    <button @click="change" >直接改变父组件的值</Button>
    </div>
    `,
    data(){
        return {
            incre:2
        }
    },
    methods:{
        add(){
           this.$emit('add1',this.incre)
        },
        change(){
            this.$parent.num++;//改变父组件的值
        }
    }
}
Vue.component('Comp',Comp)
new Vue({
    el: "#root",
    template:`<div>
    <Comp :num="num" @add1="addf"></Comp>
    </div>
    `,
    data(){
        return {
            num:0
        }
    },
    methods:{
        addf(incre){
            this.num+=incre;
        }
    }

})
