Vue.component('Home', {
    template: `<section class='home' v-bind:style='cssObj'>
    <div class='home-header'>
        <h1>Frases de Star Wars</h1>
        <Botons v-on:currentSentence="selectItem($event)" :activeItem="activeItem" :frasesLength="frases.length"></Botons>
    </div>
    <div class="home-body">
        <Escena v-for="(frase, index) in frases" :key="index" :frase="frase" class="(active: === activeItem)"></Escena>
    </div>
    </section>`,
    data() {
        return {
            activeItem: 0,
            imagenes: [
                'url("img/roster.jpeg")',
                'url("img/obiwan.jpeg")',
                'url("img/luke.jpeg")',
                'url("img/quigon.webp")',
                'url("img/yoda1.webp")',
                'url("img/yodaforce.jpeg")',
            ],
            ccsObj: {
                background: 'url("img/roster.jpeg")',
            },
        }
    },
    props: ['frases'],
    methods: {
        selectItem(index) {
            this.activeItem = index
            this.cssObj.background === this.imagenes[index]
        }
    }
})