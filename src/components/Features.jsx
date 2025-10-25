import React from 'react';
import { Shield, Sparkles, Cpu, MousePointerClick } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Playful by design',
    desc: 'Minimalist aesthetics with a friendly personality. Subtle orange lighting adds warmth without distraction.'
  },
  {
    icon: Cpu,
    title: 'Tech-forward',
    desc: 'Built with modern web tech: React, Vite, Tailwind, and an interactive Spline 3D scene.'
  },
  {
    icon: MousePointerClick,
    title: 'Fully interactive',
    desc: 'Click, drag, and explore. The 3D robot responds fluidly for a delightful first impression.'
  },
  {
    icon: Shield,
    title: 'Performance-minded',
    desc: 'Optimized layout, GPU-accelerated rendering, and accessible color contrast.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative py-16 md:py-24">
      <div className="absolute inset-0 -z-0 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Why this robot?</h2>
          <p className="mt-3 text-neutral-300">A curated blend of minimalism, interactivity, and modern web craftsmanship.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-orange-500/80 to-amber-600/80 text-neutral-950">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
