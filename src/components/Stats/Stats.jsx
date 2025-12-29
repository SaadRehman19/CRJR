import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

const statsData = [
  {
    value: '$40M+',
    number: 40,
    prefix: '$',
    suffix: 'M+',
    lines: ['Revenue Driven for Brands', 'Across Amazon, Walmart &', 'TikTok'],
    hasDivider: false,
  },
  {
    value: '25+',
    number: 25,
    suffix: '+',
    lines: ['Brands Scaled Using Our', 'Proven WINNING Framework'],
    hasDivider: true,
  },
  {
    value: '3x – 10x',
    displayValue: '3x – 10x',
    lines: ['Avg. Growth Brands', 'Experience in Year One'],
    hasDivider: true,
    noAnimation: true,
  },
  {
    value: '98%',
    number: 98,
    suffix: '%',
    lines: ['Client Retention Rate Among', 'Growth-Ready Brands'],
    hasDivider: true,
  },
];

const StatItem = ({ value, number, prefix = '', suffix = '', displayValue, noAnimation, lines, hasDivider, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const displayCount = useMotionValue(0);

  useEffect(() => {
    if (isInView && number && !noAnimation) {
      motionValue.set(number);
    }
  }, [isInView, number, noAnimation, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      displayCount.set(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [springValue, displayCount]);

  return (
    <motion.div
      ref={ref}
      className={`flex-1 flex flex-col items-center text-center px-4 py-6 md:py-0 ${
        hasDivider ? 'border-t md:border-t-0 md:border-l border-white/10' : ''
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Stat Value */}
      <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
        {noAnimation || displayValue ? (
          displayValue || value
        ) : (
          <>
            {prefix}
            <motion.span>{displayCount}</motion.span>
            {suffix}
          </>
        )}
      </h3>
      {/* Stat Description */}
      <div className="space-y-0">
        {lines.map((line, lineIndex) => (
          <motion.p
            key={lineIndex}
            className="text-sm md:text-base text-slate-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.3 + lineIndex * 0.1 }}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section className="relative w-full bg-[#102A43] py-16 md:py-20 overflow-hidden">
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative max-w-8xl mx-auto px-6 lg:px-20">
        {/* Stats Grid */}
        <div className="flex flex-col md:flex-row items-stretch justify-between">
          {statsData.map((stat, index) => (
            <StatItem
              key={index}
              index={index}
              value={stat.value}
              number={stat.number}
              prefix={stat.prefix}
              suffix={stat.suffix}
              displayValue={stat.displayValue}
              noAnimation={stat.noAnimation}
              lines={stat.lines}
              hasDivider={stat.hasDivider}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

