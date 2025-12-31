import { motion } from 'framer-motion';
import brandOwnershipIcon from '../../assets/brand-ownership-icon.svg';
import amazonGrowthIcon from '../../assets/amazon-growth-icon.svg';
import productDevelopmentIcon from '../../assets/product-development-icon.svg';
import strategicAdvisoryIcon from '../../assets/strategic-advisory-icon.svg';
import brandOwnershipGraphic from '../../assets/brand_ownership.svg';
import growthAccelerationGraphic from '../../assets/growth_acceleration.svg';
import productDevelopmentGraphic from '../../assets/product_development.svg';
import strategicAdvisoryGraphic from '../../assets/strategic_advisory.svg';

const services = [
  {
    id: 1,
    title: 'Brand Ownership',
    description:
      'I acquire equity stakes in high-potential brands, providing capital and expertise to accelerate growth while sharing in long-term success.',
    icon: brandOwnershipIcon,
    graphic: brandOwnershipGraphic,
  },
  {
    id: 2,
    title: 'Amazon Growth Acceleration',
    description:
      'Proven strategies to scale revenue through optimized listings, advertising, inventory management, and marketplace expansion.',
    icon: amazonGrowthIcon,
    graphic: growthAccelerationGraphic,
  },
  {
    id: 3,
    title: 'Product Development',
    description:
      'End-to-end product creation from concept to launch, including sourcing, design, manufacturing, and quality control.',
    icon: productDevelopmentIcon,
    graphic: productDevelopmentGraphic,
  },
  {
    id: 4,
    title: 'Strategic Advisory',
    description:
      'High-level guidance on business strategy, market positioning, brand architecture, and long-term growth planning.',
    icon: strategicAdvisoryIcon,
    graphic: strategicAdvisoryGraphic,
  },
];

const ServiceIcon = ({ icon }) => {
  return (
    <div className="w-14 h-14 md:w-16 md:h-16 bg-[#102a43] rounded-[14px] md:rounded-[16px] flex items-center justify-center">
      <img src={icon} alt="" className="w-9 h-9 md:w-11 md:h-11" />
    </div>
  );
};

const ServiceCard = ({ title, description, icon, graphic, index }) => {
  return (
    <motion.div
      className="p-6 md:p-8 rounded-[20px] md:rounded-[24px] border border-[#f3f4f6] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_10px_15px_0px_rgba(0,0,0,0.1)] flex flex-col"
      style={{
        background: 'linear-gradient(145.429deg, rgba(255, 255, 255, 1) 0%, rgba(249, 250, 251, 1) 70.711%)',
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: '0px 20px 40px rgba(0,0,0,0.15)' }}
    >
      <ServiceIcon icon={icon} />
      <h3 className="mt-4 md:mt-6 text-[18px] md:text-[20px] font-bold text-[#0a0e27] leading-[1.3]">{title}</h3>
      <p className="mt-2 md:mt-3 text-[13px] md:text-[14px] text-[#4b5563] leading-[1.5]">{description}</p>
      {/* Show graphic on all screen sizes */}
      <div className="flex mt-4 md:mt-6 lg:mt-8 items-center justify-center h-[100px] md:h-[140px] lg:h-[160px]">
        <img src={graphic} alt="" className="w-auto max-w-full h-full object-contain" />
      </div>
    </motion.div>
  );
};

const WhatIDo = () => {
  return (
    <section className="w-full bg-white pt-6 md:pt-8 lg:pt-12 pb-12 md:pb-16 lg:pb-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-3 md:mb-4">
            <div className="w-2 h-2 bg-[#063482] rounded-full"></div>
            <span className="text-[13px] md:text-[14px] font-medium text-[#063482] tracking-[0.7px]">
              My Expertise
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#0f172a] leading-[1.2] mb-4 md:mb-6">
            What I Do
          </h2>

          {/* Subtitle */}
          <p className="text-[15px] md:text-[16px] lg:text-[18px] text-[#475569] leading-[1.6] max-w-[768px] mx-auto px-4">
            Comprehensive brand building and growth services tailored for ambitious Amazon sellers
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              index={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              graphic={service.graphic}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;

