const validator = require("../middlewares/validator");
const { User } = require("../models");
const userController = require('../controllers/userController');
const userService = {
	createUser: async(payload) => {
		try {
			const { error } = validator.User.validate(payload);
			if (error) {
					throw new Error(error.details[0].message);
			}
			const createUser = await User.create(payload);
			console.log("RESULT", createUser);
			return createUser;
		} catch (error) {
			return error;
		}

	}
}

module.exports = { userService };
