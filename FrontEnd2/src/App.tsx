import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MealPlans from "./pages/MealPlans";
import WeightLossPlans from "./pages/WeightLossPlans";
import MuscleGainPlans from "./pages/MuscleGainPlans";
import BalancedNutritionPlans from "./pages/BalancedNutritionPlans";
import VeganPlans from "./pages/VeganPlans";
import WorkoutPlans from "./pages/WorkoutPlans";
import BeginnerWorkout from "./pages/BeginnerWorkout";
import StrengthTraining from "./pages/StrengthTraining";
import HIITWorkout from "./pages/HIITWorkout";
import EnduranceBuilding from "./pages/EnduranceBuilding";
import YogaPlans from "./pages/YogaPlans";
import MorningYoga from "./pages/MorningYoga";
import StressReliefYoga from "./pages/StressReliefYoga";
import FlexibilityYoga from "./pages/FlexibilityYoga";
import MeditationPractice from "./pages/MeditationPractice";
import ProgressTracker from "./pages/ProgressTracker";
import WeightTracking from "./pages/WeightTracking";
import GoalSetting from "./pages/GoalSetting";
import WorkoutHistory from "./pages/WorkoutHistory";
import AchievementBadges from "./pages/AchievementBadges";
import FitnessTips from "./pages/FitnessTips";
import WorkoutTips from "./pages/WorkoutTips";
import NutritionAdvice from "./pages/NutritionAdvice";
import RecoveryRest from "./pages/RecoveryRest";
import SleepOptimization from "./pages/SleepOptimization";
import HydrationTips from "./pages/HydrationTips";
import MotivationMindset from "./pages/MotivationMindset";
import NotFound from "./pages/NotFound";
import BMICalculator from "./pages/BMICalculator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bmi" element={<BMICalculator />} />
          <Route path="/meal-plans" element={<MealPlans />} />
          <Route path="/meal-plans/weight-loss" element={<WeightLossPlans />} />
          <Route path="/meal-plans/muscle-gain" element={<MuscleGainPlans />} />
          <Route path="/meal-plans/balanced-nutrition" element={<BalancedNutritionPlans />} />
          <Route path="/meal-plans/vegan" element={<VeganPlans />} />
          <Route path="/workout-plans" element={<WorkoutPlans />} />
          <Route path="/workout-plans/beginner" element={<BeginnerWorkout />} />
          <Route path="/workout-plans/strength-training" element={<StrengthTraining />} />
          <Route path="/workout-plans/hiit" element={<HIITWorkout />} />
          <Route path="/workout-plans/endurance" element={<EnduranceBuilding />} />
          <Route path="/yoga-plans" element={<YogaPlans />} />
          <Route path="/yoga-plans/morning-yoga" element={<MorningYoga />} />
          <Route path="/yoga-plans/stress-relief" element={<StressReliefYoga />} />
          <Route path="/yoga-plans/flexibility" element={<FlexibilityYoga />} />
          <Route path="/yoga-plans/meditation" element={<MeditationPractice />} />
          <Route path="/progress-tracker" element={<ProgressTracker />} />
          <Route path="/progress-tracker/weight-tracking" element={<WeightTracking />} />
          <Route path="/progress-tracker/goal-setting" element={<GoalSetting />} />
          <Route path="/progress-tracker/workout-history" element={<WorkoutHistory />} />
          <Route path="/progress-tracker/achievement-badges" element={<AchievementBadges />} />
          <Route path="/fitness-tips" element={<FitnessTips />} />
          <Route path="/fitness-tips/workout-tips" element={<WorkoutTips />} />
          <Route path="/fitness-tips/nutrition-advice" element={<NutritionAdvice />} />
          <Route path="/fitness-tips/recovery-rest" element={<RecoveryRest />} />
          <Route path="/fitness-tips/sleep-optimization" element={<SleepOptimization />} />
          <Route path="/fitness-tips/hydration-tips" element={<HydrationTips />} />
          <Route path="/fitness-tips/motivation-mindset" element={<MotivationMindset />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
