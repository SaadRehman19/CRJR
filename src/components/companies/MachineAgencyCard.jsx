import tmaLogo from '../../assets/tma-logo-white.png';
import iconListingOptimization from '../../assets/service-check-icon.svg';
import iconAPlusContent from '../../assets/icon-a-plus-content.svg';
import iconAdvertisingPPC from '../../assets/icon-advertising-ppc.svg';
import iconFBALogistics from '../../assets/icon-fba-logistics.svg';
import iconAccountOperations from '../../assets/icon-account-operations.svg';
import iconBrandProtection from '../../assets/icon-brand-protection.svg';
import iconAmazon from '../../assets/amazon_consulting.svg';
import iconWalmart from '../../assets/retail_distrubtion.svg';
import iconTiktok from '../../assets/tiktok_Shop.svg';

// Services arranged for 2-column layout (left column first, then right column)
const servicesLeft = [
  { title: 'Listing Optimization', description: 'SEO-driven content that converts', icon: iconListingOptimization },
  { title: 'A+ Content & Brand Positioning', description: 'Premium brand storytelling', icon: iconAPlusContent },
  { title: 'Advertising & PPC', description: 'Data-driven campaign management', icon: iconAdvertisingPPC },
];

const servicesRight = [
  { title: 'FBA Logistics', description: 'Seamless fulfillment operations', icon: iconFBALogistics },
  { title: 'Account Operations', description: 'Daily management & optimization', icon: iconAccountOperations },
  { title: 'Brand Protection', description: 'IP enforcement & monitoring', icon: iconBrandProtection },
];

const marketplaces = [
  { name: 'Amazon', icon: iconAmazon },
  { name: 'Walmart', icon: iconWalmart },
  { name: 'TikTok Shop', icon: iconTiktok },
];

const MachineAgencyCard = () => {
  return (
    <div
      className="bg-white rounded-[24px] overflow-hidden"
      style={{
        boxShadow: '0px 20px 25px 0px rgba(0, 0, 0, 0.1), 0px 8px 10px 0px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Left Column - Header & Stats (Dark Background) */}
        <div className="bg-[#102a43] p-6 lg:w-[45%] flex flex-col rounded-l-[24px]">
          {/* Logo Box - aligned with text below */}
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center overflow-hidden"
>
            <img src={tmaLogo} alt="TMA Logo" className="w-20 h-auto object-contain ml-[-20px]" />
          </div>

          {/* Company Name */}
          <h3 className="text-[32px] font-bold text-white mb-2 leading-[40px]">The Machine Agency</h3>

          {/* Tagline */}
          <p className="text-[14px] text-white/70 mb-6 leading-[20px]">
            Amazon Growth Partner | Marketplace Strategy
          </p>

          {/* Description */}
          <p className="text-[14px] text-white/80 leading-[20px] mb-6">
            My flagship company dedicated to scaling brands across Amazon and other online
            marketplaces with proven systems and operational excellence.
          </p>

          {/* Stats Section */}
          <div className="flex items-center pt-6 border-t border-white/10 mt-auto">
            <div className="flex-1">
              <p className="text-[28px] font-bold text-white leading-[36px]">$40MM+</p>
              <p className="text-[14px] text-white/80 leading-[20px]">Client Revenue</p>
            </div>
            <div className="w-px h-12 bg-white/20 mx-6"></div>
            <div className="flex-1">
              <p className="text-[28px] font-bold text-white leading-[36px]">100+</p>
              <p className="text-[14px] text-white/80 leading-[20px]">Brands Scaled</p>
            </div>
          </div>
        </div>

        {/* Right Column - Services (White Background) */}
        <div className="p-8 lg:w-[55%] flex flex-col">
          {/* Core Services */}
          <h4 className="text-[24px] font-bold text-[#0f172a] mb-6 leading-[32px]">Core Services</h4>

          {/* Two-column grid layout */}
          <div className="flex gap-8 mb-6">
            {/* Left Column */}
            <div className="flex-1 space-y-5">
              {servicesLeft.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <img src={service.icon} alt="" className="w-10 h-10 shrink-0" />
                  <div>
                    <p className="text-[14px] font-semibold text-[#0f172a] leading-[20px]">{service.title}</p>
                    <p className="text-[14px] text-[#4b5563] leading-[20px]">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="flex-1 space-y-5">
              {servicesRight.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <img src={service.icon} alt="" className="w-10 h-10 shrink-0" />
                  <div>
                    <p className="text-[14px] font-semibold text-[#0f172a] leading-[20px]">{service.title}</p>
                    <p className="text-[14px] text-[#4b5563] leading-[20px]">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Marketplace Expansion Badge Section */}
          <div className="bg-[#f9fafb] rounded-[12px] p-4 mt-auto">
            <h5 className="text-[14px] font-semibold text-[#0f172a] mb-3 leading-[20px]">Marketplace Expansion</h5>
            <div className="flex flex-wrap gap-2">
              {marketplaces.map((marketplace, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-[8px] text-[14px] text-[#475569]"
                >
                  <img src={marketplace.icon} alt={marketplace.name} className="w-5 h-5" />
                  {marketplace.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineAgencyCard;

