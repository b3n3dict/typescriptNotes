import { dataController } from "../controller/data.controller";
import { Router } from "express";

const router = Router()

router.get('/',dataController.getDataHandler)
router.get('/:name',dataController.getDataByNameHandler)


export default router;