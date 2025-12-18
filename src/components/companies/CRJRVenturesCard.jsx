import crjrVenturesLogo from '../../assets/crjr-ventures-logo.png';
import iconCentralHub from '../../assets/icon-central-hub.svg';
import iconDocumentedResults from '../../assets/icon-documented-results.svg';
import iconClarityBuild from '../../assets/icon-clarity-build.svg';
import iconPathwayFounders from '../../assets/icon-pathway-founders.svg';
import Button from '../ui/Button';

// Ecosystem components
const ecosystemComponents = [
  'Strategic Oversight',
  'Results Documentation',
  'Partnership Gateway',
];

// What CRJR Ventures Provides
const venturesProvides = [
  {
    title: 'Central Hub for Business Ecosystem',
    description: 'A unified platform connecting all companies, strategies, and operations under one strategic vision.',
    icon: iconCentralHub,
  },
  {
    title: 'Documented Record of Results',
    description: 'Transparent tracking and reporting of performance metrics, revenue milestones, and growth trajectories across all ventures.',
    icon: iconDocumentedResults,
  },
  {
    title: 'Clarity on What I Build & How',
    description: 'Detailed documentation of methodologies, systems, and frameworks that drive success across multiple industries.',
    icon: iconClarityBuild,
  },
  {
    title: 'Pathway for Founders to Work With Me',
    description: 'Clear engagement models for entrepreneurs and companies seeking to leverage proven systems and strategic expertise.',
    icon: iconPathwayFounders,
  },
];

const CRJRVenturesCard = () => {
  return (
    <div
      className="bg-white rounded-[24px] overflow-hidden"
      style={{
        boxShadow: '0px 20px 25px 0px rgba(0, 0, 0, 0.1), 0px 8px 10px 0px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Left Column - Header (Dark Background) */}
        <div className="bg-[#102a43] p-8 lg:w-[45%] flex flex-col rounded-l-[24px]">
          {/* Logo Box */}
          <div
            className="w-20 h-20 rounded-[16px] flex items-center justify-center overflow-hidden mb-6 bg-white"
          >
            <img src={crjrVenturesLogo} alt="CRJR Ventures Logo" className="w-16 h-auto object-contain" />
          </div>

          {/* Company Name */}
          <h3 className="text-[32px] font-bold text-white mb-2 leading-[40px]">CRJR Ventures</h3>

          {/* Tagline */}
          <p className="text-[14px] text-white/70 mb-6 leading-[20px]">
            Founder Portfolio | Strategy | Brand Ecosystem
          </p>

          {/* Description */}
          <p className="text-[14px] text-white/80 leading-[20px] mb-auto">
            The central hub that ties all companies together, providing strategic direction,
            documented results, and a clear pathway for collaboration.
          </p>

          {/* Ecosystem Components Section */}
          <div className="pt-6 border-t border-white/10 mt-8">
            <p className="text-[14px] text-white/80 mb-3">Ecosystem Components</p>
            <div className="flex flex-col gap-2">
              {ecosystemComponents.map((component, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80]"></div>
                  <span className="text-white text-[14px]">{component}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - What CRJR Ventures Provides (White Background) */}
        <div className="p-8 lg:w-[55%] flex flex-col">
          {/* Section Title */}
          <h4 className="text-[24px] font-bold text-[#0f172a] mb-6 leading-[32px]">What CRJR Ventures Provides</h4>

          {/* Features - Vertical Layout */}
          <div className="space-y-4 mb-6">
            {venturesProvides.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-[12px]"
                style={{ backgroundColor: '#eff6ff' }}
              >
                <div className="flex items-start gap-3">
                  <img src={item.icon} alt="" className="w-10 h-10 shrink-0" />
                  <div>
                    <p className="text-[14px] font-semibold text-[#0f172a] mb-1 leading-[20px]">{item.title}</p>
                    <p className="text-[12px] text-[#4b5563] leading-[18px]">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Ready to Collaborate Section */}
          <div
            className="p-4 rounded-[12px] mt-auto flex items-center justify-between gap-4"
            style={{
              background: 'linear-gradient(90deg, rgba(250, 245, 255, 1) 0%, rgba(219, 234, 254, 1) 100%)',
            }}
          >
            <div className="flex-1">
              <h5 className="text-[14px] font-semibold text-[#0f172a] mb-1 leading-[20px]">Ready to Collaborate?</h5>
              <p className="text-[14px] text-[#475569] leading-[20px]">
                Explore partnership opportunities and strategic consulting engagements.
              </p>
            </div>
             <Button variant="primary">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRJRVenturesCard;

