class ViconService {
	/**
	 * Creates a ViconService and provides a function that processes
	 * data from Vicon in a JS object format.
	 *
	 * @param url A ws:// url pointing to the Vicon WebSocket.
	 * @param onReceive A function that processes the received data.
	 */
	constructor(url, onReceive) {
		this.client = new WebSocket(url);
		this.client.onmessage = (e) => {
			// Process the vicon data here
			console.error(e.data);
			onReceive();
		};
	}

	/**
	 * Sends data to the server.
	 *
	 * @param data A string to send to the server.
	 */
	send(data) {
		this.client.send(data);
	}

	/**
	 * Closes the connection to the Vicon. This should always be
	 * called before removing the object.
	 */
	close() {
		this.client.close();
	}
}

export default ViconService;
