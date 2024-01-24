import express from 'express';
import { SignUp,Signin, google,signOut } from '../controllers/auth.controllers.js';



const router =express.Router();

router.post("/signup",SignUp);
router.post("/signin",Signin);
router.post('/google',google);
router.get('/signout',signOut)

export default router;