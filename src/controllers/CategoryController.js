const Establishment = require('../database/models/Establishment');
const Category = require('../database/models/Category');

module.exports = {
  async storeOne (req, res){
    const {name } = req.body;
    const category = await Category.create({name});

    return res.json(category);
},

    async list (req, res){
        const category = await Category.findAll();
    
        return res.json(category);
    },
    async create (req, res){
        const {name} = req.body;
        const category = await Category.create({name});
    
        return res.json(category);
    },

  async index(req, res) {
    const { establishment_id } = req.params;

    const establishment = await Establishment.findByPk(establishment_id, {
      include: { 
        association: 'categories', 
        attributes: ['name'], 
        through: { 
          attributes: []
        } 
      }
    })

    return res.json(establishment);
  },

  async store(req, res) {
    const { establishment_id } = req.params;
    const { name } = req.body;

    const establishment = await Establishment.findByPk(establishment_id);

    if (!establishment) {
      return res.status(400).json({ error: 'Establishment not found' });
    }

    const [ category ] = await Category.findOrCreate({
      where: { name }
    });

    await establishment.addCategory(category);

    return res.json(category);
  },

  async delete(req, res) {
    const { establishment_id } = req.params;
    const { name } = req.body;

    const establishment = await Establishment.findByPk(establishment_id);

    if (!establishment) {
      return res.status(400).json({ error: 'establishment not found' });
    }

    const category = await Category.findOne({
      where: { name }
    });

    await establishment.removeCategory(category);

    return res.json();
  },

  async deleteOne(req, res) {
    const { category_id } = req.params;
    const { name } = req.body;

    const category = await category.findByPk(category_id);

    if (!category) {
      return res.status(400).json({ error: 'category not found' });
    }

    await Category.findOne({
      where: { name }
    });

    await category.removeCategory(category);

    return res.json();
  },
};
