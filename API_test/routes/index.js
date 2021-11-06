// import express
import express from "express";
// import controllers
import { getQueues, 
    getQueueById, 
    saveQueue, 
    updateQueue,
    deleteQueue } from "../controllers/queueController.js";

    // express router
const router = express.Router();

// Route get All Queues
router.get('/', getQueues);
// Route get single Queue
router.get('/:id', getQueueById);
// Route CREATE Queue
router.post('/', saveQueue);
// Route UPDATE Queue
router.patch('/:id', updateQueue);
// Route DELETE Queue
router.delete('/:id', deleteQueue);

// export router
export default router;

