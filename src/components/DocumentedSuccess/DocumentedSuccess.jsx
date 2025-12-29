import dollarIcon from '../../assets/dollar.svg';
import revenueIcon from '../../assets/revenue.svg';
import activeCompaniesIcon from '../../assets/active_companies.svg';
import brandsHelpedIcon from '../../assets/brands_helped.svg';
import amazonGrowthIcon from '../../assets/amazon-growth-icon.svg';
import brandRevivalIcon from '../../assets/brand.svg';
import productDevelopmentIcon from '../../assets/product-development-icon.svg';
import fastIcon from '../../assets/fast.svg';
import strategicIcon from '../../assets/strategic.svg';
import profitableIcon from '../../assets/profitable.svg';
import strategicGrowthPathwayImage from '../../assets/strategic_growth_pathway.png';
import { motion } from 'framer-motion';

const results = [
  {
    id: 1,
    value: '$1.5M',
    label: 'MCM Nutrition Year 1',
    icon: dollarIcon,
  },
  {
    id: 2,
    value: '$40M+',
    label: 'TMA Client Revenue',
    icon: revenueIcon,
  },
  {
    id: 3,
    value: '6+',
    label: 'Active Companies',
    icon: activeCompaniesIcon,
  },
  {
    id: 4,
    value: '100+',
    label: 'Brands Helped',
    icon: brandsHelpedIcon,
  },
];

const opportunities = [
  {
    id: 1,
    title: 'Product Launch Strategy',
    description:
      'Systematic approach to bringing new products to market with maximum impact and minimal risk.',
    icon: activeCompaniesIcon,
  },
  {
    id: 2,
    title: 'Brand Revival',
    description:
      'Proven methods to revitalize underperforming brands and restore profitability.',
    icon: brandRevivalIcon,
  },
  {
    id: 3,
    title: 'Growth Acceleration',
    description:
      'Strategic frameworks to scale successful brands faster and more efficiently.',
    icon: revenueIcon,
  },
];

const ResultCard = ({ icon, value, label }) => (
  <div
    className="bg-white rounded-xl md:rounded-2xl px-4 py-5 md:px-6 md:py-7 shadow-[0_18px_45px_rgba(15,23,42,0.12)] border border-[#E5E7EB] flex flex-col items-center text-center"
  >
    <div className="mb-3 md:mb-5 flex items-center justify-center">
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#EFF6FF] flex items-center justify-center">
        <img src={icon} alt="" className="w-6 h-6 md:w-8 md:h-8" />
      </div>
    </div>
    <p className="text-[22px] md:text-2xl lg:text-3xl font-bold text-[#0F172A] mb-1">{value}</p>
    <p className="text-[12px] md:text-sm text-[#64748B]">{label}</p>
  </div>
);

const OpportunityItem = ({ title, description, icon }) => (
  <div className="flex items-start gap-3 md:gap-4 rounded-xl md:rounded-2xl bg-white/75 backdrop-blur-sm px-4 py-4 md:px-6 md:py-6 shadow-[0_14px_35px_rgba(15,23,42,0.08)] border border-white/80">
    <div className="flex-shrink-0">
      <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl md:rounded-2xl bg-[#EFF6FF] flex items-center justify-center">
        <img src={icon} alt="" className="w-5 h-5 md:w-6 md:h-6" />
      </div>
    </div>
    <div>
      <p className="text-[13px] md:text-sm lg:text-base font-semibold text-[#0F172A]">{title}</p>
      <p className="mt-0.5 md:mt-1 text-[12px] md:text-sm text-[#64748B] leading-relaxed">{description}</p>
    </div>
  </div>
);

const Tag = ({ children, icon }) => (
  <div className="flex flex-col items-center justify-center rounded-lg md:rounded-xl bg-[#F1F5F9] px-3 py-2 md:px-4 md:py-3 text-[11px] md:text-xs font-medium text-[#0F172A] gap-1.5 md:gap-2">
    {icon && <img src={icon} alt="" className="w-5 h-5 md:w-6 md:h-6" />}
    {children}
  </div>
);

const DocumentedSuccess = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#F1F5F9] via-white to-[#E0F2FE] py-12 md:py-16 lg:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1216px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-[24px] md:text-[32px] lg:text-[36px] font-bold text-[#0F172A] leading-[1.2] mb-2 md:mb-3">
            Success That&apos;s Documented &amp; Repeatable
          </h2>
          <p className="text-[14px] md:text-base lg:text-lg text-[#64748B] leading-[1.6] md:leading-[1.7] max-w-2xl mx-auto px-4 md:px-0">
            These outcomes weren&apos;t lucky — they were engineered through systematic execution and
            proven strategies.
          </p>
        </motion.div>

        {/* Results Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-16">
          {results.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ResultCard icon={item.icon} value={item.value} label={item.label} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Content */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Left - Copy & Opportunities */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex-1 max-w-xl self-start"
          >
            <h3 className="text-[20px] md:text-[24px] lg:text-[30px] font-bold text-[#0F172A] leading-[1.25] mb-2 md:mb-3">
              Turning Opportunities Into Revenue
            </h3>
            <p className="text-[13px] md:text-sm lg:text-lg text-[#64748B] leading-[1.6] md:leading-relaxed mb-6 md:mb-8 lg:mb-12 max-w-md">
              My approach transforms business challenges into measurable growth through proven
              methodologies and strategic execution.
            </p>

            <div className="space-y-3 md:space-y-5">
              {opportunities.map((item) => (
                <OpportunityItem
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
            </div>
          </motion.div>

          {/* Right - Strategic Growth Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end w-full"
          >
            <div className="relative w-full max-w-[460px]">
              <div className="absolute -top-10 -left-10 w-44 h-44 bg-[#22D3EE]/25 rounded-full blur-3xl" />

              <div
                className="relative bg-white/95 rounded-[20px] md:rounded-[26px] overflow-hidden border border-white/80"
                style={{ boxShadow: '0px 32px 80px rgba(15, 23, 42, 0.18)' }}
              >
                <div className="bg-[#0F172A]/5 pt-4 px-4 md:pt-6 md:px-6">
                  <div className="rounded-[18px] md:rounded-[22px] overflow-hidden shadow-[0_18px_45px_rgba(15,23,42,0.20)]">
                    <img
                      src={strategicGrowthPathwayImage}
                      alt="Strategic growth pathways dashboard"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                <div className="px-4 pb-5 pt-4 md:px-6 md:pb-6 md:pt-5 lg:px-7 lg:pb-7 lg:pt-6">
                  <h4 className="text-[16px] md:text-lg lg:text-xl font-semibold text-[#0F172A] mb-1.5 md:mb-2">
                    Strategic Growth Pathways
                  </h4>
                  <p className="text-[13px] md:text-sm lg:text-base text-[#64748B] leading-[1.6] md:leading-relaxed">
                    Whether launching new products, reviving an underperforming brand, or accelerating a
                    successful one — I create pathways that are fast, strategic, and profitable.
                  </p>

                  <div className="mt-4 md:mt-6 grid grid-cols-3 gap-2 md:gap-3">
                    <Tag icon={fastIcon}>Fast</Tag>
                    <Tag icon={strategicIcon}>Strategic</Tag>
                    <Tag icon={profitableIcon}>Profitable</Tag>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DocumentedSuccess;

