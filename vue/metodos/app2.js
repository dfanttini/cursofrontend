const app = new Vue ({
    el: "#app",
    template: "#ejemplo",
    data: {
        mostrar: true,
        mensaje: "bienvenido a vue",
        imagen: "img/vue.png",
    
},

methods: {
    toggleMostrar:  function () {
        alert("mostrar " + this.mostrar);
        this.mostrar = !this.mostrar;
    }
} })