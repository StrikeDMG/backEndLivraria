import express from "express";
import { 
    criarUsuario, 
    obterUsuario, 
    atualizarUsuario, 
    deletarUsuario, 
    listarUsuarios 
} from "../controllers/usuario.controller.js";

const router = express.Router();

// /user/ //
router.get("/", listarUsuarios);
router.post("/", criarUsuario);
router.get("/:id", obterUsuario);
router.put("/:id", atualizarUsuario);
router.delete("/:id", deletarUsuario);
export default router;