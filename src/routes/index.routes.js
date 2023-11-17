import { Router } from "express";
import rotasRoupas from "./roupas.routes.js";

const router = Router();

router.use('/roupas', rotasRoupas);

export default router;

