import express from 'express';

import { authentication } from '../middleware/authentication';
import sample from './sample.router'
import userRoutes from './user.router'
import demo from './demo.router'
import userplan from './userPlan.router'
import planDetails from './planDetails.router'
import masters from './masters.router'
import examDetailsRoutes from './examDetails.router'
import razorpay from "./razorPay.router";

import appsetting from "./appsetting.router";

const appRoutes = () => {
  const router = express.Router();
  router.use('/sample', sample);
  router.use('/user', userRoutes);
  router.use('/demo-exam-question', demo);
  router.use('/payment', userplan);
  router.use('/plan', planDetails);
  router.use('/master', masters);
  router.use('/exam-details', examDetailsRoutes);

  router.use('/app', appsetting);
  router.use('/razorpay', razorpay);
  return router;
};

export default appRoutes;
