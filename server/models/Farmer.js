const mongoose = require('mongoose')

const Farmer = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		contact: { type : Number, required: true },
		address: { type: String },
		password: { type: String, required: true },
        verified: { type: Boolean, required: true, default: false }, 
	},
	{ collection: 'farmer-data' }
)

const model = mongoose.model('farmerData', Farmer);

module.exports = model;