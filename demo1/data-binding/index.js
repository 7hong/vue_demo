import Vue from 'vue'

const app = new Vue({
    el:'#root',
    template: `<div>
    <div>{{!num}}</div>
    <div>{{Date.now()}}</div>
    </div>
    `,
    data:{
        num:100
    }
})