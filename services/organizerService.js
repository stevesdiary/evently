const { validateOrganizer } = require("../middlewares/validate");
const { Organizer } = require("../models");
const organizerController = require('../controllers/organizerController');
const organizerService = {
	createOrganizer: async(payload) => {
		try {
			const organizerExists = await Organizer.findOne({ where: { email: payload.email }});
			if (organizerExists) {
				return { status: 400, message: `Organizer ${payload.email} already exists, login with this email and password` };
			}
			const createOrganizer = await Organizer.create(payload);
			const { password: _, ...userData } = createOrganizer.dataValues;
			return { status: 201, message: "Organizer record created!", data: userData };
		} catch (error) {
			console.log("Service error", error);
			throw error;
		}

	},

	getAll: async(req, res) => {
		try {
			const organizers = await Organizer.findAll({
				attributes: {
					exclude: ["createdAt", "updatedAt", "password"]
				}
			});
			return organizers;
		} catch (error) {
			console.error("Error fetching organizers:", error);
				throw error;
		}
	},

	getOne: async(payload) => {
		try {
			const id = payload;
			const organizer = await Organizer.findOne({
				where: { id: payload },
				attributes: {
					exclude: ["createdAt", "updatedAt", "password"]
				}
			});
			return organizer;
		} catch (error) {
			throw error;
		}
	},

	deleteOne: async(payload) => {
		try {
			const id = payload;
			const organizer = await Organizer.destroy({
				where: { id: payload }
			});
			return organizer;
		} catch (error) {
			throw error;
		}
	},

}

module.exports = { organizerService };
