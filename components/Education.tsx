"use client";

import { gsap, useGSAP, SplitText } from "@/lib/gsap";
import { education } from "@/data/data";
import { useRef } from "react";

export default function Education() {
  const educationRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    const textSplit = SplitText.create(".education-text", { type: "words,lines" });

    gsap.fromTo(textSplit.words, {
      willChange: "opacity, filter",
      opacity: 0,
      filter: "blur(16px)",
    }, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.7,
      ease: "power2.inOut",
      stagger: 0.025,
      scrollTrigger: {
        trigger: educationRef.current,
        start: "top 75%",
        once: true,
      },
    });
  }, { scope: educationRef });

  return (
    <section id="education" ref={educationRef} className="py-20">
      <div className="container border-t border-neutral-300">
        <div className="flex flex-wrap items-baseline justify-between gap-4 py-4">
          <h2 className="education-text text-4xl font-bold font-poppins uppercase sm:text-6xl">Education</h2>
          <p className="education-text text-neutral-600">Academic foundation for my technical work</p>
        </div>
        <article className="mt-8 grid gap-4 border-t border-neutral-300 py-7 sm:grid-cols-[10rem_1fr] sm:gap-8">
          <p className="education-text text-sm font-semibold text-neutral-500">{education.period}</p>
          <div>
            <h3 className="education-text text-2xl font-bold">{education.degree}</h3>
            <p className="education-text mt-2 text-lg">{education.institution}</p>
            <p className="education-text text-neutral-500">{education.affiliation}</p>
          </div>
        </article>
      </div>
    </section>
  );
}