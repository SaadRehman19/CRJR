import React from 'react';
import highImpactIcon from '../../assets/high_impact.svg';
import brandsHelpedIcon from '../../assets/brands_helped.svg';
import revenueIcon from '../../assets/revenue.svg';
import { motion } from 'framer-motion';

const strategies = [
  {
    id: 1,
    title: 'High-Impact & Direct',
    description:
      'Our mission is to build winning consumer brands by applying real experience, real strategy, and real results across e-commerce and retail.',
    icon: highImpactIcon,
  },
  {
    id: 2,
    title: 'Founder-Focused',
    description:
      "CRJR Ventures showcases the companies I've built and the systems that scaled them—providing founders and brands a pathway to grow using models that have already succeeded.",
    icon: brandsHelpedIcon,
  },
  {
    id: 3,
    title: 'Purpose Driven',
    description:
      'We empower entrepreneurs and brands with the strategy, structure, and execution needed to grow fast, scale smart, and win in competitive markets.',
    icon: revenueIcon,
  },
];

const StrategyCard = ({ title, description, icon, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        background: isHovered
          ? 'linear-gradient(135deg, #1B9DD9 0%, #063482 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #ffffff 100%)',
        borderColor: isHovered ? '#1B9DD9' : 'transparent',
      }}
      transition={{ duration: 0.3 }}
      className="text-center rounded-2xl px-6 py-8 border-2 cursor-pointer"
    >
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          animate={{
            backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.2)' : '#EEF2FF',
          }}
          className="w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{ boxShadow: '0px 10px 20px rgba(15, 23, 42, 0.08)' }}
        >
          <motion.img
            animate={{
              filter: isHovered ? 'brightness(0) invert(1)' : 'brightness(1) invert(0)',
            }}
            transition={{ duration: 0.3 }}
            src={icon}
            alt=""
            className="w-8 h-8"
          />
        </motion.div>
      </div>

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
        animate={{ color: isHovered ? '#ffffff' : '#0F172A' }}
        className="text-lg md:text-xl font-semibold mb-3"
      >
        {title}
      </motion.h3>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
        animate={{ color: isHovered ? 'rgba(255, 255, 255, 0.9)' : '#475569' }}
        className="text-sm md:text-base leading-[1.7] max-w-xs mx-auto"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const StrategiesProven = () => {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 md:py-24 px-6 lg:px-20">
      <div className="max-w-[1216px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#0F172A] leading-[1.2] mb-4">
            My Strategies Are Proven
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-[#475569] leading-[1.7] max-w-3xl mx-auto">
            From The Machine Agency to MCM Nutrition, AUNER Pet Inc., and CRJR Partners
            — each business is a live, operating example of my systems executed at a high level.
          </p>
        </motion.div>

        {/* Strategies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StrategyCard
                title={strategy.title}
                description={strategy.description}
                icon={strategy.icon}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategiesProven;

