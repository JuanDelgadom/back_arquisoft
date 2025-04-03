const MriService = require('../services/mri.service');
const service = new MriService();

/*const create = async ( req, res ) => {
    try { 
        const response = await service.create(req.body);
        res.json({ success: true, data: response});
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}*/

const get = async ( req, res ) => {
    try {
        const response = await service.find();
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const getById = async (req, res) => {
    try {
        const { id, cedula } = req.params;

        const response = await service.findOne(id, cedula);
        if (!response) {
            return res.status(404).send({ success: false, message: "MRI no encontrado" });
        }

        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

/*const update = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await service.update(id,body);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const _delete = async (req, res) => {
    try {
        const { id } = req.params; 
        const response = await service.delete(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}*/

module.exports = {
    get, getById
};