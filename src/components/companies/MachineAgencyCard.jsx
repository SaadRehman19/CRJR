import { motion } from 'framer-motion';
import tmaLogo from "../../assets/tma-logo.png";
import iconListingOptimization from "../../assets/listing_optimization.svg";
import iconAPlusContent from "../../assets/A+_Content.svg";
import iconAdvertisingPPC from "../../assets/advertising.svg";
import iconFBALogistics from "../../assets/fba_logistic.svg";
import iconAccountOperations from "../../assets/account_opperation.svg";
import iconBrandProtection from "../../assets/brand_protection.svg";
import iconAmazon from "../../assets/amazon_consulting.svg";
import iconWalmart from "../../assets/retail_distrubtion.svg";
import iconTiktok from "../../assets/tiktok_Shop.svg";
import crjrPartnersLogo from '../../assets/crjr-partners-logo.png';


// Services arranged for 2-column layout (left column first, then right column)
const servicesLeft = [
  {
    title: "Listing Optimization",
    description: "SEO-driven content that converts",
    icon: iconListingOptimization,
  },
  {
    title: "A+ Content & Brand Positioning",
    description: "Premium brand storytelling",
    icon: iconAPlusContent,
  },
  {
    title: "Advertising & PPC",
    description: "Data-driven campaign management",
    icon: iconAdvertisingPPC,
  },
];

const servicesRight = [
  {
    title: "FBA Logistics",
    description: "Seamless fulfillment operations",
    icon: iconFBALogistics,
  },
  {
    title: "Account Operations",
    description: "Daily management & optimization",
    icon: iconAccountOperations,
  },
  {
    title: "Brand Protection",
    description: "IP enforcement & monitoring",
    icon: iconBrandProtection,
  },
];

const marketplaces = [
  { name: "Amazon", icon: iconAmazon },
  { name: "Walmart", icon: iconWalmart },
  { name: "TikTok Shop", icon: iconTiktok },
];

const MachineAgencyCard = () => {
  return (
    <div
      className="bg-white rounded-[16px] md:rounded-[24px] overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer"
      style={{
        boxShadow:
          "0px 20px 25px 0px rgba(0, 0, 0, 0.1), 0px 8px 10px 0px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Left Column - Header & Stats (Dark Background) */}
        <div className="bg-[#102a43] p-6 md:p-8 lg:w-[45%] flex flex-col rounded-t-[16px] md:rounded-t-[24px] lg:rounded-l-[24px] lg:rounded-tr-none">
          {/* Logo Box - aligned with text below */}
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl md:rounded-2xl flex items-center justify-center overflow-hidden mb-5 md:mb-6 bg-black">
            <img
              src={tmaLogo}
              alt="CRJR Partners Logo"
              className="w-auto h-auto"
            />
          </div>

          {/* Company Name */}
          <h3 className="text-[24px] md:text-[32px] font-bold text-white mb-3 leading-tight md:leading-[40px]">
            The Machine Agency
          </h3>

          {/* Tagline */}
          <p className="text-[13px] md:text-[14px] text-white/70 mb-5 md:mb-7 leading-[20px]">
            Amazon Growth Partner | Marketplace Strategy
          </p>

          {/* Description */}
          <p className="text-[13px] md:text-[14px] text-white/80 leading-[22px] mb-6 md:mb-8">
            My flagship company dedicated to scaling brands across Amazon and
            other online marketplaces with proven systems and operational
            excellence.
          </p>

          {/* Stats Section */}
          <div className="flex items-center pt-4 md:pt-6 border-t border-white/10 mt-auto">
            <div className="flex-1">
              <p className="text-[24px] md:text-[28px] font-bold text-white leading-tight md:leading-[36px]">
                $40MM+
              </p>
              <p className="text-[12px] md:text-[14px] text-white/80 leading-[20px]">
                Client Revenue
              </p>
            </div>
            <div className="w-px h-10 md:h-12 bg-white/20 mx-4 md:mx-6"></div>
            <div className="flex-1">
              <p className="text-[24px] md:text-[28px] font-bold text-white leading-tight md:leading-[36px]">
                100+
              </p>
              <p className="text-[12px] md:text-[14px] text-white/80 leading-[20px]">
                Brands Scaled
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Services (White Background) */}
        <div className="p-7 md:p-10 lg:w-[55%] flex flex-col">
          {/* Core Services */}
          <h4 className="text-[20px] md:text-[24px] font-bold text-[#0f172a] mb-5 md:mb-7 leading-tight md:leading-[32px]">
            Core Services
          </h4>

          {/* Single column on mobile, two columns on desktop */}
          <div className="flex flex-col md:flex-row md:gap-10 mb-7 md:mb-8">
            {/* Left Column */}
            <div className="flex-1 space-y-10 md:space-y-9">
              {servicesLeft.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <motion.img
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                    src={service.icon}
                    alt=""
                    className="w-5 h-5 md:w-6 md:h-6 shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-[13px] md:text-[14px] font-semibold text-[#0f172a] leading-[20px] mb-2">
                      {service.title}
                    </p>
                    <p className="text-[13px] md:text-[14px] text-[#4b5563] leading-[24px]">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column */}
            <div className="flex-1 space-y-10 md:space-y-9 mt-10 md:mt-0">
              {servicesRight.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index + 3) * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <motion.img
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (index + 3) * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                    src={service.icon}
                    alt=""
                    className="w-5 h-5 md:w-6 md:h-6 shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-[13px] md:text-[14px] font-semibold text-[#0f172a] leading-[20px] mb-2">
                      {service.title}
                    </p>
                    <p className="text-[13px] md:text-[14px] text-[#4b5563] leading-[24px]">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Marketplace Expansion Badge Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-[#f9fafb] rounded-[10px] md:rounded-[12px] p-4 md:p-5 mt-auto"
          >
            <h5 className="text-[13px] md:text-[14px] font-semibold text-[#0f172a] mb-3 md:mb-4 leading-[20px]">
              Marketplace Expansion
            </h5>
            <div className="flex flex-wrap gap-2.5">
              {marketplaces.map((marketplace, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-2.5 md:px-3 py-1.5 md:py-2 bg-white rounded-[8px] text-[13px] md:text-[14px] text-[#475569]"
                >
                  <img
                    src={marketplace.icon}
                    alt={marketplace.name}
                    className="w-4 h-4 md:w-5 md:h-5"
                  />
                  {marketplace.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MachineAgencyCard;
