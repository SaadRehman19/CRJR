import mcmLogo from '../../assets/mcm-logo.png';

// WINNING Strategy Framework items
const winningFramework = [
  { letter: 'W', title: 'Winning Product', description: 'Market validation before investment' },
  { letter: 'I', title: 'Innovation', description: 'Unique value proposition development' },
  { letter: 'N', title: 'Niche Dominance', description: 'Category leadership positioning' },
  { letter: 'N', title: 'Network Effects', description: 'Scalable growth mechanics' },
  { letter: 'I', title: 'Integration', description: 'Seamless operational systems' },
  { letter: 'N', title: 'Numbers-Driven', description: 'Data-informed decision making' },
  { letter: 'G', title: 'Growth Systems', description: 'Repeatable scaling frameworks' },
];

const MCMNutritionCard = () => {
  return (
    <div
      className="bg-white rounded-[16px] md:rounded-[24px] lg:rounded-[30px] border border-[#F3F4F6] overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer"
      style={{
        boxShadow: '0px 20px 25px 0px rgba(0, 0, 0, 0.1), 0px 8px 10px 0px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Left Column - Header (Dark Background) */}
        <div className="bg-[#102A43] p-6 md:p-8 lg:w-[45%] flex flex-col rounded-t-[16px] md:rounded-t-[24px] lg:rounded-l-[30px] lg:rounded-tr-none">
          {/* Logo Box */}
          <div
            className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex items-center justify-center overflow-hidden mb-4 md:mb-0"
          >
            <img src={mcmLogo} alt="MCM Nutrition Logo" className="w-12 md:w-16 h-auto object-contain" />
          </div>

          {/* Company Name */}
          <h3 className="text-[24px] md:text-[28px] font-bold text-white mb-2 leading-tight md:leading-normal">MCM Nutrition</h3>

          {/* Tagline */}
          <p className="text-[13px] md:text-sm text-white/70 mb-4 leading-[20px]">
            Health & Wellness | Supplements &<br />Performance
          </p>

          {/* Description */}
          <p className="text-[13px] md:text-sm text-white/80 leading-relaxed mb-6">
            A consumer wellness brand built from the ground up using the WINNING Strategy
            framework. Hit $1.5MM in first-year revenue, proving the scalability of my
            brand-building systems.
          </p>

          {/* Stats Section */}
          <div className="flex items-center pt-4 border-t border-white/10 mt-auto">
            <div className="flex-1">
              <p className="text-[20px] md:text-2xl font-bold text-white leading-tight md:leading-normal">$1.5MM</p>
              <p className="text-[12px] md:text-sm text-white/80">Year 1 Revenue</p>
            </div>
            <div className="w-px h-10 md:h-12 bg-white/20 mx-3 md:mx-4"></div>
            <div className="flex-1">
              <p className="text-[20px] md:text-2xl font-bold text-white leading-tight md:leading-normal">100%</p>
              <p className="text-[12px] md:text-sm text-white/80">YoY Growth</p>
            </div>
          </div>
        </div>

        {/* Right Column - WINNING Strategy Framework (White Background) */}
        <div className="p-6 md:p-8 lg:w-[55%] flex flex-col">
          {/* Framework Title */}
          <h4 className="text-[20px] md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6 leading-tight md:leading-normal">The WINNING Strategy Framework</h4>

          {/* Framework Items - Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {winningFramework.map((item, index) => (
              <div
                key={index}
                className="p-2.5 md:p-3 rounded-lg md:rounded-xl"
                style={{ backgroundColor: '#FAF5FF' }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="w-6 h-6 md:w-7 md:h-7 rounded-md md:rounded-lg flex items-center justify-center text-[12px] md:text-sm font-bold text-black"
                    style={{ backgroundColor: '#D4E2E9' }}
                  >
                    {item.letter}
                  </span>
                  <span className="text-[13px] md:text-sm font-semibold text-[#0F172A]">{item.title}</span>
                </div>
                <p className="text-[11px] md:text-xs text-[#4B5563] ml-8 md:ml-9">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Brand Evolution Section */}
          <div
            className="p-3 md:p-4 rounded-lg md:rounded-xl mt-auto"
            style={{
              background: 'linear-gradient(90deg, rgba(250, 245, 255, 1) 0%, rgba(219, 234, 254, 1) 100%)',
            }}
          >
            <h5 className="text-[13px] md:text-sm font-semibold text-[#0F172A] mb-2">Brand Evolution</h5>
            <p className="text-[13px] md:text-sm text-[#475569] leading-relaxed">
              MCM Nutrition continues to evolve within the health and wellness space, expanding
              product lines and deepening category expertise while maintaining the operational
              excellence that drove initial success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MCMNutritionCard;

