"use client";
import { gsap, useGSAP, SplitText } from "@/lib/gsap";
import { experience } from "@/data/data";
import { useRef } from "react";

export default function Experience() {
  const experienceRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    const text = SplitText.create(".experience-reveal", { type: "words, lines" });
    gsap.fromTo(text.words, {
      opacity: 0,
      filter: "blur(12px)",
      y: 8,
    }, {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      duration: 0.45,
      ease: "power2.inOut",
      stagger: 0.02,
      scrollTrigger: { trigger: experienceRef.current, start: "top 65%" },
    });
  }, { scope: experienceRef });

  return (
    <section id="experience" ref={experienceRef} className="py-20">
      <div className="container border-t border-neutral-300">
        <div className="flex flex-wrap items-baseline justify-between gap-4 py-4">
          <h2 className="experience-reveal text-4xl font-bold font-poppins uppercase sm:text-6xl">Work Experience</h2>
          <p className="experience-reveal text-neutral-600">My professional journey in frontend development</p>
        </div>
        <div className="mt-8">
          {experience.map((job) => (
            <article key={job.id} className="grid gap-5 border-t border-neutral-300 py-8 md:grid-cols-[10rem_1fr] md:gap-10">
              <p className="text-sm font-semibold text-neutral-500">{job.period}</p>
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="experience-reveal text-2xl font-bold">{job.role}</h3>
                  {job.current && <span className="border border-neutral-900 px-2 py-0.5 text-xs font-semibold uppercase">Current</span>}
                </div>
                <p className="experience-reveal mt-1 text-lg">{job.company}</p>
                <p className="experience-reveal text-sm text-neutral-500">{job.location}</p>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-neutral-700">
                  {job.highlights.map((highlight) => <li className="experience-reveal" key={highlight}>{highlight}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}