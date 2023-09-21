import express from 'express';
import ProjetoController from '../controllers/projetoControllers.js';

const router = express.Router();

router 
.get("/", ProjetoController.getAllProjetos)
.get("/:id", ProjetoController.getById)
.post("/", ProjetoController.createProjetos)
.put("/:id", ProjetoController.updateProjetos)
.delete("/:id", ProjetoController.deleteProjetos)

export default router;





















