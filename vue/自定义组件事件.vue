
<div id = "counter-event-example">
<p>{{total}}</p>
<button-counter v-on:increment="incremenTotal"></button-counter>
<button-counter v-on:increment="incremenTotal"></button-counter>
</div>

<script>
var buttoncounter ={count :0}  //测试data为对象时与方法时的不同影响

Vue.component('button-counter',{   //注册组件button-counter
    template: '<button v-on:click="incrementHandler"> {{ counter }} </button>',
   
   
   data: function(){  //函数不影响其他控件
        return {
            counter: 0
        }
    },
/* 
data : function (){  //对象会影响其他实例
   return buttoncounter
}
*/

    methods: {
        incrementHandler:function(){
            this.counter +=1
            this.$emit('increment')
        }
    },
})
new Vue({
    el: '#counter-event-example',
    data:{
        total:0
    },
    methods:{
        incremenTotal: function(){
            this.total +=1
        }
    }
})