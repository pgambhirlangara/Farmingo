const mongoose = require('mongoose')

const Customer = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		contact: {type : Number, required: true },
		city: {type: String},
		zipCode: {type: String},
		province: {type: String},
		password: { type: String, required: true },
	},
	{ collection: 'customer-data', timestamps: true }
)

const model = mongoose.model('customerData', Customer);

module.exports = model;