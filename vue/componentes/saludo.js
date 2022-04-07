const app = new Vue({
    el: "#my-app",
    data:{
        firstname: 'Dorian',
        lastname:  'Fanttini',
    },

    methods: {
        onAdd(){
            this.count += 1
        }
    }
})