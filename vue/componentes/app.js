const app = new Vue({
    el: "#my-app",
    data:{
        name: 'Dorian',
        mensaje: 'este es un ejemplo de componente',
        count: 0,
    },

    methods: {
        onAdd(){
            this.count += 1
        }
    }
})