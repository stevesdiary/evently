const eventService = {
	createEvent: async(payload) => {
		try {
			
			const createEvent = await Event.create(payload);
			return createEvent;
		} catch (error) {
			return error;
		}

	}
}

module.exports = { eventService };
