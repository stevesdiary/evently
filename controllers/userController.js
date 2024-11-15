const { Event, User } = require('../models');
const { Op } = require('sequelize');
const { userService } = require('../services/userService');


// const userController = {
// 	createUser: async (req, res, next) => {
// 		try {
// 			const { first_name, last_name, email, password, phone_number, type } = req.body;
// 			const createUser = await User.create(payload);
// 			console.log("RESULT", createUser);
// 			if (!createUser) {
// 				return res.status(403).send({message: 'user not created'})
// 			}
// 			return createUser;
// 		} catch (error) {
// 			return res.json(error);
// 		}
// 	}
// };

// module.exports = { userController };

const userController = {
	createUser: async (req, res, next) => {
		try {
			
			const { first_name, last_name, email, password, phone_number, type } = req.body;

			const payload = { first_name, last_name, email, password, phone_number, type };
			const createUser = await userService.createUser(payload);

			if (!createUser) {
				return res.status(403).send({ message: 'User not created' });
			}
			
			return res.status(201).json({
				message: 'User created successfully',
				data: createUser
			});
		} catch (error) {
			// Return error response with status code 500
			return res.status(500).json({
				message: 'An error occurred while creating the user',
				error: error
			});
		}
	}
};

module.exports = { userController };
