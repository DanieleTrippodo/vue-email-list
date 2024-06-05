axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
  .then(response => {
    console.log(response.data.response); // Stampa l'email ottenuta
  });