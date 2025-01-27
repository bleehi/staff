const staffModel = require('../models/staff');
const { v4: uuidv4 } = require('uuid')

exports.createStaff = async (req, res) => {
    try {
        const { firstName, lastName, gender, email, phoneNumber } = req.body;
        const existStaff = await staffModel.findAll({ where: { email: email } });

        if (existStaff.length == 1) {
            return res.status(400).json('Staff already exist')
        }

        const createStaff = await staffModel.create({
            id: uuidv4(),
            firstName,
            lastName,
            gender,
            email,
            phoneNumber
        });

        res.status(201).json({
            message: 'Staff created successfully',
            totalStaff: createStaff.length,
            data: createStaff
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        })
    }
}
