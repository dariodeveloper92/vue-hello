// Vue js

Vue.config.devtools = true; // scrivere per attivare l'estenzione sul browser

//Consegna:
//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

const title = new Vue (
    {
        el: '#root',
        data: {
            message: '  Example title'
        }
    }
)


//Bonus:
//Aggiungere alla pagina un’immagine, presa anch’essa da un data.
