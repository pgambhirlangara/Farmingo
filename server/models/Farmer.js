const mongoose = require('mongoose')

const Farmer = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		contact: {type : Number, required: true },
		city: {type: String},
		zipCode: {type: String},
		province: {type: String},
		password: { type: String, required: true },
        verified: { type: Boolean, required: true, default: false }, 
	},
	{ collection: 'farmer-data' }
)

const model = mongoose.model('farmerData', Farmer);

module.exports = model;