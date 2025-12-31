import React from 'react';
import brandIcon from '../../assets/brand_advisory.svg';
import amazonConsultingIcon from '../../assets/amazon_consulting.svg';
import activeCompaniesIcon from '../../assets/active_companies.svg';
import productDevelopmentIcon from '../../assets/product_Development.svg';
import retailIcon from '../../assets/retail_distrubtion.svg';
import revenueIcon from '../../assets/revenue.svg';
import greenTick from '../../assets/green_tick.svg';
import blueTick from '../../assets/blue_tick.svg';
import orangeTick from '../../assets/orange_tick.svg';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Brand Advisory',
    description:
      'Strategic guidance for building, positioning, and scaling consumer brands across multiple channels.',
    bullets: [
      'Brand positioning strategy',
      'Market analysis & competitive research',
      'Go-to-market planning',
    ],
    icon: brandIcon,
    tickIcon: greenTick,
  },
  {
    id: 2,
    title: 'Amazon Consulting',
    description:
      'Expert guidance on navigating and dominating the Amazon marketplace with proven strategies.',
    bullets: [
      'Listing optimization',
      'PPC campaign management',
      'Brand registry & protection',
    ],
    icon: amazonConsultingIcon,
    tickIcon: blueTick,
  },
  {
    id: 3,
    title: 'Marketplace Launch',
    description:
      'End-to-end support for launching products on major e-commerce platforms with maximum impact.',
    bullets: [
      'Platform selection strategy',
      'Launch timeline & execution',
      'Post-launch optimization',
    ],
    icon: activeCompaniesIcon,
    tickIcon: orangeTick,
  },
  {
    id: 4,
    title: 'Product Development',
    description:
      'From concept to market-ready products with guidance on design, manufacturing, and quality control.',
    bullets: [
      'Product ideation & validation',
      'Supplier sourcing & negotiation',
      'Quality assurance processes',
    ],
    icon: productDevelopmentIcon,
    tickIcon: greenTick,
  },
  {
    id: 5,
    title: 'Retail Distribution',
    description:
      'Strategic planning for expanding into retail channels and building sustainable distribution networks.',
    bullets: [
      'Retail partnership development',
      'Distribution network setup',
      'Inventory management systems',
    ],
    icon: retailIcon,
    tickIcon: blueTick,
  },
  {
    id: 6,
    title: 'Growth Roadmap',
    description:
      'Comprehensive strategic planning to scale your business efficiently and profitably.',
    bullets: [
      'Revenue forecasting & modeling',
      'Scalable systems development',
      'Team structure & hiring strategy',
    ],
    icon: revenueIcon,
    tickIcon: orangeTick,
  },
];

const ServiceIcon = ({ icon }) => {
  return <img src={icon} alt="" className="w-6 h-6" />;
};

const CheckBullet = ({ tickIcon }) => (
  <span className="flex h-6 w-6 items-center justify-center">
    <img src={tickIcon} alt="" className="h-3.5 w-3.5" />
  </span>
);

const ServiceCard = ({ title, description, bullets, icon, tickIcon, index }) => {
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
        borderColor: isHovered ? '#1B9DD9' : '#E5E7EB',
      }}
      transition={{ duration: 0.3 }}
      className="rounded-[18px] px-6 py-7 border-2 flex flex-col h-full cursor-pointer"
      style={{ boxShadow: '0px 18px 45px rgba(15, 23, 42, 0.08)' }}
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
        whileHover={{ rotate: 5, scale: 1.05 }}
        animate={{
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.2)' : '#EFF6FF',
        }}
        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
      >
        <motion.div
          animate={{
            filter: isHovered ? 'brightness(0) invert(1)' : 'brightness(1) invert(0)',
          }}
          transition={{ duration: 0.3 }}
        >
          <ServiceIcon icon={icon} />
        </motion.div>
      </motion.div>
      <motion.h3
        animate={{ color: isHovered ? '#ffffff' : '#0F172A' }}
        transition={{ duration: 0.3 }}
        className="text-lg md:text-xl font-semibold mb-2"
      >
        {title}
      </motion.h3>
      <motion.p
        animate={{ color: isHovered ? 'rgba(255, 255, 255, 0.9)' : '#475569' }}
        transition={{ duration: 0.3 }}
        className="text-sm leading-relaxed mb-4 flex-grow"
      >
        {description}
      </motion.p>
      <ul className="space-y-2">
        {bullets.map((item, bulletIndex) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 + bulletIndex * 0.1 }}
            className="flex items-start gap-2 text-sm"
          >
            <motion.span
              animate={{
                filter: isHovered ? 'brightness(0) invert(1)' : 'brightness(1) invert(0)',
              }}
              transition={{ duration: 0.3 }}
              className="flex h-6 w-6 items-center justify-center"
            >
              <img src={tickIcon} alt="" className="h-3.5 w-3.5" />
            </motion.span>
            <motion.span
              animate={{ color: isHovered ? 'rgba(255, 255, 255, 0.9)' : '#475569' }}
              transition={{ duration: 0.3 }}
              className="mt-0.5"
            >
              {item}
            </motion.span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const HowWeCanWorkTogether = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#F8FAFC] via-white to-[#E0F2FE] py-16 md:py-24 px-6 lg:px-20">
      <div className="max-w-[1216px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[32px] md:text-[36px] font-bold text-[#0F172A] leading-[1.2] mb-3">
            How We Can Work Together
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-[#475569] leading-[1.7] max-w-2xl mx-auto">
            I take on selective engagements where I can deliver meaningful value. Let&apos;s explore how we
            can create exceptional results together.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0px 20px 40px rgba(15, 23, 42, 0.15)' }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                bullets={service.bullets}
                icon={service.icon}
                tickIcon={service.tickIcon}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeCanWorkTogether;

