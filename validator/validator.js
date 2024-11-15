const Joi = require('joi')
const phoneRegex = /^(?:\+?234|0)\d{10}$/

const createEventSchema = Joi.object({
		event_name: Joi.string().min(3).required(),
		location: Joi.string().required(),
		venue: Joi.string().required(),
		email: Joi.string().email().required(),
		description: Joi.string().required(),
		password: Joi.string().required(),
		start_date: Joi.date().required(),
		end_date: Joi.date().required(),
		price: Joi.number().required(),
		discocunt: Joi.number().optional(),
		start_time: Joi.string().required(),
		end_time: Joi.string().required(),
		quantity: Joi.number().optional(),
});

const createUserSchema = Joi.object({
		first_name: Joi.string().min(3).required(),
		last_name: Joi.string().min(3),
		email: Joi.string().email().required(),
		password: Joi.string().required(),
		phone_number: Joi.string().regex(phoneRegex).required(),
		profile_picture: Joi.string().optional(),
		gender: Joi.string().valid('male', 'female').required(),
		type: Joi.string().optional(),

})	

const validate = (schema) => (payload) => {
	const { error } = schema.validate(payload);
	return error;
};


module.exports = { createEventSchema, createUserSchema, validate };