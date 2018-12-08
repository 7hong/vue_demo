import Vue from 'vue';

const app = new Vue({
    el: '#root',
    template:'<div>Hello Vue {{num}} {{obj.age}}</div>',
    data:{
        num:1,
        obj:{}
    },
    watch:{
        num(newNum, oldNum){
            console.log(newNum);
        }
    }
})

//1、Vue实例

// setInterval(() => {
//     // app.num += 1
//     app.$data.num += 1
// },1000)

// console.log(app)

//------------------------触发事件---------------------------//
// app.$on("add",(a,b,obj,callback)=>{
//     console.log("触发"+a+" "+b)
//     console.log(obj);
//     callback();
// })
// app.$once("add",(a,b,obj,callback)=>{
//     console.log("触发"+a+" "+b)
//     console.log(obj);
//     callback();
// })

// setInterval(() =>{
//     app.$emit("add",'1','2',{name:"jiangiqhong",age:13},function(){
//         console.log("传递函数函数")
//     })
// },2000)
// -------------------app.$forceUpdate---------------------//

// let i = 0;
// setInterval(()=>{
//     i++;
//     app.obj.age = i;
//     //强制更新
//     app.$forceUpdate();
//     //设置值
//     app.$set(app.obj, 'a',i)
// },1000)

// -------------------app.$nextTick()---------------------//
// app.$nextTick(()=>{

// })

//原生指令
/***
 * v-bind
 * v-text
 * v-html
 * v-show display:none
 * v-if false的话直接将文档节点去掉
 * v-for v-for="(item,index) in items" :key="唯一的值"  
 *       v-for="(val,key) in obj"
 * v-on  v-on:click="" == @click=""
 * v-model
 *  例子：用一个数组来控制一列单选框的状态。见 ../watch/index.js
 * 
 * 
 *  x修饰符：
 *      v-model.number
 *      v-model.trim
 *      v-model.lazy
 * v-pre
 * v-cloak 
 * v-once 只渲染一次
 * 
 */