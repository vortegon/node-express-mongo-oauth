import { Router } from 'express';
import { catchErrors } from '../../utils/errorHandler';
import listControllers from './listControllers';

const listRouter = Router();

// /api/list
listRouter
  .route('/')
  .get(catchErrors(listControllers.getOne))
  .post(catchErrors(listControllers.createOne));

// /api/list/:id
listRouter
  .route('/:id')
  .get(catchErrors(listControllers.getOne))
  .put(catchErrors(listControllers.updateOne))
  .delete(catchErrors(listControllers.removeOne));

export default listRouter;