const app = new Vue({
    el: "#app",
    data (){
        return{
            autor: "Manz",
        }
    },
    mounted (){
                console.log("***before mounted****")

                let divfondo = this.$refs.fondo;
                console.log(this.$refs.fondo);
                // divfondo.style.backgroundImage="url('/1.webp')";
                // divfondo.style.height= "1000px"
                // divfondo.style.backgroundRepeat= 'no-repeat'
                console.log(document.body)
                document.body.style.background="url('/1.jpg')"

        
    }
})