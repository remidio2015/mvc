import mongoose from 'mongoose';

const projetoSchema = new mongoose.Schema(
    {
    nome: { type: String, required: true},
    sobrenome: { type: String, required: true},
    nomeCompleto: { type: String, required: true},
    idioma: { type: String, required: true},
    
    nomeCompleto: { type: String, required: true},
    nomeCompleto: { type: String, required: true},
    

    }

)

const projetos = mongoose.model('projetos', projetoSchema);

export default projetos;