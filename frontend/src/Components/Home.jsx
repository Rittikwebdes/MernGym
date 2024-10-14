import BenefitsSection from "./BenefitsSection";
import FeaturedClasses from "./FeaturedClasses";
import Hero from "./Hero";

export default function Home() {
  return (
    <>
      <div className="mt-10 text-white">
        <Hero />
      <BenefitsSection/>
      <FeaturedClasses/>
      
      </div>
    </>
  );
}
