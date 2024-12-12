const { Event, Organizer, Organier } = require('../models');
const { Op } = require('sequelize');
const { organizerService } = require('../services/organizerService');
const bcrypt = require("bcrypt");
const salt = 10;

const organizerController = {
	createOrganizer: async (req, res, next) => {
		try {
			const { first_name, last_name, email, password, confirm_password, phone_number, type } = req.body;
			if (password !== confirm_password) {
				return res.status(400).json({ message: "Passwords do not match" });
			}
			const hashed = await bcrypt.hash(password, salt);
			const payload = { first_name, last_name, email, password: hashed, phone_number, type };
			const createOrganizer = await organizerService.createOrganizer(payload);

			if (!createOrganizer) {
				return res.status(403).send({ message: 'Organizer not created' });
			}
			if (createOrganizer.email !== null) {
				return res.status(createOrganizer.status).json({
					message: createOrganizer.message,
					data: createOrganizer.data,
				});
			}
			
		} catch (error) {
			console.log("error", error);
			return res.status(500).json({
				message: 'An error occurred while creating the organizer',
				error: error
			});
		}
	},

	updateOrganizer: async (req, res,) => {
		try {
			const organizer = await organizerService.findOne({ email: req.params.email });
			if (!organizer) {
				return res.status(404).json({ message: `Organizer with email: ${req.params.email} not found` });
			}
			const { first_name, last_name, phone_number } = req.body;
			if (first_name !== last_name) {
				
			}
		} catch (error) {
			return res.status(500).json({
				message: 'An error occurred while updating the organizer',
				error: error
			});
		}
	},

	getAll: async (req, res) => {
		try {
			const organizers = await organizerService.getAll();
			if (!organizers || !organizers.length) {
				return res.status(404).json({ message: 'No record found for organizers', data: [] });
			}
			return res.status(200).json({
				message: 'Organizers',
				data: organizers
			});
		} catch (error) {
			console.error("Error fetching organizers:", error);
        return res.status(500).json({
					message: 'Internal Server Error',
					error: error.message
        });
		}
	},

	getOne: async (req, res) => {
		try {
			const organizer = await organizerService.getOne(req.params.id);
			if (!organizer) {
				return res.status(404).json({
					message: 'Organizer not found'
				});
			}
			return res.status(200).json({
				message: `Got organizer ${organizer.first_name}`,
				data: organizer
			});
		} catch (error) {
			return res.status(500).json({
				message : "Error showed up",
				error : error.message
			})
		}
	},

	deleteOne: async (req, res) => {
		try {
			const deleteOrganizer = await organizerService.deleteOne(req.params.id);
			if (deleteOrganizer) {
				return res.status(200).json({ message: "Organizer record deleted successfully" });
			}
			return res.status(404).json({message: "Unable to delete record", error: error});
		} catch (error) {
			return res.status(500).json({
				message : "Error showed up",
				error : error.message
			})
		}
	}
};

module.exports = { organizerController };
