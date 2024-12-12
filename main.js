function urlBase64ToUint8Array(base64String) {
	const padding = '='.repeat((4 - base64String.length % 4) % 4);
	const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
	const rawData = window.atob(base64);
	return new Uint8Array([...rawData].map(char => char.charCodeAt(0)));
}


if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
			navigator.serviceWorker.register('/service-worker.js')
					.then(registration => {
							console.log('Service Worker registered with scope:', registration.scope);
							return registration.pushManager.getSubscription()
									.then(subscription => {
											if (subscription) {
													console.log('Already subscribed:', subscription);
													return subscription;
											}

											const applicationServerKey = urlBase64ToUint8Array('BLQjCH7Oy53yXJ0ezfhEuZAeHiwNBfQQkp57rOuV2P7AoGM1dR2R47fjRFDd2xyZptxFuTPHWYM0Y8TBuMQ8Tk4');
											return registration.pushManager.subscribe({
													userVisibleOnly: true,
													applicationServerKey: applicationServerKey,
											}).then(subscription => {
													console.log('New subscription:', subscription);
													// Send subscription to your server
													return fetch('/subscribe', {
															method: 'POST',
															body: JSON.stringify(subscription),
															headers: {
																	'Content-Type': 'application/json'
															}
													});
											});
									});
					})
					.catch(error => {
							console.error('Service Worker registration failed:', error);
					});
	});
}
