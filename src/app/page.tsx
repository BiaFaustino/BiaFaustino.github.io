"use client";
import Image from "next/image";
import { GalleryCard } from "@/components/GalleryCard";
import { FadeIn } from "@/components/FadeIn";
import { SplitText } from "@/components/SplitText";
import { pictures } from "@/assets/media/be-pictures";
import { designGrafico } from "@/assets/media/graphic-design";
import { designParaRedes } from "@/assets/media/design-for-webs";
import { identidadeVisual } from "@/assets/media/visual-identity";
import { midiaOOH } from "@/assets/media/midea-OOH";
import { videoParaRedes } from "@/assets/media/video-for-webs";
import { motion } from "framer-motion";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: "700" });

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-accent selection:text-black font-body overflow-x-hidden bg-[#0A0A0A]">

      {/* SECTION 1: HERO - MOBILE-FIRST REFACTOR */}
      <section className="relative z-10 min-h-[100svh] bg-[#0A0A0A] text-white flex flex-col items-center justify-center py-20 px-6 md:py-32 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] mix-blend-overlay bg-[url('/noise.png')] bg-repeat"></div>
        <FadeIn className="w-full">
          {/* Default Mobile Col -> MD Row */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 relative z-10 mt-12 md:mt-0">
            <div className="flex-1 w-full space-y-6 md:space-y-8 relative text-center md:text-left">
              <div className="space-y-4 relative z-10">
                <p className="text-sm md:text-xl font-bold tracking-widest uppercase text-gray-500">Hello, I am</p>

                {/* Mobile Text Scaling */}
                <h1 className="text-[40px] leading-[1.1] sm:text-[56px] md:text-[88px] font-extrabold tracking-tight md:leading-none uppercase font-heading text-white">
                  <SplitText text="BEATRIZ" /> <br />
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="bg-accent text-black px-3 md:px-4 inline-block mt-2 md:mt-4 shadow-[4px_4px_0px_#B3B3B3] md:shadow-[6px_6px_0px_#B3B3B3]"
                  >
                    PEREZ FAUSTINO
                  </motion.span>
                </h1>

                {/* ASSINATURA EDITORIAL - Reduced for mobile */}
                <motion.div
                  initial={{ opacity: 0, rotate: -3 }}
                  animate={{ opacity: 1, rotate: -6 }}
                  transition={{ duration: 1.2, delay: 1.2 }}
                  className={`absolute right-0 md:right-32 top-[100px] md:top-40 text-[32px] md:text-[56px] text-neutral-400 opacity-60 pointer-events-none ${caveat.className}`}
                >
                  Beatriz Faustino
                </motion.div>

                <p className="text-[16px] md:text-[20px] text-gray-400 font-medium max-w-lg leading-relaxed mt-4 md:mt-6 mx-auto md:mx-0">
                  Creative Developer & Art Director crafting bold, high-contrast digital experiences. Usability engineered with an edgy aesthetic.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 md:gap-6 pt-6 md:pt-8">
                <a href="mailto:beatrizperezxb@gmail.com" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto min-h-[56px] min-w-[56px] px-8 py-4 bg-accent text-black font-bold rounded shadow-[0_0_20px_rgba(198,255,0,0.3)] uppercase tracking-wide text-sm font-heading flex items-center justify-center"
                  >
                    Start a Project
                  </motion.button>
                </a>
              </div>
            </div>

            <div className="flex-1 w-full max-w-sm md:max-w-md relative aspect-[4/5] mt-8 md:mt-0">
              {pictures.length > 0 && (
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.05)] border-4 border-[#2A2A2A] transition-transform duration-700 hover:scale-[1.02] grayscale hover:grayscale-0">
                  <Image src={pictures[0]} alt="Beatriz Perez Faustino" fill className="object-cover" priority />
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* SECTION 2: EXPERTISE/TOC - LIGHT */}
      <section className="relative z-10 bg-white text-black py-20 md:py-32 px-6 md:px-8">
        <div className="relative z-10 max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col gap-8 md:flex-row md:justify-between items-start md:items-center border-b border-gray-200 pb-10 md:pb-16 pt-8 md:pt-0">
              <h2 className="text-[32px] md:text-[48px] font-bold uppercase tracking-tight text-black font-heading leading-tight">Expertise <br className="md:hidden" /><span className="text-gray-400">Index</span></h2>
              <div className="flex flex-col sm:flex-row flex-wrap gap-y-4 gap-x-8 md:gap-x-12 font-black text-[20px] md:text-[24px] uppercase tracking-widest text-black w-full md:w-auto">
                <div className="hover:text-accent cursor-pointer transition-colors duration-300 flex items-center gap-4 min-h-[44px]">
                  <span className="text-sm font-body font-normal text-gray-400">01</span> Design Gráfico
                </div>
                <div className="hover:text-accent cursor-pointer transition-colors duration-300 flex items-center gap-4 min-h-[44px]">
                  <span className="text-sm font-body font-normal text-gray-400">02</span> Design para Redes
                </div>
                <div className="hover:text-accent cursor-pointer transition-colors duration-300 flex items-center gap-4 min-h-[44px]">
                  <span className="text-sm font-body font-normal text-gray-400">03</span> Identidade Visual
                </div>
                <div className="hover:text-accent cursor-pointer transition-colors duration-300 flex items-center gap-4 min-h-[44px]">
                  <span className="text-sm font-body font-normal text-gray-400">04</span> Mídia OOH
                </div>
                <div className="hover:text-accent cursor-pointer transition-colors duration-300 flex items-center gap-4 min-h-[44px]">
                  <span className="text-sm font-body font-normal text-gray-400">05</span> Vídeo para Redes
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3: DESIGN GRÁFICO - DARK */}
      <section className="relative z-10 bg-[#0A0A0A] text-white py-20 md:py-32 px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] mix-blend-overlay bg-[url('/noise.png')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 space-y-12 md:space-y-16">
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 mb-12">
            <FadeIn>
              <h2 className="text-[40px] leading-none md:text-[64px] font-black text-white uppercase font-heading md:leading-tight">
                Design <span className="text-accent">Gráfico</span>
              </h2>
            </FadeIn>
            {pictures.length > 1 && (
              <FadeIn delay={0.3}>
                <motion.div
                  initial={{ rotate: -10 }}
                  whileHover={{ scale: 1.15, rotate: 5, borderRadius: "50%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-32 h-32 md:w-48 md:h-[220px] relative rounded-2xl overflow-hidden shadow-[8px_8px_0px_#C6FF00] border-2 border-[#2A2A2A] grayscale hover:grayscale-0 z-20 cursor-pointer"
                >
                  <Image src={pictures[1]} alt="Beatriz" fill className="object-cover" />
                </motion.div>
              </FadeIn>
            )}
          </div>

          <div className="space-y-20">
            {designGrafico.map((project, pIdx) => (
              <div key={`dg-proj-${pIdx}`}>
                <FadeIn delay={0.1}>
                  <h3 className="text-[24px] md:text-[32px] font-bold text-gray-300 mb-8 uppercase tracking-wider border-b border-[#2A2A2A] pb-4">
                    {project.project}
                  </h3>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8">
                    {project.images.map((img, idx) => (
                      <GalleryCard key={`dg-${pIdx}-${idx}`} src={img} alt={`${project.project} ${idx}`} className="mb-6 md:mb-8 border-[#2A2A2A] break-inside-avoid" />
                    ))}
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: DESIGN PARA REDES - LIGHT */}
      <section className="relative z-10 bg-white text-black py-20 md:py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto relative z-10 space-y-12 md:space-y-16">
          <div className="flex flex-col md:flex-row-reverse items-start md:items-end justify-between gap-8 mb-12">
            <FadeIn className="w-full text-left md:text-right">
              <h2 className="text-[40px] leading-none md:text-[64px] font-black text-black uppercase font-heading md:leading-tight">
                Design para <br className="hidden md:block" /><span className="bg-accent text-black px-2 shadow-[4px_4px_0px_#000]">Redes</span>
              </h2>
            </FadeIn>
            {pictures.length > 3 && (
              <FadeIn delay={0.2}>
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, 3, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  whileHover={{ scale: 1.05 }}
                  className="w-40 h-40 md:w-56 md:h-56 relative rounded-full overflow-hidden border-4 border-black shadow-[0_20px_50px_rgba(0,0,0,0.15)] grayscale hover:grayscale-0 cursor-pointer"
                >
                  <Image src={pictures[3]} alt="Beatriz Work" fill className="object-cover" />
                </motion.div>
              </FadeIn>
            )}
          </div>

          <div className="space-y-20">
            {designParaRedes.map((project, pIdx) => (
              <div key={`dpr-proj-${pIdx}`}>
                <FadeIn delay={0.1}>
                  <h3 className="text-[24px] md:text-[32px] font-bold text-gray-800 mb-8 uppercase tracking-wider border-b border-gray-200 pb-4">
                    {project.project}
                  </h3>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8">
                    {project.images.map((img, idx) => (
                      <GalleryCard key={`dpr-${pIdx}-${idx}`} src={img} alt={`${project.project} ${idx}`} className="mb-6 md:mb-8 border-gray-200 shadow-sm break-inside-avoid" />
                    ))}
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: IDENTIDADE VISUAL - DARK */}
      <section className="relative z-10 bg-[#0A0A0A] text-white py-20 md:py-32 px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] mix-blend-overlay bg-[url('/noise.png')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 space-y-12 md:space-y-16">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mb-12">
            <FadeIn>
              <h2 className="text-[40px] leading-none md:text-[64px] font-black text-white uppercase font-heading md:leading-tight">
                Identidade <br className="hidden md:block" /><span className="text-accent">Visual</span>
              </h2>
            </FadeIn>
            {pictures.length > 0 && (
              <FadeIn delay={0.4}>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-48 h-52 md:w-64 md:h-52 relative rounded-tl-3xl rounded-br-3xl overflow-hidden border border-[#2A2A2A] shadow-[8px_8px_0px_#fff] grayscale hover:grayscale-0 cursor-pointer"
                >
                  <Image src={pictures[pictures.length > 2 ? 2 : 0]} alt="Beatriz Visual" fill className="object-cover object-top" />
                </motion.div>
              </FadeIn>
            )}
          </div>

          <div className="space-y-20">
            {identidadeVisual.map((project, pIdx) => (
              <div key={`iv-proj-${pIdx}`}>
                <FadeIn delay={0.1}>
                  <h3 className="text-[24px] md:text-[32px] font-bold text-gray-300 mb-8 uppercase tracking-wider border-b border-[#2A2A2A] pb-4">
                    {project.project}
                  </h3>
                </FadeIn>
                <FadeIn delay={0.2}>
                  {project.type === 'pdf' ? (
                    <a href={typeof project.file === 'string' ? project.file : (project.file as any)?.src} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-[#1A1A1A] border border-[#2A2A2A] p-6 rounded-xl hover:bg-[#222] transition-colors">
                      <span className="text-4xl text-accent">📄</span>
                      <span className="text-xl font-bold">Ver Apresentação PDF</span>
                    </a>
                  ) : (
                    <div className="columns-1 gap-6 md:gap-8">
                      {project.file && <GalleryCard src={project.file} alt={`${project.project}`} className="mb-6 md:mb-8 border-[#2A2A2A] break-inside-avoid" />}
                    </div>
                  )}
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: MÍDIA OOH - LIGHT */}
      <section className="relative z-10 bg-white text-black py-20 md:py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto relative z-10 space-y-12 md:space-y-16">
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 mb-12">
            <FadeIn>
              <h2 className="text-[40px] leading-none md:text-[64px] font-black text-black uppercase font-heading md:leading-tight">
                Mídia <span className="bg-accent text-black px-2 shadow-[4px_4px_0px_#000]">OOH</span>
              </h2>
            </FadeIn>
          </div>

          <div className="space-y-20">
            {midiaOOH.map((project, pIdx) => (
              <div key={`ooh-proj-${pIdx}`}>
                <FadeIn delay={0.1}>
                  <h3 className="text-[24px] md:text-[32px] font-bold text-gray-800 mb-8 uppercase tracking-wider border-b border-gray-200 pb-4">
                    {project.project}
                  </h3>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="columns-1 gap-6 md:gap-8">
                    {project.images.map((img, idx) => (
                      <GalleryCard key={`ooh-${pIdx}-${idx}`} src={img} alt={`${project.project} ${idx}`} className="mb-6 md:mb-8 border-gray-200 shadow-sm break-inside-avoid" />
                    ))}
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: VÍDEO PARA REDES - DARK */}
      <section className="relative z-10 bg-[#0A0A0A] text-white py-20 md:py-32 px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] mix-blend-overlay bg-[url('/noise.png')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 space-y-12 md:space-y-16">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mb-12">
            <FadeIn>
              <h2 className="text-[40px] leading-none md:text-[64px] font-black text-white uppercase font-heading md:leading-tight">
                Vídeo para <br className="hidden md:block" /><span className="text-accent">Redes</span>
              </h2>
            </FadeIn>
          </div>

          <div className="space-y-20">
            {videoParaRedes.map((project, pIdx) => (
              <div key={`vr-proj-${pIdx}`}>
                <FadeIn delay={0.1}>
                  <h3 className="text-[24px] md:text-[32px] font-bold text-gray-300 mb-8 uppercase tracking-wider border-b border-[#2A2A2A] pb-4">
                    {project.project}
                  </h3>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="rounded-2xl overflow-hidden border-4 border-[#2A2A2A] aspect-video sm:aspect-auto sm:h-[600px] flex justify-center bg-black">
                    <video controls muted loop playsInline className="h-full w-full object-contain" src={typeof project.video === 'string' ? project.video : (project.video as any)?.src}>
                      Seu navegador não suporta tags de vídeo.
                    </video>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FOOTER - DARK */}
      <section className="relative z-10 bg-[#0A0A0A] text-white pt-32 pb-16 md:py-48 px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] mix-blend-overlay bg-[url('/noise.png')] bg-repeat"></div>
        <FadeIn className="w-full">
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center justify-center text-center space-y-10 md:space-y-12">

            {pictures.length > 3 && (
              <div className="w-[120px] h-[120px] md:w-40 md:h-40 relative rounded-full overflow-hidden shadow-[0_0_20px_rgba(198,255,0,0.3)] border-4 border-accent mb-6 md:mb-8">
                <Image src={pictures[3]} alt="Beatriz Contact" fill className="object-cover" />
              </div>
            )}

            <h2 className="text-[40px] md:text-[80px] font-black uppercase tracking-tighter text-white leading-[1.1] md:leading-none font-heading relative w-full pt-4 md:pt-0">
              Let's create <br /> <span className="bg-accent text-black px-3 md:px-4 inline-block mt-2 md:mt-4 shadow-[4px_4px_0px_#B3B3B3] md:shadow-[6px_6px_0px_#B3B3B3] relative z-20 whitespace-break-spaces">Magic together</span>

              <div className={`absolute right-0 md:-right-24 bottom-[-40px] md:-bottom-20 text-[40px] md:text-[72px] text-neutral-500 opacity-40 pointer-events-none -rotate-6 ${caveat.className} z-10`}>
                Beatriz Faustino
              </div>
            </h2>

            <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4 md:gap-6 mt-20 md:mt-16 pt-8 relative z-30">
              <a href="mailto:beatrizperezxb@gmail.com" className="w-full">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full min-h-[56px] px-8 py-4 md:px-10 md:py-5 bg-accent text-black font-black rounded uppercase tracking-wider text-[16px] md:text-lg font-heading shadow-[0_0_20px_rgba(198,255,0,0.3)] flex items-center justify-center"
                >
                  Email Me
                </motion.button>
              </a>
              <a href="https://instagram.com/_bea_faustino" target="_blank" rel="noreferrer" className="w-full">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full min-h-[56px] px-8 py-4 md:px-10 md:py-5 bg-transparent border-2 border-accent text-accent font-black rounded uppercase tracking-wider text-[16px] md:text-lg font-heading hover:bg-[#1A1A1A] flex items-center justify-center"
                >
                  Instagram
                </motion.button>
              </a>
            </div>

            <div className="w-full mt-24 md:mt-40 pt-10 md:pt-12 border-t border-[#2A2A2A] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-[#B3B3B3] font-bold">
              <span className="font-body text-[12px] md:text-sm uppercase tracking-widest text-[#B3B3B3] text-center w-full md:w-auto block">© 2026 Beatriz Perez Faustino</span>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-center w-full md:w-auto">
                <span className="uppercase tracking-widest text-[12px] md:text-sm hover:text-accent transition-colors cursor-pointer min-h-[44px] flex items-center justify-center w-full md:w-auto">beatrizperezxb@gmail.com</span>
                <span className="uppercase tracking-widest text-[12px] md:text-sm hover:text-accent transition-colors cursor-pointer min-h-[44px] flex items-center justify-center w-full md:w-auto">@_bea_faustino</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

    </main>
  );
}
