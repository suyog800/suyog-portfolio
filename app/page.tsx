"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "talks", label: "Talks" },
  { id: "contact", label: "Contact" },
];

const container = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, duration: 0.5, ease: "easeOut" } },
};
const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } };

export default function Page() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[rgb(var(--surface-2))]" />
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full blur-3xl opacity-30 bg-teal-300/30" />
      </div>

      <main className="text-zinc-900 dark:text-zinc-100">
        <Header theme={theme} setTheme={setTheme} />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Talks />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

function Shell({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t" style={{ borderColor: `rgb(var(--border))` }}>
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

function Header({ theme, setTheme }: { theme: "light" | "dark"; setTheme: (v: "light" | "dark") => void }) {
  return (
    <header className="sticky top-0 z-40 border-b backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/50"
            style={{ borderColor: `rgb(var(--border))` }}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight">Suyog Chougule</a>
          <nav className="hidden md:flex gap-6 text-sm">
            {sections.map((s) => (
              <a key={s.id} href={"#" + s.id} className="text-zinc-600 dark:text-[rgb(var(--text-muted))] hover:text-teal-500">
                {s.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="mailto:suyogchougule800@gmail.com" className="btn btn-outline">Contact</a>
            <button aria-label="Toggle theme" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="btn btn-outline px-2">
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-20 md:pt-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div className="md:col-span-7" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">Embedded Systems & Robotics Engineer</h1>
            <p className="mt-4 text-[rgb(var(--text-muted))] text-lg">Building real-time controllers, CAN toolchains, and ROS2 software. Based in Bangalore, India.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/in/suyog-chougule/" className="btn btn-outline">LinkedIn</a>
              <a href="https://github.com/suyog800" className="btn btn-outline">GitHub</a>
              <a href="#projects" className="btn btn-primary">View Projects</a>
            </div>
          </motion.div>
          <motion.div className="md:col-span-5" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}>
            <div className="relative aspect-square rounded-3xl card overflow-hidden">
              <Image src="/me.PNG" alt="Suyog Chougule" fill className="object-cover" priority />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Shell id="about" title="About">
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="prose prose-zinc dark:prose-invert max-w-none">
        <motion.p variants={item}>
          I build reliable <strong>embedded systems</strong> and <strong>robotics</strong> software — from MCU firmware and CAN stacks to ROS2 control and real-time GUIs. I love turning rough ideas into production-ready hardware+software.
        </motion.p>
      </motion.div>
    </Shell>
  );
}

function Experience() {
  const roles = [
    { company: "Twara Robotics (formerly Gati Robotics)", location: "Bangalore, India", title: "Associate Engineer – Embedded Systems", period: "Jul 2024 – Present", bullets: [
      "Built a custom backend for robotic arms; optimized C++ real-time code to cut CAN latency from ~500 ms to <200 ms.",
      "Developing high-performance embedded controllers and robust CAN-based comms for real-time control.",
    ]},
    { company: "Twara Robotics", location: "Bangalore, India", title: "Embedded Systems Intern (Jan 2024 – Jun 2024)", period: "ROS2 / MoveIt2", bullets: [
      "Worked on ROS2 control interfaces and integrated MoveIt2 for planning and servoing.",
    ]},
    { company: "Twara Robotics", location: "Remote / Bangalore", title: "Embedded Systems Intern (Aug 2023 – Dec 2023)", period: "Drivers & Soft Robotics", bullets: [
      "Developed a generic ROS2 driver for Twara actuators; built control software for a soft-robotics test rig (Dynamixel).",
    ]},
    { company: "Ripple Technologies (Startup)", location: "Manipal, India", title: "Founder", period: "Nov 2021 – Dec 2024", bullets: [
      "Secured ₹7L NIDHI PRAYAS grant for a Type-3 DC fast charger; raised ₹1L pre-prototype funding.",
      "Designed a 50 kW DC charger using a Vienna Rectifier + PSFB DC-DC; authored drivers & STM32 firmware.",
    ]},
  ];
  return (
    <Shell id="experience" title="Experience">
      <motion.ul variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-6">
        {roles.map((r, i) => (
          <motion.li key={i} variants={item} className="card">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="text-lg font-medium">{r.title}</div>
              <div className="text-sm text-[rgb(var(--text-muted))]">{r.period}</div>
            </div>
            <div className="mt-1 text-sm text-[rgb(var(--text-muted))]">{r.company} • {r.location}</div>
            <ul className="mt-3 list-disc pl-5 text-sm leading-relaxed">{r.bullets.map((b, j) => (<li key={j}>{b}</li>))}</ul>
          </motion.li>
        ))}
      </motion.ul>
    </Shell>
  );
}

type Project = { name: string; blurb: string; tags: string[]; gallery: string[] };

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number; title: string } | null>(null);

  useEffect(() => {
    fetch("/projects/manifest.json")
      .then((r) => r.json())
      .then((data: Project[]) => setProjects(data))
      .catch((e) => console.error("Failed to load manifest:", e));
  }, []);

  const openLightbox = (images: string[], index: number, title: string) => setLightbox({ images, index, title });
  const closeLightbox = () => setLightbox(null);
  const next = () => setLightbox((lb) => (lb ? { ...lb, index: (lb.index + 1) % lb.images.length } : lb));
  const prev = () => setLightbox((lb) => (lb ? { ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length } : lb));

  return (
    <Shell id="projects" title="Projects">
      {projects.length === 0 ? (
        <div className="text-sm text-[rgb(var(--text-muted))]">No projects found in <code>/public/projects</code> yet. Add images and re-run.</div>
      ) : (
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const cover = p.gallery[0];
            return (
              <motion.article key={i} variants={item} className="card hover:-translate-y-1 hover:shadow-md transition cursor-pointer"
                              onClick={() => openLightbox(p.gallery, 0, p.name)} title="Click to view gallery">
                <div className="aspect-video rounded-2xl overflow-hidden mb-3 border" style={{ borderColor: `rgb(var(--border))` }}>
                  <Image src={`/projects/${cover}`} alt={p.name} width={640} height={360}
                         className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-medium text-lg">{p.name}</h3>
                {p.blurb && <p className="mt-1 text-sm text-[rgb(var(--text-muted))]">{p.blurb}</p>}
                {p.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t, j) => (<span key={j} className="text-xs rounded-full border px-2 py-0.5" style={{ borderColor: `rgb(var(--border))` }}>{t}</span>))}
                  </div>
                ) : null}
              </motion.article>
            );
          })}
        </motion.div>
      )}

      {lightbox && (
        <Lightbox title={lightbox.title} images={lightbox.images} index={lightbox.index}
                  onClose={closeLightbox} onPrev={prev} onNext={next} />
      )}
    </Shell>
  );
}

