class WebSocketHandler {
    constructor(S_url) {
        this.S_url = S_url;
        this.socket = null;
        this.A_observers = [];
    }

    connect() {
        this.socket = new WebSocket(this.S_url);

        this.socket.onopen = () => {
            console.log('WebSocket connection established');
        };

        this.socket.onmessage = (event) => {
            console.log('Message received:', event.data);
        };

        this.socket.onclose = () => {
            console.log('WebSocket connection closed');
        };
    }

    sendMessage(message) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(message);
        } else {
            console.error('WebSocket is not open. Unable to send message.');
        }
    }

    disconnect() {
        if (this.socket) {
            this.socket.close();
        }
    }

    addObserver(observer) {
        this.A_observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.A_observers.indexOf(observer);
        if (index > -1) {
            this.A_observers.splice(index, 1);
        }
    }

    notifyObservers() {
        this.socket.addEventListener("message", (event) => {
            console.log("Voici un message du serveur", event.data);
            this.A_observers.forEach(observer => observer.update(event.data));
        });
    }
}