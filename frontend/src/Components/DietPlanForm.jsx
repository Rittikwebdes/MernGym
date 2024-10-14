import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";


const DietPlanForm = () => {
    const {addDietPlan} = useAuth()
  const [name, setName] = useState("");
  const [meals, setMeals] = useState([
    { mealType: "", foods: [""], calories: 0 },
  ]);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleMealChange = (index, field, value) => {
    const newMeals = [...meals];
    newMeals[index][field] = value;
    setMeals(newMeals);
  };

  const addMeal = () => {
    setMeals([...meals, { mealType: "", foods: [""], calories: 0 }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addDietPlan(name,
        meals,
        totalCalories)
  };

  return (
    <div className=" md:py-[150px] py-[150px] px-[20px] text-white">
      <div className="">
        <form
          className="max-w-xl mx-auto p-6 backdrop-blur-2xl rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Create Diet Plan
          </h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-100">
              Diet Plan Name
            </label>
            <input
              type="text"
              placeholder="Diet Plan Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full border outline-none bg-transparent border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
            />
          </div>

          {meals.map((meal, index) => (
            <div
              key={index}
              className="mb-4 p-4 border border-gray-300 rounded-md"
            >
              <h3 className="text-lg font-semibold mb-2">Meal {index + 1}</h3>
              <label className="block text-sm font-medium text-gray-700">
                Meal Type
              </label>
              <input
                type="text"
                placeholder="Meal Type"
                value={meal.mealType}
                onChange={(e) =>
                  handleMealChange(index, "mealType", e.target.value)
                }
                required
                className=" outline-none bg-transparent mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
              />

              <label className="block text-sm font-medium text-gray-700 mt-4">
                Foods (comma separated)
              </label>
              <input
                type="text"
                placeholder="Foods (comma separated)"
                value={meal.foods.join(", ")}
                onChange={(e) =>
                  handleMealChange(index, "foods", e.target.value.split(","))
                }
                required
                className="mt-1 outline-none bg-transparent block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
              />

              <label className="block text-sm font-medium text-gray-700 mt-4">
                Calories
              </label>
              <input
                type="number"
                placeholder="Calories"
                value={meal.calories}
                onChange={(e) =>
                  handleMealChange(index, "calories", Number(e.target.value))
                }
                required
                className=" outline-none bg-transparent mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
              />
            </div>
          ))}

          <button
            type="button"
            onClick={addMeal}
            className="mt-4 mb-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          >
            Add Meal
          </button>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Total Calories
            </label>
            <input
              type="number"
              placeholder="Total Calories"
              value={totalCalories}
              onChange={(e) => setTotalCalories(Number(e.target.value))}
              required
              className="outline-none bg-transparent mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200"
          >
            Create Diet Plan
          </button>
        </form>
      </div>
    </div>
  );
};

export default DietPlanForm;
