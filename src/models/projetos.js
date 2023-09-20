import mongoose  from "mongoose";

const projetoSchema = new mongoose.Schema(
    {
        nome: {type: String, required: true}
    }
)

const projetos = mongoose.model('projetos', projetoSchema);

export default projetos; 
