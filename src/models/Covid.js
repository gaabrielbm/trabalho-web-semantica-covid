const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const CovidSchema = new mongoose.Schema({
    confirmados: {
    type: Number,
    required: true
  },
  casos_a_cada_um_milhao_de_pessoas: {
    type: Number,
    required: true
  },
  casos_recuperados: {
    type: Number,
    required: true
  },
  mortes:{
    type: Number,
    required: true
},
local:{
  type: String,
  required: true
},
  createdAt: {
    type: Date,
    default: Date.now
  },
});

CovidSchema.plugin(mongoosePaginate);

mongoose.model('Covid', CovidSchema);