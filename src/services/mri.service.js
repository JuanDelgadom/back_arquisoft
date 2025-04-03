const { models } = require('../libs/sequelize');

class MriService { 
  
    constructor() {}

    async find() {
      const res = await models.Mri.findAll();
      return res;
    }

    async findOne(id, cedula) {
        const res = await models.Mri.findOne({
          where: { id, cedula }
        });
        return res;
      }

    /*async create(data) {
      const res = await models.Mri.create(data);
      return res;
    }

    async update(id, data) {
      const model = await this.findOne(id);
      const res = await model.update(data);
      return res;
    }

    async delete(id) {
      const model = await this.findOne(id);
      await model.destroy();
      return { deleted: true };
    }*/
  
  }
  
  module.exports = MriService;