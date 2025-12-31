import crjrPartnersLogo from '../../assets/crjr-partners-logo.png';
import cashBrandedIcon from '../../assets/cash_branded.svg';
import sleevesIcon from '../../assets/sleeves.svg';
import seasonalIcon from '../../assets/seasonal.svg';

// Product categories as tags
const productCategories = ['Protective Wear', 'Accessories', 'Seasonal Items'];

// Product portfolio items
const products = [
  {
    title: 'Cash-Branded Protective Wear',
    description: 'Premium protection with style',
    badge: 'Core Line',
    badgeColor: '#102A43',
    icon: cashBrandedIcon,
  },
  {
    title: 'Sleeves, Gloves & Accessories',
    description: 'Functional and fashionable',
    badge: 'Bestsellers',
    badgeColor: '#102A43',
    icon: sleevesIcon,
  },
  {
    title: 'Seasonal & Trend-Tested Items',
    description: 'Market-responsive product lines',
    badge: 'Testing Lab',
    badgeColor: '#102A43',
    icon: seasonalIcon,
  },
];

const CRJRPartnersCard = () => {
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
            <img src={crjrPartnersLogo} alt="CRJR Partners Logo" className="w-8 md:w-10 h-auto object-contain" />
          </div>

          {/* Company Name */}
          <h3 className="text-[24px] md:text-[28px] font-bold text-white mb-2 leading-tight md:leading-normal">CRJR Partners</h3>

          {/* Tagline */}
          <p className="text-[13px] md:text-sm text-white/70 mb-4 leading-[20px]">Cash-Branded Amazon Storefront</p>

          {/* Description */}
          <p className="text-[13px] md:text-sm text-white/80 leading-relaxed mb-6">
            An Amazon storefront featuring cash-branded protective wear and accessories.
            Serves as an incubator for new product development and marketplace testing.
          </p>

          {/* Product Categories Section */}
          <div className="pt-4 border-t border-white/10 mt-auto">
            <p className="text-[13px] md:text-sm text-white/80 mb-3">Product Categories</p>
            <div className="flex flex-wrap gap-2">
              {productCategories.map((category, index) => (
                <span
                  key={index}
                  className="px-2.5 md:px-3 py-1.5 rounded-full text-[12px] md:text-sm text-white"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Product Portfolio (White Background) */}
        <div className="p-6 md:p-8 lg:w-[55%] flex flex-col">
          {/* Product Portfolio */}
          <h4 className="text-[20px] md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6 leading-tight md:leading-normal">Product Portfolio</h4>

          {/* Product Items */}
          <div className="space-y-3 md:space-y-4 mb-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="p-3 md:p-4 rounded-lg md:rounded-xl flex items-start gap-3 md:gap-4"
                style={{ backgroundColor: 'rgba(48, 161, 214, 0.1)' }}
              >
                <img src={product.icon} alt="" className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
                <div className="flex-1">
                  <p className="text-[13px] md:text-sm font-semibold text-[#0F172A] leading-[20px]">{product.title}</p>
                  <p className="text-[13px] md:text-sm text-[#4B5563] leading-[20px]">{product.description}</p>
                </div>
                <span
                  className="text-[11px] md:text-xs font-semibold px-2 py-1 rounded"
                  style={{ color: product.badgeColor }}
                >
                  {product.badge}
                </span>
              </div>
            ))}
          </div>

          {/* Strategic Purpose Section */}
          <div
            className="p-3 md:p-4 rounded-lg md:rounded-xl mt-auto"
            style={{
              background: 'linear-gradient(90deg, rgba(250, 245, 255, 1) 0%, rgba(219, 234, 254, 1) 100%)',
            }}
          >
            <h5 className="text-[13px] md:text-sm font-semibold text-[#0F172A] mb-2">Strategic Purpose</h5>
            <p className="text-[13px] md:text-sm text-[#475569] leading-relaxed">
              CRJR Partners serves as more than just a revenue-generating storefront.
              It's a testing ground for new product concepts, marketplace strategies,
              and operational systems before scaling them across the broader portfolio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRJRPartnersCard;

