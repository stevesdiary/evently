const { Event, User } = require('../models');
const { Op } = require('sequelize');
const { eventService } = require('../services/eventService');


const eventController = {
	createEvent: async (req, res) => {
		try {
			const event = await eventService.createEvent(payload)
			return event;
		} catch (error) {
			return res.json(error);
		}
	}
};

module.exports = { eventController };