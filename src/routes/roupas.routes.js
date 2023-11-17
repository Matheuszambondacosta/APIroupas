import { Router } from "express";
import{
    criarRoupa,
    listarRoupas,
    listarRoupaById,
    atualizarRoupa,
    deletarRoupa,
    getAllRoupas
    } from "../controllers/roupas.controller.js";


const router = Router();

router.post("/roupas", criarRoupa);
router.get("/roupas", getAllRoupas);
router.get("/roupas/:id", listarRoupaById);
router.put("/roupas/:id", atualizarRoupa);
router.delete("/roupas/:id", deletarRoupa);

export default router;