const mongoose = require('mongoose')

const Customer = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		contact: {type : Number, required: true },
		address: {type: String},
		password: { type: String, required: true },
	},
	{ collection: 'customer-data' }
)

const model = mongoose.model('customerData', Customer);

module.exports = model;