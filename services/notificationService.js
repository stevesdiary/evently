// const Subscription = require('../models/subscription');
// // const { pushNotification, subscribe } = require("../controllers/notificationController");
// const webPush = require('web-push');
// // PUBLIC_KEY=BAL1sGW7CBYi8xjy9FjmwymGzwYhNlZgNeFC46Schxn3RFrWD0GXuqK7xFaoawaPSX2inhd6vduLG3Xp8nQ5Qh0,
// // PRIVATE_KEY=QM1VUGTvaDojQHJbwDzGccCuFHh7GWLTK9nPte9DKOE
// // Configure VAPID keys
// const vapidKeys = {
//   publicKey: 'BAL1sGW7CBYi8xjy9FjmwymGzwYhNlZgNeFC46Schxn3RFrWD0GXuqK7xFaoawaPSX2inhd6vduLG3Xp8nQ5Qh0' || process.env.PUBLIC_KEY,
//   privateKey: 'QM1VUGTvaDojQHJbwDzGccCuFHh7GWLTK9nPte9DKOE' || process.env.PRIVATE_KEY
// };

// webPush.setVapidDetails(
//   'mailto:your-email@example.com',
//   vapidKeys.publicKey,
//   vapidKeys.privateKey
// );

// const saveSubscription = async (subscription) => {
// 	if (subscription && subscription.endpoint && subscription.keys) {
// 		console.log("SSUB", subscription);
// 		await Subscription.create({
// 			endpoint: subscription.endpoint,
// 			p256dh: subscription.keys.p256dh,
// 			auth: subscription.keys.auth
// 		});
// 		console.log('Subscription saved successfully.');
// 	} else {
// 		console.error('Invalid subscription object:', subscription);
// 	}
// };

// const sendNotification = async (title, body) => {
//   const subscriptions = await Subscription.findAll({
// 		attributes: {
// 			exclude: ["created_at", "updated_at"]
// 		}
// 	});
//   subscriptions.forEach((subscription) => {
//     const sub = {
//       endpoint: subscription.endpoint,
//       keys: {
//         p256dh: subscription.p256dh,
//         auth: subscription.auth
//       }
//     };
//     const payload = JSON.stringify({
//       notification: {
//         title,
//         body,
//         // image,
//       },
//     });
//     webPush.sendNotification(sub, payload)
// 		.then(res.send('Sent push'))
//       .catch(error => console.error('Error sending notification:', error));
//   });
// };


// module.exports = { saveSubscription, sendNotification };
