import { useState } from 'react';
import { motion } from 'framer-motion';
import brandInnovationIcon from '../../assets/brand_innovation.svg';
import marketplaceMasteryIcon from '../../assets/marketplace_mystery.svg';
import operationalExcellenceIcon from '../../assets/operational_excellence.svg';

// Ecosystem pillars data
const ecosystemPillars = [

  {
    title: 'Brand Innovation',
    description: 'Building proprietary brands from concept to market leadership using the proven WINNING Strategy framework.',
    stats: [
      { value: '$1.5MM', label: 'Year 1 Revenue' },
      { value: '4', label: 'Owned Brands' },
    ],
    variant: 'light', // Gradient white background
    icon: brandInnovationIcon,
  },
  {
    title: 'Marketplace Mastery',
    description: 'Deep expertise in Amazon, Walmart, and TikTok marketplace operations with proven systems for scaling brands from zero to millions.',
    stats: [
      { value: '$40MM+', label: 'Total Revenue' },
      { value: '3', label: 'Platforms' },
    ],
    variant: 'dark', // Dark navy background
    icon: marketplaceMasteryIcon,
  },
  {
    title: 'Operational Excellence',
    description: 'End-to-end operations management including product development, manufacturing, logistics, and fulfillment.',
    stats: [
      { value: '100%', label: 'In-House Control' },
      { value: '24/7', label: 'Operations' },
    ],
    variant: 'light', // Gradient white background
    icon: operationalExcellenceIcon,
  },
];

const EcosystemCard = ({ title, description, stats, variant, icon, index }) => {
  const isDarkByDefault = variant === 'dark';
  const [isHovered, setIsHovered] = useState(false);

  const isDark = isDarkByDefault || isHovered;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ scale: 1.05, y: -8 }}
      whileTap={{ scale: 0.98 }}
      animate={{
        background: isDark
          ? 'linear-gradient(135deg, #102A43 0%, #0A1929 100%)'
          : 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(249, 250, 251, 1) 100%)',
      }}
      className={`rounded-[16px] md:rounded-[24px] p-5 md:p-6 flex flex-col h-full cursor-pointer transition-all duration-300 ease-in-out border-2 ${
        isDark ? 'border-[#1B9DD9]' : 'border-transparent'
      }`}
      style={{ boxShadow: '0px 10px 15px 0px rgba(0, 0, 0, 0.1), 0px 4px 6px 0px rgba(0, 0, 0, 0.1)' }}
      onMouseEnter={() => !isDarkByDefault && setIsHovered(true)}
      onMouseLeave={() => !isDarkByDefault && setIsHovered(false)}
    >
      {/* Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
        className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 transition-all duration-500 ${
          isDark ? 'bg-white/20' : 'bg-[#e5e7eb]'
        }`}
      >
        <motion.img
          whileHover={{ rotate: 12, scale: 1.1 }}
          src={icon}
          alt=""
          className="w-5 h-5 md:w-6 md:h-6"
        />
      </motion.div>

      {/* Title */}
      <h3 className={`text-[18px] md:text-xl font-bold mb-2 md:mb-3 leading-tight transition-colors duration-500 ${isDark ? 'text-white' : 'text-[#102A43]'}`}>
        {title}
      </h3>

      {/* Description */}
      <p className={`text-[13px] md:text-sm leading-relaxed mb-4 md:mb-6 flex-grow transition-colors duration-500 ${isDark ? 'text-white/70' : 'text-[#475569]'}`}>
        {description}
      </p>

      {/* Stats */}
      <div className="flex gap-4 md:gap-6">
        {stats.map((stat, statIndex) => (
          <motion.div
            key={statIndex}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 + 0.4 + statIndex * 0.1 }}
            whileHover={{ y: -2 }}
          >
            <p
              className={`text-[20px] md:text-2xl font-bold transition-colors duration-500 ${isDark ? 'text-white' : ''}`}
              style={!isDark ? {
                background: 'linear-gradient(180deg, #1B9DD9 0%, #063482 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              } : {}}
            >
              {stat.value}
            </p>
            <p className={`text-[11px] md:text-xs transition-colors duration-500 ${isDark ? 'text-white/60' : 'text-[#475569]'}`}>
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const CRJREcosystem = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[28px] md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-3 md:mb-4 leading-tight"
          >
            The CRJR Ventures Ecosystem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[15px] md:text-lg lg:text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed px-4 md:px-0"
          >
            A vertically integrated portfolio of companies spanning marketplace operations,
            brand development, and category-specific ventures across multiple industries.
          </motion.p>
        </motion.div>

        {/* Ecosystem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {ecosystemPillars.map((pillar, index) => (
            <EcosystemCard
              key={index}
              title={pillar.title}
              description={pillar.description}
              stats={pillar.stats}
              variant={pillar.variant}
              icon={pillar.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CRJREcosystem;

