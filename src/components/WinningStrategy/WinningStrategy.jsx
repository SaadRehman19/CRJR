import { motion } from 'framer-motion';
import HighImpactIcon from '../../assets/high_impact.svg';
import IntegratedTechIcon from '../../assets/integrated_technology.svg';
import RevenueIcon from '../../assets/revenue.svg';
import NetworkGrowthIcon from '../../assets/network_growth.svg';
import NavigationalIcon from '../../assets/navigational_experience.svg';
import GoalOrientedIcon from '../../assets/goal_oriented.svg';

const winningSteps = [
  {
    id: 1,
    letter: 'W',
    title: 'W – Watchful Market Analysis',
    description:
      'Anticipates demand, competition, and category shifts to stay ahead.',
    variant: 'dark',
    offsetClass: 'md:ml-0',
    icon: RevenueIcon,
  },
  {
    id: 2,
    letter: 'I',
    title: 'I – Innovative Optimization',
    description:
      'Improves listings, creative, and conversion paths to maximize performance.',
    variant: 'light',
    offsetClass: 'md:ml-12',
    icon: IntegratedTechIcon,
  },
  {
    id: 3,
    letter: 'N',
    title: 'N – Nuanced Advertising',
    description:
      'Builds profitable PPC structures that scale efficiently.',
    variant: 'dark',
    offsetClass: 'md:ml-24',
    icon: HighImpactIcon,
  },
  {
    id: 4,
    letter: 'N',
    title: 'N – Network Growth',
    description:
      'Expands distribution, partnerships, and audience to widen demand.',
    variant: 'light',
    offsetClass: 'md:ml-36',
    icon: NetworkGrowthIcon,
  },
  {
    id: 5,
    letter: 'I',
    title: 'I – Integrated Technology',
    description:
      'Uses tools and automation to drive better decisions and execution.',
    variant: 'dark',
    offsetClass: 'md:ml-48',
    icon: IntegratedTechIcon,
  },
  {
    id: 6,
    letter: 'N',
    title: 'N – Navigational Excellence',
    description:
      'Guides brands through Amazon complexity with clarity and control.',
    variant: 'light',
    offsetClass: 'md:ml-60',
    icon: NavigationalIcon,
  },
  {
    id: 7,
    letter: 'G',
    title: 'G – Goal-Oriented Strategies',
    description:
      'Aligns every initiative to the brand\'s targets and timeline.',
    variant: 'dark',
    offsetClass: 'md:ml-72',
    icon: GoalOrientedIcon,
  },
];

const WinningStepCard = ({ step, index }) => {
  const isDark = step.variant === 'dark';

  return (
    <motion.div
      className={`w-full ${step.offsetClass}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -4, scale: 1.01 }}
    >
      <div
        className={`flex items-center gap-4 rounded-[12px] md:rounded-[16px] px-5 md:px-6 py-4 md:py-5 shadow-[0px_18px_40px_rgba(15,23,42,0.12)] ${
          isDark
            ? 'bg-[#102A43] text-white'
            : 'bg-white text-[#0F172A] border border-[#E2E8F0]'
        }`}
      >
        <div className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 flex items-center justify-center">
          <img
            src={step.icon}
            alt={step.title}
            className="w-full h-full object-contain"
            style={{ filter: isDark ? 'brightness(0) invert(1)' : 'none' }}
          />
        </div>
        <div className="flex-1">
          <p
            className={`text-sm md:text-base font-semibold leading-snug mb-1 ${
              isDark ? 'text-white' : 'text-[#0F172A]'
            }`}
          >
            {step.title}
          </p>
          <p
            className={`text-xs md:text-sm leading-relaxed ${
              isDark ? 'text-slate-200' : 'text-[#64748B]'
            }`}
          >
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const WinningStrategy = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#F0F9FF] via-[#EFF6FF] to-[#F8FAFC] py-16 md:py-24 px-6 lg:px-20 overflow-hidden">
      {/* Left side gradient glow for first 3 tiles */}
      <div className="pointer-events-none absolute top-[120px] md:top-[180px] left-[-100px] w-[400px] h-[500px] rounded-full bg-gradient-to-br from-[#1E3A8A]/40 via-[#1E40AF]/20 to-transparent blur-3xl opacity-70" />

      {/* Right side gradient glow for last 3 tiles */}
      <div className="pointer-events-none absolute bottom-[100px] md:bottom-[150px] right-[-100px] w-[400px] h-[500px] rounded-full bg-gradient-to-tl from-[#1E3A8A]/40 via-[#1E40AF]/20 to-transparent blur-3xl opacity-70" />

      <div className="relative max-w-[1216px] mx-auto">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#0F172A] leading-[1.2] mb-4">
            The WINNING Strategy
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-[#475569] leading-[1.7]">
            The WINNING Strategy is the operating system behind how brands are built and scaled on
            Amazon — designed to create durable growth, not short-term spikes.
          </p>
        </motion.div>

        {/* Ladder of WINNING steps */}
        <div className="mt-10 md:mt-12 space-y-3 md:space-y-4 max-w-3xl mx-auto">
          {winningSteps.map((step, index) => (
            <WinningStepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinningStrategy;
