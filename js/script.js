new Vue({
    el: '#app',
    data: {
        searchQuery: '', // Milestone 2: Collegamento alla barra di ricerca
        newMessage: '', // Per il nuovo messaggio in fase di scrittura
        activeContact: null, // Milestone 3: Rappresenta il contatto attualmente selezionato
        contacts: [
            {
                name: 'Michele',
                avatar: './img/avatar_1.png',
                visible: true,
                lastSeen: '09/09/2024 10:00:00', // Data e ora dell'ultimo accesso
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
                lastSeen: '09/09/2024 10:00:00', // Data e ora dell'ultimo accesso
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
                lastSeen: '09/09/2024 10:00:00', // Data e ora dell'ultimo accesso
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
                lastSeen: '09/09/2024 10:00:00', // Data e ora dell'ultimo accesso
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
                lastSeen: '09/09/2024 10:00:00', // Data e ora dell'ultimo accesso
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
                lastSeen: '09/09/2024 10:00:00', // Data e ora dell'ultimo accesso
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
                lastSeen: '09/09/2024 10:00:00', // Data e ora dell'ultimo accesso
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
                lastSeen: '09/09/2024 10:00:00', // Data e ora dell'ultimo accesso
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

    },
    computed: {
        filteredContacts() {
            return this.contacts.filter(contact => contact.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
    },

    methods: {
        selectContact(contact) {
            this.activeContact = contact;
        },

        sendMessage() {
            if (this.newMessage.trim() === '') return;

            const newMsg = {
                date: luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss'),
                message: this.newMessage,
                status: 'sent',
                showMenu: false // Inizialmente non mostrare il menu
            };
            this.activeContact.messages.push(newMsg);
            this.newMessage = '';



            // Aggiorna l'ultimo accesso
            this.activeContact.lastSeen = luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss');

            setTimeout(() => {
                const autoReply = {
                    date: luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss'),
                    message: 'Ok!',
                    status: 'received',
                    showMenu: false // Inizialmente non mostrare il menu
                };
                this.activeContact.messages.push(autoReply);
            }, 1000);
        },
        showDeleteMenu(message) {
            // Toglie la visualizzazione del menu per gli altri messaggi
            this.activeContact.messages.forEach(msg => {
                if (msg !== message) {
                    msg.showMenu = false;
                }
            });
            // Mostra o nasconde il menu per il messaggio selezionato
            message.showMenu = !message.showMenu;
        },
        deleteMessage(message) {
            const index = this.activeContact.messages.indexOf(message);
            if (index > -1) {
                this.activeContact.messages.splice(index, 1);
            }
        },

        showMessageInfo(message) {
            alert(`Messaggio: ${message.message}\nData: ${message.date}`);
        },
        lastMessage(contact) {
            const messages = contact.messages;
            return messages.length > 0 ? messages[messages.length - 1].message : '';
        },
        lastMessageDate(contact) {
            const messages = contact.messages;
            return messages.length > 0 ? messages[messages.length - 1].date : '';
        },
        formatTime(dateStr) {
            return luxon.DateTime.fromFormat(dateStr, 'dd/MM/yyyy HH:mm:ss').toFormat('HH:mm');
        }
    }
});

function notifyMe() {
    if (!("Notification" in window)) {
        alert("Questo browser non supporta le notifiche desktop.");
    } else if (Notification.permission === "granted") {
        new Notification("Hai un nuovo messaggio!");
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                new Notification("Notifiche attivate!");
            }
        });
    }
}

document.querySelector('.attiva-notifiche').addEventListener('click', notifyMe);