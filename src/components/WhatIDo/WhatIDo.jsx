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
    <div className="w-16 h-16 bg-[#102a43] rounded-[16px] flex items-center justify-center">
      <img src={icon} alt="" className="w-50 h-50" />
    </div>
  );
};

const ServiceCard = ({ title, description, icon, graphic }) => {
  return (
    <div
      className="p-8 rounded-[24px] border border-[#f3f4f6] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_10px_15px_0px_rgba(0,0,0,0.1)]"
      style={{
        background: 'linear-gradient(145.429deg, rgba(255, 255, 255, 1) 0%, rgba(249, 250, 251, 1) 70.711%)',
      }}
    >
      <ServiceIcon icon={icon} />
      <h3 className="mt-8 text-[20px] font-bold text-[#0a0e27] leading-[32px]">{title}</h3>
      <p className="mt-3 text-[14px] text-[#4b5563] leading-[20px]">{description}</p>
      <div className="mt-6 flex justify-center">
        <img src={graphic} alt="" className="w-full max-w-[250px]" />
      </div>
    </div>
  );
};

const WhatIDo = () => {
  return (
    <section className="w-full bg-white py-24 px-20">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-2 h-5">
            <div className="w-8 h-px bg-[#063482]"></div>
            <span className="text-[14px] font-normal text-[#063482] tracking-[0.7px] leading-5">
              My Expertise
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[36px] font-bold text-[#0f172a] leading-[45px] mb-6">
            What I Do
          </h2>

          {/* Subtitle */}
          <p className="text-[18px] text-[#475569] leading-[30px] max-w-[768px] mx-auto">
            Comprehensive brand building and growth services tailored for ambitious Amazon sellers
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
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

