import { Router } from 'express';

const router = Router();

/** import controllers */

import * as controller from '../controllers/controller.js';

/** Questions Routes API*/
router
  .route('/questions')
  .get(controller.getQuestions) /** Get Request */
  .post(controller.insertQuestions) /** Post Request */
  .delete(controller.dropQuestions); /** Delete Request */

router
  .route('/result')
  .get(controller.getResult)
  .post(controller.storeResult)
  .delete(controller.dropResult);

export default router;
