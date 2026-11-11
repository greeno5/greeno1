import type { Metadata } from "next";
import { CommunityCTA } from "@/components/CommunityCTA";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Timeline, type Phase } from "@/components/roadmap/Timeline";

export const metadata: Metadata = {
  title: "Roadmap",
  description: "The proposed GREENO roadmap: The Genesis, The Foundation, The Movement and The Future.",
  alternates: { canonical: "/roadmap" },
};

const phases: Phase[] = [
  {
    id: "phase-01",
    num: "01",
    name: "The Genesis",
    tagline: "Where the movement begins.",
    items: ["Establish GREENO identity.", "Develop the official website.", "Introduce the mascot.", "Build the initial community."],
  },
  {
    id: "phase-02",
    num: "02",
    name: "The Foundation",
    tagline: "Building it right, from the ground up.",
    items: ["Finalize blockchain selection.", "Develop tokenomics.", "Smart contract development.", "Security review."],
  },
  {
    id: "phase-03",
    num: "03",
    name: "The Movement",
    tagline: "Growing stronger, together.",
    items: ["Official token launch preparation.", "Community expansion.", "Marketing campaigns.", "Ecosystem development."],
  },
  {
    id: "phase-04",
    num: "04",
    name: "The Future",
    tagline: "A long-term vision for the community.",
    items: ["Explore ecosystem utility.", "Strategic partnerships.", "Community initiatives.", "Long-term development."],
  },
];

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        index="04"
        eyebrow="Roadmap"
        title={
          <>
            The path <span className="text-gradient-green">forward.</span>
          </>
        }
      >
        Four phases, one direction. These are proposed milestones, not completed achievements. Timing and scope may evolve as
        GREENO grows with its community.
      </PageHero>

      <section aria-label="Roadmap timeline" className="container-x pb-12">
        <Timeline phases={phases} />
      </section>

      <section className="container-x py-12">
        <Reveal>
          <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-white/45">
            Roadmap milestones are forward-looking goals and do not represent guarantees. Progress updates will be shared
            through official GREENO channels once announced.
          </p>
        </Reveal>
      </section>

      <CommunityCTA />
    </>
  );
}
