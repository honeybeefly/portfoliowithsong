import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { ownerProfile } from "@/data/owner";
import GlitchText from "@/components/GlitchText";

const currentYear = 2026;

export default function ShanghaiContact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-pink-500/15 bg-[#030612] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(214,157,87,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <div className="mb-3 inline-flex items-center gap-2 border border-pink-400/30 bg-pink-500/5 px-3 py-1.5 font-serif text-[10px] tracking-widest text-pink-200">
          LET&apos;S CONNECT
        </div>
        <GlitchText
          text="GET IN TOUCH"
          as="h2"
          className="font-orbitron text-3xl font-bold sm:text-5xl"
          glowColor="magenta"
        />
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400">
          {ownerProfile.contact.status}. Available for {ownerProfile.contact.availableFor.join(", ").toLowerCase()}.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${ownerProfile.contact.email}`}
            className="inline-flex items-center gap-2 bg-cyan-300 px-5 py-3 text-xs font-bold tracking-wider text-slate-950 transition hover:bg-cyan-200"
          >
            <Mail className="h-4 w-4" /> {ownerProfile.contact.email}
          </a>
          <a
            href={ownerProfile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-slate-600 bg-slate-900/60 px-5 py-3 text-xs font-mono text-slate-200 transition hover:border-pink-400 hover:text-pink-200"
          >
            <GithubIcon className="h-4 w-4" /> GITHUB <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            href={ownerProfile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-slate-600 bg-slate-900/60 px-5 py-3 text-xs font-mono text-slate-200 transition hover:border-pink-400 hover:text-pink-200"
          >
            LINKEDIN <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <footer className="mt-20 border-t border-white/10 pt-5 font-mono text-[10px] tracking-wider text-slate-600">
          <p>© {currentYear} {ownerProfile.name}</p>
          <p className="mt-3 font-sans normal-case tracking-normal">
            Skyline photograph by{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Shanghai_skyline_at_night.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-200 underline underline-offset-2"
            >
              Ernest Jourdier / Wikimedia Commons
            </a>{" "}
            under{" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-200 underline underline-offset-2"
            >
              CC BY 4.0
            </a>
            . Cropped and color-adjusted.
          </p>
        </footer>
      </div>
    </section>
  );
}
