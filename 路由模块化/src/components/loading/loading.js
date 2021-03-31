import vue from 'vue'
import login from '../loading/loading.vue'

const Login = vue.extend(login)

const $loading = new Login({
    el: document.createElement('div')
})

var fn = {
    show(){
        $loading.show = true
        document.body.appendChild($loading.$el)
    },
    hide(){
        $loading.show = false
    }
}

export default {
    install(){
        console.log(1);
        if(!vue.fn){
            vue.fn = fn
        }
        vue.mixin({
            created(){
                this.fn = vue.fn
            }
        })
    }
}