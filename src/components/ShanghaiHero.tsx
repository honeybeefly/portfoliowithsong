import { ArrowDown, MapPin } from "lucide-react";
import { ownerProfile } from "@/data/owner";
import ShanghaiSkyline from "@/components/ShanghaiSkyline";

export default function ShanghaiHero() {
  return (
    <section id="home" className="bg-[#211915]">
      <ShanghaiSkyline variant="hero" />

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 border border-amber-200/35 bg-[#3b281d] px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-amber-100">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
            {ownerProfile.contact.status}
          </div>

          <p className="mb-2 font-serif text-lg tracking-[0.2em] text-amber-200">
            {ownerProfile.chineseName} <span className="text-amber-100/60">·</span> PORTFOLIO
          </p>
          <h1 className="font-orbitron text-5xl font-semibold leading-[0.98] tracking-tight text-[#fff5df] sm:text-7xl lg:text-8xl">
            {ownerProfile.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-medium text-[#f4e4c9] sm:text-2xl">
            {ownerProfile.headline}
          </p>
          <p className="mt-3 flex items-center gap-2 font-mono text-xs text-[#e3cda9] sm:text-sm">
            <MapPin className="h-4 w-4 text-amber-300" />
            {ownerProfile.college.shortName} <span className="text-amber-100/60">·</span>{" "}
            {ownerProfile.contact.location}
          </p>

          <p className="mt-7 max-w-2xl border-l-2 border-amber-300/80 bg-[#302118] px-4 py-3 font-serif text-sm italic leading-6 text-[#f3dfbd] sm:text-base">
            Thoughtful work across secure systems, software engineering, and modern web development.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-amber-200/80 bg-amber-200 px-5 py-3 text-xs font-bold tracking-wider text-[#302016] shadow-lg shadow-black/20 transition hover:bg-amber-100"
            >
              EXPLORE PROJECTS <ArrowDown size={15} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border border-amber-100/45 bg-[#3a281e] px-5 py-3 text-xs font-bold tracking-wider text-[#fff0d3] transition hover:bg-[#4a2d1b]"
            >
              VIEW PROFILE
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="mt-10 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-amber-100/80 hover:text-amber-50"
        >
          DISCOVER THE PORTFOLIO <ArrowDown className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}
