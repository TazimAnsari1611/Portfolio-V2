"use client"
import { gsap, useGSAP, SplitText } from "@/lib/gsap"
import Image from 'next/image'
import React, { useRef } from 'react'
import { aboutItems } from "@/data/data"

export default function About() {
  const aboutRef = useRef<HTMLElement | null>(null)
  useGSAP(() => {
    // Text animation
    const textSplit = SplitText.create(".about-text", {
      type: "words, lines "
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top center",
      }
    })
    tl.fromTo(textSplit.words, {
      "will-change": "opacity",
      opacity: 0,
      filter: "blue(20px)",
    }, {
      ease: "power2.inOut",
      opacity: 1,
      filter: "blur(0px)",
      stagger: {
        each: 0.02,
        from: 'start',

      }
    })
  }, { scope: aboutRef })
  return (
    <section id="about" ref={aboutRef} className='py-20 border-t border-neutral-200'>
      <div className="container space-y-14">
        {/* Content */}
        <div className="space-y-3">
          {/* title */}
          <div className="text-4xl lg:text-7xl font-bold flex items-center font-poppins">
            <span>Ab</span>
            <Image src='/images/about-page-icon.png' alt="About icon" width={512} height={512} className="size-14 inline-block shrink-0" />
            <span>ut me</span>
          </div>
          <p className="about-text max-w-3xl text-lg leading-relaxed text-neutral-700">Front-End Developer with 4+ years of experience specialising in React.js, Next.js, and JavaScript. I build scalable, high-performance applications with responsive, user-centric interfaces, focusing on performance optimisation, reusable components, and clean, maintainable code.</p>
        </div>
        {/* wrapper */}
        <div className="border-t border-neutral-300">
          {aboutItems.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center gap-8 border-b border-neutral-300 py-2">
              {/* Icon */}
              <div className="size-24 flex items-center justify-center">
                <Image src={item.icon} alt={item.title} width={512} height={512} className="w-full h-auto object-cover" />
              </div>
              {/* content */}
              <div className="">
                <h3 className="about-text text-4xl font-bold uppercase ">{item.title}</h3>
                <p className="about-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
