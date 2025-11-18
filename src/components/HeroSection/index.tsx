import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.h1 
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="block">智能营销新时代</span>
                <span className="block gradient-text mt-2">让每一分投入都物超所值</span>
              </motion.h1>
              <motion.p 
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                基于AI的智能营销平台，一站式解决文案创作、素材制作、效果预测等营销难题，
                让您的营销活动更高效、更精准、更具创意。
              </motion.p>
              <motion.div 
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="btn-primary flex items-center justify-center"
                  >
                    立即开始
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="btn-secondary flex items-center justify-center"
                  >
                    查看演示
                  </a>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <motion.div 
          className="h-56 w-full bg-gradient-to-r from-primary-400 to-accent-500 sm:h-72 md:h-96 lg:w-full lg:h-full rounded-l-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-white/20 backdrop-blur-sm rounded-xl p-4 w-32 h-32 flex items-center justify-center"
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <div className="bg-white/30 rounded-lg w-16 h-16 flex items-center justify-center">
                    {[<div key="1" className="w-8 h-8 bg-white rounded"></div>, 
                      <div key="2" className="w-6 h-6 bg-white rounded-full"></div>, 
                      <div key="3" className="w-10 h-2 bg-white rounded"></div>, 
                      <div key="4" className="w-4 h-4 bg-white rounded-full"></div>][i]}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;