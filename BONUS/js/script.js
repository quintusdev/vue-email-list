const { createApp } = Vue;

createApp({
    data() {
        return {
            mail: '',
            arrayMail: []
        }
    },
    mounted() {
        //richiamo la funzione per generare le mail
        this.RandomMail();
    },
    methods: {
        RandomMail(){
            //Creo un for che mi generi le mail casualmente attraverso l'API fornito
            for(let i=0; i<10; i++){
                //richiamo l'API axions inserendo l'URL
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    //pusho all'interno dell'array la mail creata
                    this.arrayMail.push(result.data.response);
                });
            }
        }
    },
}).mount('#app');