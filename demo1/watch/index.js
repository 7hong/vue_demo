import Vue from 'vue'

new Vue({
    el: '#root',
    template:`<div>
        <div>{{num}}</div>
        <div>{{obj.name}}</div>
        <div>onj name:<input type="text" v-model="obj.name" /></div>
        <div>num:<input type="text" v-model="num" /></div>
        <div>
           // 控制一列多选框
            <input type="checkbox" :value="1" v-model="arr" />
            <input type="checkbox" :value="2" v-model="arr" />
            <input type="checkbox" :value="3" v-model="arr" />
        </div>
        <div>
        //单选框
            picked:{{piccked}}
            <input type="radio" :value="1" v-model="piccked" />
            <input type="radio" :value="2" v-model="piccked" />
            <input type="radio" :value="3" v-model="piccked" />
        </div>
    </div>
    `,
    data:{
        num:0,
        obj:{
            name:''
        },
        arr:[0,1,3,2],
        piccked:""
    },
    watch:{
        obj(){
            console.log(old)
        },
        'obj.name'(){
            console.log("name change...")
        },
        arr(){
            console.log(this.arr)
        }
    }
})