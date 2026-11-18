import ShanghaiNavigation from "@/components/ShanghaiNavigation";
import ShanghaiHero from "@/components/ShanghaiHero";
import ShanghaiAbout from "@/components/ShanghaiAbout";
import ProjectsWorkshopsSection from "@/components/ProjectsWorkshopsSection";
import InterestsHobbiesSection from "@/components/InterestsHobbiesSection";
import WorkEthicsTeamSection from "@/components/WorkEthicsTeamSection";
import ShanghaiContact from "@/components/ShanghaiContact";
import SkylineProgressBar from "@/components/SkylineProgressBar";
import CustomCursor from "@/components/CustomCursor";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <div className="warm-theme min-h-screen bg-[#211915] text-slate-100 selection:bg-amber-200 selection:text-slate-950">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-amber-200 focus:px-4 focus:py-3 focus:font-mono focus:text-sm focus:font-bold focus:text-[#302016]"
      >
        Skip to content
      </a>
      <SkylineProgressBar />
      <CustomCursor />
      <ShanghaiNavigation />
      <MusicPlayer />
      <main id="main-content" tabIndex={-1}>
        <ShanghaiHero />
        <ShanghaiAbout />
        <ProjectsWorkshopsSection />
        <InterestsHobbiesSection />
        <WorkEthicsTeamSection />
        <ShanghaiContact />
      </main>
    </div>
  );
}
