const app = new Vue ({
    el: "#app",
    template: `
    <main>
    <Home :frases="frases">
    </Home>
    </main>`,
    template: '',
    data: {
        frases: [
            {
                id: 1,
                frase: 'Asi es como se gana una guerra, no luchando contra lo que odias, sino salvando lo que amas.',
                autor: '- Roste Tico',
            },
            {
                id: 2,
                frase: 'Quién es más loco, el loco o el loco que sigue al loco?.',
                autor: '- Obi-Wan',
            },
            {
                id: 3,
                frase: 'La guerra no lo hace a uno más grandioso.',
                autor: '- Yoda a Luke Skywalker',
            },
            {
                id: 4,
                frase: 'Concéntrate en el momento. Siente, no pienses. Usa tu instinto.',
                autor: '- Qui-Gon Jinn a Anakin Skywalker',
            },
            {
                id: 5,
                frase: 'El mierdo es el camino hacia el lado oscuro. El miedo lleva a la ira, la ira lleva al odio, el odio lleva al sufrimiento. Percibo mucho miedo en ti.',
                autor: '- Maestro Yoda',
            },
            {
                id: 6,
                frase: 'No, no lo intentes. Házlo o no lo hagas, pero no lo intentes..',
                autor: '- Maestro Yoda',
            }

        ]
    }




})