import compellingProductIcon from '../../assets/compelling_product.svg';
import operationalIcon from '../../assets/operational.svg';
import financialCommitmentIcon from '../../assets/financial_commitment.svg';
import foundersWithVisionIcon from '../../assets/founders_with_vision.svg';
import { Link } from 'react-router-dom';

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

const CriteriaCard = ({ title, description, icon }) => (
  <div className="flex gap-4 items-start">
    <div className="w-6 h-6 shrink-0 mt-1">
      <img src={icon} alt="" className="w-full h-full" />
    </div>
    <div>
      <h4 className="text-[16px] font-bold text-white leading-[24px] mb-2">{title}</h4>
      <p className="text-[14px] text-[#94a3b8] leading-[20px]">{description}</p>
    </div>
  </div>
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
    <section className="w-full bg-[#0f172a] py-24 px-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-16">
          {/* Left Side - Header and Button */}
          <div className="flex-1 w-[576px]">
            {/* Badge */}
            <div className="flex items-center gap-3 mb-6 h-5">
              <div className="w-8 h-px bg-[#669fff]"></div>
              <span className="text-[14px] font-normal text-[#669fff] tracking-[0.7px] leading-5">
                Selection Criteria
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[36px] font-bold text-white leading-[40px] mb-6">
              We partner only with brands that meet our standards.
            </h2>

            {/* Description */}
            <p className="text-[16px] text-[#94a3b8] leading-[24px] mb-8">
              CRJR Ventures partners with brands that demonstrate strong fundamental and strong
              alignment with our model.
            </p>

            {/* Button */}
            <Link to="/work-with-me#contact-form" className="w-full sm:w-auto inline-block">
              <button className="w-full sm:w-auto bg-white rounded-[30px] px-8 py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                <span className="text-[16px] font-bold text-[#0f172a]">Apply for Brand Evaluation</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </Link>
          </div>

          {/* Right Side - Funnel */}
          <div className="flex-1 w-[576px]">
            {/* Funnel Visualization */}
            <div className="relative">
              {/* Funnel Step 1 */}
              <div className="relative mb-3">
                <div className="flex items-center gap-4 bg-[#1e3a5f] rounded-[12px] p-4 shadow-lg relative z-10">
                  <div className="w-10 h-10 bg-white rounded-[8px] flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="#1B9DD9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 6V10L13 11" stroke="#1B9DD9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-[14px] font-semibold text-white leading-[20px]">7-Point Vetting Process</p>
                  </div>
                </div>
                {/* Progress bar and badge integrated */}
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                  <div className="bg-[#4a9fd8] rounded-[12px] px-4 py-3 shadow-xl">
                    <div className="text-center">
                      <p className="text-[10px] text-white/80 font-normal">Leads In</p>
                      <p className="text-[20px] font-bold text-white">100%</p>
                    </div>
                  </div>
                </div>
                {/* Connecting bar */}
                <div className="absolute left-0 -bottom-3 w-full h-6 flex items-center">
                  <div className="w-[85%] h-3 bg-gradient-to-r from-[#1B9DD9] to-[#063482] rounded-full"></div>
                </div>
              </div>

              {/* Funnel Step 2 */}
              <div className="relative mb-3 ml-12">
                <div className="flex items-center gap-4 bg-[#1e3a5f] rounded-[12px] p-4 shadow-lg relative z-10">
                  <div className="w-10 h-10 bg-white rounded-[8px] flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 10L8.5 12.5L14 7" stroke="#1B9DD9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="10" cy="10" r="8" stroke="#1B9DD9" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-[14px] font-semibold text-white leading-[20px]">Only 5% Accepted</p>
                  </div>
                </div>
                {/* Progress bar and badge integrated */}
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                  <div className="bg-[#4a9fd8] rounded-[12px] px-4 py-3 shadow-xl">
                    <div className="text-center">
                      <p className="text-[10px] text-white/80 font-normal">Qualified</p>
                      <p className="text-[20px] font-bold text-white">~25%</p>
                    </div>
                  </div>
                </div>
                {/* Connecting bar */}
                <div className="absolute left-0 -bottom-3 w-full h-6 flex items-center">
                  <div className="w-[70%] h-3 bg-gradient-to-r from-[#1B9DD9] to-[#063482] rounded-full"></div>
                </div>
              </div>

              {/* Funnel Step 3 */}
              <div className="relative ml-24">
                <div className="flex items-center gap-4 bg-[#1e3a5f] rounded-[12px] p-4 shadow-lg relative z-10">
                  <div className="w-10 h-10 bg-white rounded-[8px] flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 17L7 9L11 13L17 3" stroke="#1B9DD9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-[14px] font-semibold text-white leading-[20px]">ROI 400%+ Tracked</p>
                  </div>
                </div>
                {/* Progress bar and badge integrated */}
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                  <div className="bg-[#4a9fd8] rounded-[12px] px-4 py-3 shadow-xl">
                    <div className="text-center">
                      <p className="text-[10px] text-white/80 font-normal">Accepted</p>
                      <p className="text-[20px] font-bold text-white">~5%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Criteria Cards - Bottom Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {criteriaData.map((item) => (
            <CriteriaCard key={item.id} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectionCriteria;

