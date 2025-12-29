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
    className="bg-white rounded-2xl px-6 py-7 shadow-[0_18px_45px_rgba(15,23,42,0.12)] border border-[#E5E7EB] flex flex-col items-center text-center"
  >
    <div className="mb-5 flex items-center justify-center">
      <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] flex items-center justify-center">
        <img src={icon} alt="" className="w-8 h-8" />
      </div>
    </div>
    <p className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-1">{value}</p>
    <p className="text-sm text-[#64748B]">{label}</p>
  </div>
);

const OpportunityItem = ({ title, description, icon }) => (
  <div className="flex items-center gap-4 rounded-2xl bg-white/75 backdrop-blur-sm px-6 py-6 shadow-[0_14px_35px_rgba(15,23,42,0.08)] border border-white/80">
    <div className="flex-shrink-0">
      <div className="w-11 h-11 rounded-2xl bg-[#EFF6FF] flex items-center justify-center">
        <img src={icon} alt="" className="w-6 h-6" />
      </div>
    </div>
    <div>
      <p className="text-sm md:text-base font-semibold text-[#0F172A]">{title}</p>
      <p className="mt-1 text-sm text-[#64748B] leading-relaxed">{description}</p>
    </div>
  </div>
);

const Tag = ({ children, icon }) => (
  <div className="flex flex-col items-center justify-center rounded-xl bg-[#F1F5F9] px-4 py-3 text-xs font-medium text-[#0F172A] gap-2">
    {icon && <img src={icon} alt="" className="w-6 h-6" />}
    {children}
  </div>
);

const DocumentedSuccess = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#F1F5F9] via-white to-[#E0F2FE] py-16 md:py-24 px-6 lg:px-20">
      <div className="max-w-[1216px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#0F172A] leading-[1.2] mb-3">
            Success That&apos;s Documented &amp; Repeatable
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-[#64748B] leading-[1.7] max-w-2xl mx-auto">
            These outcomes weren&apos;t lucky — they were engineered through systematic execution and
            proven strategies.
          </p>
        </motion.div>

        {/* Results Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
        <div className="flex flex-col lg:flex-row items-start gap-1 lg:gap-16">
          {/* Left - Copy & Opportunities */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex-1 max-w-xl self-start"
          >
            <h3 className="text-[24px] md:text-[28px] lg:text-[30px] font-bold text-[#0F172A] leading-[1.25] mb-3">
              Turning Opportunities Into Revenue
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-[#64748B] leading-relaxed mb-12 max-w-md">
              My approach transforms business challenges into measurable growth through proven
              methodologies and strategic execution.
            </p>

            <div className="space-y-5">
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[460px]">
              <div className="absolute -top-10 -left-10 w-44 h-44 bg-[#22D3EE]/25 rounded-full blur-3xl" />

              <div
                className="relative bg-white/95 rounded-[26px] overflow-hidden border border-white/80"
                style={{ boxShadow: '0px 32px 80px rgba(15, 23, 42, 0.18)' }}
              >
                <div className="bg-[#0F172A]/5 pt-6 px-6">
                  <div className="rounded-[22px] overflow-hidden shadow-[0_18px_45px_rgba(15,23,42,0.20)]">
                    <img
                      src={strategicGrowthPathwayImage}
                      alt="Strategic growth pathways dashboard"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                <div className="px-6 pb-6 pt-5 md:px-7 md:pb-7 md:pt-6">
                  <h4 className="text-lg md:text-xl font-semibold text-[#0F172A] mb-2">
                    Strategic Growth Pathways
                  </h4>
                  <p className="text-sm md:text-base text-[#64748B] leading-relaxed">
                    Whether launching new products, reviving an underperforming brand, or accelerating a
                    successful one — I create pathways that are fast, strategic, and profitable.
                  </p>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
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

