import express from "express";


import { createAPP, updateApp, listApp,app } from "../controllers/appsetting.controller";
import { authentication } from "../middleware/authentication";

const router = express.Router()

router.post('/create-setting', createAPP)
router.post('/update-setting', updateApp)
router.get('/listApp-setting', listApp)
router.post('/user-app-setting',authentication, app)


export default router

