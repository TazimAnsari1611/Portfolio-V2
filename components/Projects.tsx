"use client"
import { gsap, useGSAP } from "@/lib/gsap"
import { projects } from "@/data/data";
import { RiGithubFill, RiGlobalLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

export default function Projects() {
  const projectsRef = useRef<HTMLElement | null>(null);
  useGSAP(() => {


    // title animation
    const textShadowDepth = 4;
    const speed = 0.4;
    const color = "#171717";

    let t = '0px 0px';
    let TextShadowString = t + color;
    let fromTextShadowString = t + color;

    for (let i = 1; i <= textShadowDepth; i++) {
      t = `, -${i}px ${i}px`;
      TextShadowString += t + color;
      fromTextShadowString += ", 0px 0px" + color;
    }

    gsap.fromTo('.projects-title', {
      textShadow: fromTextShadowString
    }, {
      duration: speed,
      textShadow: TextShadowString,
      x: '8px',
      y: '-8px',
      delay: 1
    })
  }, { scope: projectsRef })
  return <section id='projects' ref={projectsRef} className='py-20'>
    <div className="container border-t border-neutral-300">
      {/* Title */}
      <div className="flex items-center gap-4 py-4">
        {/* Icon */}
        <div className="shrink-0 hidden sm:block">
          <Image src={'/images/projects-icon.svg'} alt="projects icon" width={220} height={220} className='w-full h-auto object-cover' />
        </div>
          <h2 className="text-4xl sm:text-6xl font-bold font-poppins uppercase">
          Selected{" "}
          <span className="projects-title" style={{
            WebkitTextStroke: '1px #000',
            WebkitTextFillColor: 'white',
          }}>Projects</span>
        </h2>
      </div>
      {/* wrapper  */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-6 xl:gap-8">
        {projects.map((project) => (
          <article className="group border border-neutral-900 bg-white p-2 shadow-[4px_4px_0_0] transition-transform duration-300 hover:-translate-y-1" key={project.id}>
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
              <Image src={project.image} alt={`${project.title} interface preview`} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 560px" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              <span className="absolute left-3 top-3 border border-neutral-900 bg-white px-2 py-1 text-xs font-semibold">{project.id} / 04</span>
            </div>
            <div className="px-3 pb-3 pt-4 sm:px-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="max-w-[28rem] text-xl font-bold leading-tight sm:text-2xl">{project.title}</h3>
                <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Case study</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">{project.desc}</p>
              <ul className="mt-4 grid gap-2 text-sm text-neutral-700">
                {project.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <div className="mt-5 flex flex-wrap items-end justify-between gap-4 border-t border-neutral-200 pt-4">
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => <span className="border border-neutral-300 px-2 py-1 text-xs" key={tool}>{tool}</span>)}
                </div>
                <div className="flex gap-3">
                {project.liveUrl && <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="btn flex items-center gap-2 font-semibold">
                  <span>
                    <RiGlobalLine className="" />
                  </span>
                  Live Demo
                </Link>}
                {project.githubUrl && <Link href={project.githubUrl} target="_blank" rel="noreferrer" className="btn flex items-center gap-2 font-semibold">
                  <span>
                    <RiGithubFill className="" />
                  </span>
                  Source Code
                </Link>}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>;
}
