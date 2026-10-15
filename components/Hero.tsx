"use client"
import { gsap, useGSAP, SplitText } from "@/lib/gsap";
import Image from "next/image";
import React, { useRef } from "react";
import CustomLink from "./CustomLink";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  useGSAP(() => {
    const textSplit = SplitText.create('.hero-text', {
      type: 'words,lines',
    })

    gsap.fromTo(textSplit.words, {
      "will-change": "opacity",
      opacity: 0,
      filter: 'blur(20px)'
    }, {
      ease: 'power2.inOut',
      opacity: 1,
      filter: 'blur(0px)',
      stagger: {
        each: 0.09,
        from: "start"
      }
    })

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

    gsap.fromTo('.hero-title', {
      textShadow: fromTextShadowString
    }, {
      duration: speed,
      textShadow: TextShadowString,
      x: '8px',
      y: '-8px',
      delay: 1
    })
  }, { scope: heroRef })
  return <section ref={heroRef} className='pt-20 pb-10'>
    <div className="container flex flex-col items-center">
      {/* Image */}
      <div className="size-22.5 bg-black flex rounded-full overflow-hidden">
        <Image src="/images/linkedin-profile.jpg" alt="Tazim Ansari" width={150} height={150} className="h-full w-full object-cover" priority />
      </div>
      {/* content */}
      <div className="text-center mt-4 spacey-y-4">
        <h1 className="font-poppins font-extrabold text-4xl lg:text-6xl uppercase w-full h-full text-neutral-900/90">Tazim Ansari <span className='hero-title' style={{
            WebkitTextStroke: "1px #171717",
            WebkitTextFillColor: "white",
          }}>Front-End</span> Developer
        </h1>

        <p className="hero-text sm:max-w-md mx-auto text-neutral-600">
          Building scalable, high-performance web applications with React.js and JavaScript. Four years of crafting responsive, user-focused interfaces.
        </p>
      </div>
      <CustomLink label="Explore my work" href="#projects" className='text-xl font-semibold' />
    </div>
  </section>;
}
