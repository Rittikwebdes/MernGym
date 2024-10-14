import mongoose from 'mongoose';

const DietPlanSchema = new mongoose.Schema({
  name: { type: String, required: true },
  meals: [
    {
      mealType: { type: String, required: true }, // e.g., breakfast, lunch, dinner, snack
      foods: [{ type: String, required: true }], // List of foods
      calories: { type: Number, required: true }, // Total calories for the meal
    },
  ],
  totalCalories: { type: Number, required: true }, // Total daily calories
}, { timestamps: true });

export default mongoose.model('DietPlan', DietPlanSchema);
