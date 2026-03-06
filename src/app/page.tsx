import AboutSection from "@/components/main/about/AboutSection";
import WelcomeSection from "@/components/main/welcome/WelcomeSection";
import GradientBars from "@/modules/primalui/aurora/GradientBars";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between flex-1">
      {/* <GradientBars curvature={1.5} heightScale={0.3} minBarsHeight={0.4}>
          <div className="flex items-center text-center w-full justify-center z-10">
            Test
          </div>
        </GradientBars> */}
      <WelcomeSection></WelcomeSection>
      <AboutSection></AboutSection>
    </main>
  );
}
