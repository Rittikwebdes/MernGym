import express from 'express';
import {
  createDietPlan,
  getDietPlansByUser,
  getDietPlanById,
  updateDietPlan,
  deleteDietPlan,
} from '../controller/dietPlanController.js';

const router = express.Router();

// Create a new diet plan
router.post('/createplan', createDietPlan);

// Get all diet plans for a user
router.get('/user/:userId', getDietPlansByUser);

// Get a specific diet plan
router.get('/:id', getDietPlanById);

// Update a diet plan
router.put('/:id', updateDietPlan);

// Delete a diet plan
router.delete('/:id', deleteDietPlan);

export default router;
