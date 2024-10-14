import DietPlan from '../models/DietPlan.js';

// Create a new diet plan
export const createDietPlan = async (req, res) => {
  try {
    const {  name, meals, totalCalories } = req.body;
    const newDietPlan = new DietPlan({ name, meals, totalCalories });
    await newDietPlan.save();
   return res.status(201).json({message:"diet added successfully",newDietPlan});
  } catch (error) {
   return res.status(500).json({ message: error.message });
  }
};

// Get all diet plans for a user
export const getDietPlansByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const dietPlans = await DietPlan.find({ userId });
    res.status(200).json(dietPlans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific diet plan
export const getDietPlanById = async (req, res) => {
  try {
    const { id } = req.params;
    const dietPlan = await DietPlan.findById(id);
    if (!dietPlan) {
      return res.status(404).json({ message: 'Diet plan not found' });
    }
    res.status(200).json(dietPlan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a diet plan
export const updateDietPlan = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDietPlan = await DietPlan.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedDietPlan) {
      return res.status(404).json({ message: 'Diet plan not found' });
    }
    res.status(200).json(updatedDietPlan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a diet plan
export const deleteDietPlan = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDietPlan = await DietPlan.findByIdAndDelete(id);
    if (!deletedDietPlan) {
      return res.status(404).json({ message: 'Diet plan not found' });
    }
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
