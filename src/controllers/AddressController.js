const Establishment = require('../database/models/Establishment');
const Address = require('../database/models/Address');

module.exports = {
  async index(req, res) {
    const { establishment_id } = req.params;

    const establishment = await Establishment.findByPk(establishment_id, {
      include: { association: 'addresses' }
    });

    return res.json(establishment);
  },

  async store(req, res) {
    const { establishment_id } = req.params;
    const { zipcode, street, number} = req.body;

    const establishment = await Establishment.findByPk(establishment_id);

    if (!establishment) {
      return res.status(400).json({ error: 'Establishment not found' });
    }

    const address = await Address.create({
      zipcode,
      street,
      number,
      establishment_id,
    });

    return res.json(address);
  }
};