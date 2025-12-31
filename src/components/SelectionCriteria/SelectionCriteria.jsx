import compellingProductIcon from '../../assets/compelling_product.svg';
import operationalIcon from '../../assets/operational.svg';
import financialCommitmentIcon from '../../assets/financial_commitment.svg';
import foundersWithVisionIcon from '../../assets/founders_with_vision.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const criteriaData = [
  {
    id: 1,
    title: 'Compelling Product Advantage',
    description:
      'The product must solve a real problem, show meaningful differentiation, or hold category leadership potential.',
    icon: compellingProductIcon,
  },
  {
    id: 2,
    title: 'Operational Readiness',
    description:
      'Partners must have reliable inventory, manufacturing consistency, and an ability to scale when revenue increases.',
    icon: operationalIcon,
  },
  {
    id: 3,
    title: 'Financial Commitment',
    description:
      'We work with brands prepared to invest in growth—ad budgets, creative, compliance, logistics, and marketplace tools.',
    icon: financialCommitmentIcon,
  },
  {
    id: 4,
    title: 'Founders With Vision',
    description:
      'We require a founder/leadership team actively committed to building a long-term brand, not quick wins.',
    icon: foundersWithVisionIcon,
  },
];

const CriteriaCard = ({ title, description, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex gap-3 md:gap-4 items-start"
  >
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
      className="w-5 h-5 md:w-6 md:h-6 shrink-0 mt-1"
    >
      <img src={icon} alt="" className="w-full h-full" />
    </motion.div>
    <div>
      <h4 className="text-[15px] md:text-[16px] font-bold text-white leading-[1.4] mb-2">{title}</h4>
      <p className="text-[13px] md:text-[14px] text-[#94a3b8] leading-[1.5]">{description}</p>
    </div>
  </motion.div>
);

const FunnelCard = ({ icon, label, percentage, bgColor }) => (
  <div className="flex items-center gap-4 bg-[#1e3a5f] rounded-[12px] p-4 relative overflow-hidden">
    <div className="w-10 h-10 bg-white rounded-[8px] flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div className="flex-1">
      <p className="text-[14px] font-semibold text-white leading-[20px]">{label}</p>
    </div>
    {percentage && (
      <div className={`${bgColor} rounded-[8px] px-3 py-1`}>
        <p className="text-[14px] font-bold text-white">{percentage}</p>
      </div>
    )}
  </div>
);

const SelectionCriteria = () => {
  return (
    <section className="w-full bg-[#0f172a] py-12 md:py-16 lg:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start mb-12 md:mb-16">
          {/* Left Side - Header and Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full lg:w-[576px]"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-4 md:mb-6"
            >
              <div className="w-2 h-2 bg-[#669fff] rounded-full"></div>
              <span className="text-[13px] md:text-[14px] font-medium text-[#669fff] tracking-[0.7px]">
                Selection Criteria
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[26px] md:text-[32px] lg:text-[36px] font-bold text-white leading-[1.2] mb-4 md:mb-6"
            >
              We partner only with brands that meet our standards.
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[14px] md:text-[15px] lg:text-[16px] text-[#94a3b8] leading-[1.6] mb-6 md:mb-8"
            >
              CRJR Ventures partners with brands that demonstrate strong fundamental and strong
              alignment with our model.
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/work-with-me#contact-form" className="w-full sm:w-auto inline-block">
                <button className="w-full sm:w-auto bg-white rounded-[30px] px-6 md:px-8 py-3 flex items-center justify-center gap-2 hover:bg-gray-50 hover:scale-105 transition-all duration-300">
                  <span className="text-[14px] md:text-[16px] font-bold text-[#0f172a]">Apply for Brand Evaluation</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Funnel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full lg:w-[576px]"
          >
            {/* Funnel Visualization */}
            <div className="relative">
              {/* Funnel Step 1 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative mb-3"
              >
                <div className="flex items-center gap-3 md:gap-4 bg-[#1e3a5f] rounded-[12px] p-3 md:p-4 shadow-lg relative z-10">
                  <div className="w-10 h-10 bg-white rounded-[8px] flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="#1B9DD9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 6V10L13 11" stroke="#1B9DD9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-[13px] md:text-[14px] font-semibold text-white leading-[1.4]">7-Point Vetting Process</p>
                  </div>
                </div>
                {/* Progress bar and badge integrated */}
                <div className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-20">
                  <div className="bg-[#4a9fd8] rounded-[10px] md:rounded-[12px] px-3 md:px-4 py-2 md:py-3 shadow-xl">
                    <div className="text-center">
                      <p className="text-[9px] md:text-[10px] text-white/80 font-normal">Leads In</p>
                      <p className="text-[16px] md:text-[20px] font-bold text-white">100%</p>
                    </div>
                  </div>
                </div>
                {/* Connecting bar */}
                <div className="absolute left-0 -bottom-3 w-full h-6 flex items-center">
                  <div className="w-[85%] h-3 bg-gradient-to-r from-[#1B9DD9] to-[#063482] rounded-full"></div>
                </div>
              </motion.div>

              {/* Funnel Step 2 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative mb-3 ml-8 md:ml-12"
              >
                <div className="flex items-center gap-3 md:gap-4 bg-[#1e3a5f] rounded-[12px] p-3 md:p-4 shadow-lg relative z-10">
                  <div className="w-10 h-10 bg-white rounded-[8px] flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 10L8.5 12.5L14 7" stroke="#1B9DD9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="10" cy="10" r="8" stroke="#1B9DD9" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-[13px] md:text-[14px] font-semibold text-white leading-[1.4]">Only 5% Accepted</p>
                  </div>
                </div>
                {/* Progress bar and badge integrated */}
                <div className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-20">
                  <div className="bg-[#4a9fd8] rounded-[10px] md:rounded-[12px] px-3 md:px-4 py-2 md:py-3 shadow-xl">
                    <div className="text-center">
                      <p className="text-[9px] md:text-[10px] text-white/80 font-normal">Qualified</p>
                      <p className="text-[16px] md:text-[20px] font-bold text-white">~25%</p>
                    </div>
                  </div>
                </div>
                {/* Connecting bar */}
                <div className="absolute left-0 -bottom-3 w-full h-6 flex items-center">
                  <div className="w-[70%] h-3 bg-gradient-to-r from-[#1B9DD9] to-[#063482] rounded-full"></div>
                </div>
              </motion.div>

              {/* Funnel Step 3 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="relative ml-16 md:ml-24"
              >
                <div className="flex items-center gap-3 md:gap-4 bg-[#1e3a5f] rounded-[12px] p-3 md:p-4 shadow-lg relative z-10">
                  <div className="w-10 h-10 bg-white rounded-[8px] flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 17L7 9L11 13L17 3" stroke="#1B9DD9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-[13px] md:text-[14px] font-semibold text-white leading-[1.4]">ROI 400%+ Tracked</p>
                  </div>
                </div>
                {/* Progress bar and badge integrated */}
                <div className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-20">
                  <div className="bg-[#4a9fd8] rounded-[10px] md:rounded-[12px] px-3 md:px-4 py-2 md:py-3 shadow-xl">
                    <div className="text-center">
                      <p className="text-[9px] md:text-[10px] text-white/80 font-normal">Accepted</p>
                      <p className="text-[16px] md:text-[20px] font-bold text-white">~5%</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* All Criteria Cards - Bottom Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {criteriaData.map((item, index) => (
            <CriteriaCard key={item.id} title={item.title} description={item.description} icon={item.icon} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectionCriteria;

