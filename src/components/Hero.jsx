import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative h-[70vh] md:h-[80vh]">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/40 to-neutral-950" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200">
              <span className="inline-block h-2 w-2 rounded-full bg-orange-500"></span>
              Interactive 3D • Friendly Robotics
            </div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Say hello to your friendly mini robot
            </h1>
            <p className="mt-4 max-w-xl text-neutral-300">
              A black-and-white companion with a warm orange glow. Explore, rotate, and play with the 3D scene as you discover a minimalist, tech-forward experience.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#try"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-orange-500 to-amber-600 px-5 py-2.5 text-sm font-medium text-neutral-950 shadow hover:brightness-110 transition"
              >
                Try the demo
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white hover:bg-white/10 transition"
              >
                Learn more
              </a>
            </div>
            <p className="mt-3 text-xs text-neutral-400">Tip: You can click and drag the robot to interact with it.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
