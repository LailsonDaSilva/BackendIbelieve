const Establishment = require('../database/models/Establishment');

module.exports ={
    async index (req, res){

        const establishments = await Establishment.findAll( {
            include: { 
              association: 'categories', 
              attributes: ['name'], 
              through: { 
                attributes: []
              } 
            }
          }
          );
          
         const {category} = req.query;
         const result = category ? establishments.filter(establishment => establishment.categories.filter(categoryName => categoryName.name === category)) : establishments;
        return res.json(result);
    },
async store (req, res){


    const {name, photo, address, discount } = req.body;
    const establishment = await Establishment.create({name,photo,address, discount});

    return res.json(establishment);
}
};