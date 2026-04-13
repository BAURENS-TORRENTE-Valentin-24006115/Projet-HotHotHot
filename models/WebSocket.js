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
            this.sendMessage("Hello Server!");
        };

        this.socket.onclose = () => {
            console.log('WebSocket connection closed');
            this.connect();
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
            try {
                const data = JSON.parse(event.data);
                if (data.capteurs && Array.isArray(data.capteurs)) {
                    this.A_observers.forEach(observer => observer.updateFromWebSocket(data.capteurs));
                }
            } catch (error) {
                console.error('Error parsing WebSocket message:', error);
            }
        });
    }
}