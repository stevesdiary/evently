const { validateUser } = require("../middlewares/validate");
const { User } = require("../models");
const userController = require('../controllers/userController');
const userService = {
	createUser: async(payload) => {
		try {
			const createUser = await User.create(payload);
			return createUser;
		} catch (error) {
			console.log("Service error", error);
			throw error;
		}

	},

	getAll: async(req, res) => {
		try {
			const users = await User.findAll({
				attributes: {
					exclude: ["createdAt", "updatedAt", "password"]
				}
			});
			return users;
		} catch (error) {
			console.error("Error fetching users:", error);
				throw error;
		}
	},

	getOne: async(payload) => {
		try {
			const id = payload;
			const user = await User.findOne({
				where: { id: payload },
				attributes: {
					exclude: ["createdAt", "updatedAt", "password"]
				}
			});
			return user;
		} catch (error) {
			throw error;
		}
	},

	deleteOne: async(payload) => {
		try {
			const id = payload;
			const user = await User.destroy({
				where: { id: payload }
			});
			return user;
		} catch (error) {
			throw error;
		}
	},

}

module.exports = { userService };
