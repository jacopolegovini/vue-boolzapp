const {createApp} = Vue;
const dateTime = luxon.DateTime;

createApp({
    data() {
      return {
        currentIndex: 0,
        mineAccordionFlag: true,
        otherAccordionFlag: true,
        contacts: [
            {
                name: 'Michele',
                avatar: './img/avatar_1.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './img/avatar_2.png',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './img/avatar_3.png',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: './img/avatar_4.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: './img/avatar_5.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: './img/avatar_6.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: './img/avatar_7.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: './img/avatar_8.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ]
        }
    },

    computed: {

    },

    methods: {
        setIndex(index) {
            this.currentIndex = index;
        },

        getIndex(currentIndex) {
            return currentIndex;
        },

        getHourFormatted(messageElement) {
            // Setto la data dal formato che voglio io
            const event = dateTime.fromFormat(messageElement.date, "dd/MM/yyyy HH:mm:ss");

            // La converto in ISO
            const isoEvent = event.toISO();

            // Ritorno con quello che voglio
            const dateElement = dateTime.fromISO(isoEvent).toFormat('T');
            
            return dateElement;
        },

        addNewMessage(content) {
            // Dichiaro le variabili
            const newObjectInput = {
                date: dateTime.now(),
                message: content,
                status: 'sent'
            }
            const newAnswer = {
                date: dateTime.now(),
                message: 'Ok!',
                status: 'received'
            }

            this.contacts[this.currentIndex].messages.push(newObjectInput)
            this.newMessageInput = '';

            // Funzione per la risposta
            const incrementTime = () => {
                this.contacts[this.currentIndex].messages.push(newAnswer)
            }

            // Dopo un secondo parte
            const timer = setTimeout(incrementTime, 1000)
        },

        searchName(searchedName) {
            // Crea un array temporaneo per memorizzare i risultati della ricerca
            let matchingContacts = [];

            // Usa forEach per iterare sui contatti senza modificare l'array
            this.contacts.forEach(contact => {
                if (contact.name.includes(searchedName)) matchingContacts.push(contact);
            });

            // Stampa i risultati trovati
            console.log(matchingContacts);

            // Se desideri aggiornare i contatti attivi con quelli che corrispondono alla ricerca
            this.contacts = matchingContacts;

            // TODO E se voglio cancellare quanto scritto e rifare una ricerca?
            // if (matchingContacts.length === 0) this.contacts = this.supportArray;
        },

        getMineExtraMenu() {
            return this.mineAccordionFlag = !this.mineAccordionFlag; 
        },

        getOtherExtraMenu() {
            return this.otherAccordionFlag = !this.otherAccordionFlag; 
        },

        deleteMessage(getIndex, index) {
            this.contacts[getIndex].messages.splice(index, 1);
        }
    }
}).mount('#app')