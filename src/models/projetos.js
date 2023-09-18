import mongoose from 'mongoose';

const projetoSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true},
        telefones: { type: Array, required: true},
        endereço: {type: Object, required: true},

    }
)

const projetos = mongoose.model('projetos', projetoSchema);

export default projetos;
