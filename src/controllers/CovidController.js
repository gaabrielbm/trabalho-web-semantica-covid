const mongoose = require ('mongoose');
const Covid = mongoose.model('Covid');

module.exports = {
  async index(req, res){
    const {page = 1} = req.query;
    const covid = await Covid.paginate({}, {page, limit:10});

    return res.json(covid);
  },

  async store(req, res){
   const covid = await Covid.create(req.body);
   return res.json(covid);
  },

  async show(req, res){
    const covid = await Covid.findById(req.params.id);

    return res.json(covid)
  },

  async update(req, res){
    const covid = await Covid.findByIdAndUpdate(req.params.id, req.body, { new: true});
    
    return res.json(covid);

  },

  async destroy(req, res){
    await Covid.findByIdAndRemove(req.params.id);

    return res.sed();

  } 
}