function Skills() {
  const groups = [
    { name: "Programming", items: ["C", "C++", "Python", "JavaScript"] },
    { name: "Embedded Systems", items: ["Bare-metal", "STM32 HAL", "FreeRTOS", "Arduino", "Raspberry Pi"] },
    { name: "PCB Design", items: ["High-power", "Multilayer", "KiCad", "Fusion 360"] },
    { name: "Control & Robotics", items: ["PWM/PID", "FOC", "MoveIt2", "ROS2 Control", "Fault Detection"] },
    { name: "Protocols", items: ["CAN", "RS485", "I2C", "SPI"] },
    { name: "Modeling & Sim", items: ["MATLAB/Simscape", "Gazebo", "Three.js"] },
    { name: "Power Electronics", items: ["DC-DC", "Inverters", "SiC/IGBT Drivers"] },
  ];
  return (
    <Shell id="skills" title="Skills">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((g, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: i * 0.03 }} className="card">
            <div className="font-medium">{g.name}</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {g.items.map((s, j) => (<span key={j} className="text-xs rounded-full border px-2 py-0.5" style={{ borderColor: `rgb(var(--border))` }}>{s}</span>))}
            </div>
          </motion.div>
        ))}
      </div>
    </Shell>
  );
}

function Talks() {
  return (
    <Shell id="talks" title="Talks & Recognition">
      <motion.ul variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-4">
        {[{ title: "Speaker @ ROSCon India 2024 (IISc Bangalore)", note: "Talk: ROS2 Control in Mobile Robots & Robotic Arms" },
          { title: "State topper in 12th Mathematics", note: "Scored 100/100" }].map((t, i) => (
          <motion.li key={i} variants={item} className="card">
            <div className="font-medium">{t.title}</div>
            <div className="text-sm text-[rgb(var(--text-muted))]">{t.note}</div>
          </motion.li>
        ))}
      </motion.ul>
    </Shell>
  );
}

function Contact() {
  return (
    <Shell id="contact" title="Contact">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <div className="text-sm text-[rgb(var(--text-muted))]">Email</div>
          <a className="text-lg font-medium hover:underline" href="mailto:suyogchougule800@gmail.com">suyogchougule800@gmail.com</a>
          <div className="mt-4 text-sm text-[rgb(var(--text-muted))]">Phone</div>
          <div className="text-lg font-medium">+91-9741687782</div>
        </div>
        <div className="card">
          <div className="text-sm text-[rgb(var(--text-muted))]">Links</div>
          <div className="mt-2 flex flex-wrap gap-3">
            <a className="underline underline-offset-4" href="https://www.linkedin.com/in/suyog-chougule/">LinkedIn</a>
            <a className="underline underline-offset-4" href="https://github.com/suyog800">GitHub</a>
          </div>
        </div>
      </div>
    </Shell>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t py-10" style={{ borderColor: `rgb(var(--border))` }}>
      <div className="mx-auto max-w-6xl px-4 text-sm text-[rgb(var(--text-muted))] flex flex-wrap justify-between items-center gap-4">
        <div>© {new Date().getFullYear()} Suyog Chougule</div>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline">Built with Next.js & Tailwind</span>
          <span>•</span>
          <a href="#top" className="hover:text-teal-500">Back to top</a>
        </div>
      </div>
    </footer>
  );
}

function Lightbox({ title, images, index, onClose, onPrev, onNext }: {
  title: string; images: string[]; index: number;
  onClose: () => void; onPrev: () => void; onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div className="fixed inset-0 z-50 bg-black/80" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={onClose}>
      <div className="absolute inset-4 md:inset-10 lg:inset-20 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="absolute top-3 left-4 right-16 text-white/90 text-sm truncate">{title}</div>
        <button aria-label="Previous" onClick={onPrev} className="absolute left-2 top-1/2 -translate-y-1/2 btn btn-outline text-white/90 border-white/30 hover:bg-white/10">←</button>
        <button aria-label="Next" onClick={onNext} className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-outline text-white/90 border-white/30 hover:bg-white/10">→</button>
        <button aria-label="Close" onClick={onClose} className="absolute top-2 right-2 btn btn-outline text-white/90 border-white/30 hover:bg-white/10">✕</button>
        <div className="absolute inset-0">
          <Image src={`/projects/${images[index]}`} alt={`${title} – ${index + 1}/${images.length}`} fill className="object-contain" priority />
        </div>
      </div>
    </motion.div>
  );
}
