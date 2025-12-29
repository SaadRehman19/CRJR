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

const EcosystemCard = ({ title, description, stats, variant, icon }) => {
  const isDark = variant === 'dark';

  return (
    <div
      className={`rounded-[16px] md:rounded-[24px] p-5 md:p-6 flex flex-col h-full ${
        isDark ? 'bg-[#102A43]' : ''
      }`}
      style={
        isDark
          ? {}
          : {
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(249, 250, 251, 1) 100%)',
              boxShadow: '0px 10px 15px 0px rgba(0, 0, 0, 0.1), 0px 4px 6px 0px rgba(0, 0, 0, 0.1)',
            }
      }
    >
      {/* Icon */}
      <div
        className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 ${
          isDark ? 'bg-white/20' : 'bg-[#e5e7eb]'
        }`}
      >
        <img src={icon} alt="" className="w-5 h-5 md:w-6 md:h-6" />
      </div>

      {/* Title */}
      <h3 className={`text-[18px] md:text-xl font-bold mb-2 md:mb-3 leading-tight ${isDark ? 'text-white' : 'text-[#102A43]'}`}>
        {title}
      </h3>

      {/* Description */}
      <p className={`text-[13px] md:text-sm leading-relaxed mb-4 md:mb-6 flex-grow ${isDark ? 'text-white/70' : 'text-[#475569]'}`}>
        {description}
      </p>

      {/* Stats */}
      <div className="flex gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <div key={index}>
            <p
              className={`text-[20px] md:text-2xl font-bold ${isDark ? 'text-white' : ''}`}
              style={!isDark ? {
                background: 'linear-gradient(180deg, #1B9DD9 0%, #063482 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              } : {}}
            >
              {stat.value}
            </p>
            <p className={`text-[11px] md:text-xs ${isDark ? 'text-white/60' : 'text-[#475569]'}`}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const CRJREcosystem = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[28px] md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-3 md:mb-4 leading-tight">
            The CRJR Ventures Ecosystem
          </h2>
          <p className="text-[15px] md:text-lg lg:text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed px-4 md:px-0">
            A vertically integrated portfolio of companies spanning marketplace operations,
            brand development, and category-specific ventures across multiple industries.
          </p>
        </div>

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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CRJREcosystem;

