"use client";
import { gsap, useGSAP } from "@/lib/gsap";
import { Code2 } from "lucide-react";
import { skills } from "@/data/data";
import { useRef } from "react";
import {
  siBootstrap,
  siCss,
  siExpress,
  siFigma,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siReact,
  siTailwindcss,
  siTypescript,
  siWordpress,
} from "simple-icons";

const skillIcons = {
  "React.js": siReact,
  "Next.js": siNextdotjs,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  HTML5: siHtml5,
  CSS3: siCss,
  "Tailwind CSS": siTailwindcss,
  Bootstrap: siBootstrap,
  "Node.js": siNodedotjs,
  "Express.js": siExpress,
  MongoDB: siMongodb,
  Git: siGit,
  GitHub: siGithub,
  Figma: siFigma,
  WordPress: siWordpress,
};

export default function Skills() {
  const skillsRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(".skill-chip", { opacity: 0, y: 16 }, {
      opacity: 1,
      y: 0,
      duration: 0.45,
      stagger: 0.035,
      ease: "power2.out",
      scrollTrigger: { trigger: skillsRef.current, start: "top 70%" },
    });
    gsap.fromTo(".skills-mark", { rotate: -35, scale: 0.7 }, {
      rotate: 0,
      scale: 1,
      duration: 0.65,
      ease: "back.out(1.8)",
      scrollTrigger: { trigger: skillsRef.current, start: "top 70%" },
    });
  }, { scope: skillsRef });

  return (
    <section id="skills" ref={skillsRef} className="py-20">
      <div className="container border-t border-neutral-300">
        <div className="flex flex-wrap items-center justify-between gap-4 py-4">
          <h2 className="flex items-center gap-3 text-4xl font-bold font-poppins uppercase sm:text-6xl">
            <span>My</span><span className="skills-mark inline-flex size-10 items-center justify-center border border-neutral-900 bg-neutral-100 sm:size-14"><Code2 className="size-6 sm:size-8" strokeWidth={1.7} /></span><span>Stack</span>
          </h2>
          <p className="max-w-sm text-sm text-neutral-600 sm:text-base">Tools I use to shape useful, reliable digital products.</p>
        </div>
        <div className="mt-8 grid items-start gap-4 xl:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="self-start border border-neutral-900 p-4 shadow-[3px_3px_0_0] sm:p-5">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <h3 className="text-lg font-bold uppercase">{category}</h3>
                <span className="font-mono text-xs text-neutral-500">{String(items.length).padStart(2, "0")}</span>
              </div>
              <ul className="mt-4 grid grid-cols-2 gap-2">
                {items.map((skill) => {
                  const icon = skillIcons[skill as keyof typeof skillIcons];

                  return (
                    <li key={skill} title={skill} className="skill-chip group flex min-h-20 min-w-0 flex-col items-center justify-center gap-2 border border-neutral-300 bg-white px-2 py-3 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-900 hover:bg-neutral-50 hover:shadow-[2px_2px_0_0] sm:px-3">
                      <span className="flex size-8 shrink-0 items-center justify-center border border-neutral-200 bg-neutral-50 transition-colors group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white sm:size-9">
                        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-current sm:size-4.5">
                          <path d={icon.path} />
                        </svg>
                      </span>
                      <span className="min-w-0 text-center font-medium leading-tight">{skill}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}