const { saveSubscription, sendNotification } = require('../services/notificationService');

const subscribe = async (req, res) => {
  try {
    const subscription = req.body;
    await saveSubscription(subscription);
		console.log("SAVED", subscription);
		if (subscription) {
			res.status(201).json({ message: 'Subscription added successfully.' });
		}
		return res.status().json({ message: 'Error, could not save subscription'})
  } catch (error) {
		console.error(error);
    res.status(500).json({ message: 'Failed to subscribe.', error });
  }
};

const pushNotification = async (req, res) => {
  try {
    const { title, body } = req.body;
    await sendNotification(title, body);
		console.log("SENT", title, body);
    return res.status(200).json({ message: 'Notification sent successfully.' });
  } catch (error) {
		console.error(error);
    // return res.status(500).json({ message: 'Failed to send notification.', error });
  }
};

module.exports = { pushNotification, subscribe };


// const { sendNotification } = require('../services/notificationService');

// const notificationController = async (req, res) => {
//     const subscription = req.body;
//     console.log("Received subscription:", subscription);

//     const payload = JSON.stringify({ title: "Push Notification Test" });

//     try {
//         const result = await sendNotification(subscription, payload);
//         console.log("Notification sent successfully:", result);
//         res.status(201).json({ message: 'Notification sent', result });
//     } catch (error) {
//         console.error("Error sending notification:", error);
//         res.status(500).json({ message: 'Error sending notification', error: error.message });
//     }
// };

// module.exports = { notificationController };
