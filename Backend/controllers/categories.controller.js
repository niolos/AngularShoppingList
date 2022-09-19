const { JSONResponse } = require('../lib/helper')
const Groups = require('../models/categories.model')

exports.getAllGroups = async (req, res) => {
	try {
		const group = await Groups.find()
        JSONResponse.success(res, 'Success.', group, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling categories model.", error, 500)
	}
}

exports.getGroupById = async (req, res) => {
	try {
		const group = await Groups.findById({_id:req.params.id})
        JSONResponse.success(res, 'Success.', group, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling item model.", error, 500)
	}
}
exports.createGroup = async (req, res) => {
	try {
		const group = await Groups.create(req.body)
        JSONResponse.success(res, 'Success.', group, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling categories model.", error, 500)
	}
}

exports.updateGroup = async (req, res) => {
	try {
		const group = await Groups.findByIdAndUpdate({_id:req.params.id},req.body)
		JSONResponse.success(res, 'Success.', group, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling categories model for update.", error, 500)
	}
}


exports.deleteCategoryById = async (req, res) => {
	try {
		const Category = await Groups.findByIdAndDelete(req.params.id)
		JSONResponse.success(res, 'Success.', Category, 200)
	} catch (error) {
		JSONResponse.error(res, 'Failure handling Category model.', error, 500)
	}
}