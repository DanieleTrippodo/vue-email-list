const app = Vue.createApp({
    data() {
        return {
            emails: [] // Array per memorizzare le email generate
        };
    },



    methods: {
        // Metodo per generare una singola email
        generateEmail() {
            return axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => { return response.data.response; } );
        },

        generateEmails() {
            this.emails = []; // Resetta l'array emails
            for (let i = 0; i < 10; i++) {
                this.generateEmail().then(email => {
                    if (email) {
                        this.emails.push(email); // Aggiungi l'email all'array se non è null
                    }
                });
            }
        }
}});


// nella versione precedente non funzionava perchè mi ero dimenticato di chiudere la instanza Vue...
app.mount('#app');