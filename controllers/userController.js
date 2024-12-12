const { Event, User, Verification } = require('../models');
const { Op } = require('sequelize');
const crypto = require("crypto");
const { userService } = require('../services/userService');
const sendVerificationCode = require("../services/emailService");
const bcrypt = require("bcrypt");
const salt = 10;
const userController = {
	createUser: async (req, res, next) => {
		try {
			const { first_name, last_name, email, password, confirm_password, phone_number, type } = req.body;
			if (password !== confirm_password) {
				return res.status(400).json({ message: "Passwords do not match" });
			}
			const hashed = await bcrypt.hash(password, salt);
			const payload = { first_name, last_name, email, password: hashed, phone_number, type };
			const createUser = await userService.createUser(payload);

			if (!createUser) {
				return res.status(createUser.status).json({ message: (createUser.message) });
			}
			const verificationCode = crypto
				.randomInt(100000, 999999)
				.toString()
				.padStart(6, 0);
			if (createUser) {
				await Verification.create({
					email: email,
					code: verificationCode,
					expires_at: new Date(Date.now() + 15 * 60 * 1000),
				})
				await sendVerificationCode(email, verificationCode);
				
				return res.status(createUser.status).json({
					message: `You have been registered, check your email ${email} for verification code. ${createUser.message}`,
					data: createUser.data,
				});
			}
		} catch (error) {
			console.log(error);
			return res.status(500).json({
				message: 'An error occurred while creating the user',
				error: error
			});
		}
	},

	verifyEmail: async (req, res) => {
		try {
			const { email, code } = req.queery;
			const verificationRecord = await Verification.findOne({
				where: { email, code, expires_at: { [Op.gt]: new Date() } },
			});
			if (!verificationRecord) {
				return res.status(400).json({ message: "Verification code is invalid or has expired" });
			}
			await Verification.update(
				{ verified: true },
				{ where: { email: email } }
			)
			return res.status(200).json({ message: 'Email verified suxxessfully'})
		} catch (error) {
			console.log("Error", error);
			res.status(500).json({ message: `Server error`, error });
		}
	},

	updateUser: async (req, res,) => {
		try {
			const user = await userService.findOne({ email: req.params.email });
			if (!user) {
				return res.status(404).json({ message: `User with email: ${req.params.email} not found` });
			}
			const { first_name, last_name, phone_number } = req.body;
			if (first_name !== last_name) {
				
			}
		} catch (error) {
			
		}
	},

	getAll: async (req, res) => {
		try {
			const users = await userService.getAll();
			return res.status(users.status).json({
				message: (users.message),
				data: (users.data)
			});
		} catch (error) {
			console.error("Error fetching users:", error);
				return res.status(500).json({
					message: 'Internal Server Error',
					error: error.message
				});
		}
	},

	getOne: async (req, res) => {
		try {
			const result = await userService.getOne(req.params.id);
			if (!result) {
				return res.status(result.status).json({
					message: result.message,
				});
			}
			return res.status(result.status).json({
				message: (result.message),
				...(result.data && { data: result.data})
			});
		} catch (error) {
			return res.status(500).json({
				message : "Error showed up",
				error : error.message || error
			})
		}
	},

	deleteOne: async (req, res) => {
		try {
			const result = await userService.deleteOne(req.params.id);
			return res.status(result.status).send({ message: (result.message )});
		} catch (error) {
			console.error("Error", error)
			return res.status(500).json({
				message : "Error occured",
				error : error
			})
		}
	}
};

module.exports = { userController };
