const app = Vue.createApp({
    data() {
        return {
            title: "Contador App - Vue",
            count: 0,
        };
    },
    methods: {
        modCount(instruccion = 'add', limit = 1) {
            if (instruccion === 'dis')
                this.count -= limit
            else
                this.count += limit
        },
    }
});


//ese limit es para multiples variables, pero puedo omitirla y aumentar abajo en el this
//modCount(instruccion = 'add', limit = 1)