const app = Vue.createApp({
    data() {
      return {
        emails: [] // Array per memorizzare le email generate
      };
    }
});




methods: {
    // Metodo per generare una singola email
    generateEmail() {

        return axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                return response.data.response; // Ritorna l'email ottenuta
            });
    }
}