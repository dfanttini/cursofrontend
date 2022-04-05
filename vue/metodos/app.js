const app = new Vue ({
    el: "#app",
    template: "#ejemplo",
    data: {
        titulo: "buenos dias",
        name: " te apetece",
        topic: "desayunar",
    
},

methods: {
    show: function () {
        return "Bienvenido " +
        this.name + " " + this.topic;
    
},
showName: function (nombre) {
    return "Bienvenido a mi casa " +
    nombre + " " + this.name + " " + this.topic
}
} 
});
