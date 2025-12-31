import heartIcon from '../../assets/heart.svg';
import pawIcon from '../../assets/paw.svg';
import retailIcon from '../../assets/retail.svg';
import directConsumerIcon from '../../assets/direct_consumer.svg';
import { motion } from 'framer-motion';

const capabilities = [
  {
    id: 1,
    title: 'Amazon Marketplace Growth',
    description:
      "Proven strategies for scaling brands on the world's largest marketplace.",
  },
  {
    id: 2,
    title: 'Consumer Product Development',
    description:
      'From concept to market-ready products that resonate with consumers.',
  },
  {
    id: 3,
    title: 'Brand Building & Positioning',
    description:
      'Creating memorable brands that stand out in competitive markets.',
  },
  {
    id: 4,
    title: 'Logistics & Fulfillment',
    description:
      'Streamlined operations that scale efficiently with growth.',
  },
];

const industries = [
  { id: 1, label: 'Health & Nutrition', progress: 92, icon: heartIcon },
  { id: 2, label: 'Pet Care', progress: 88, icon: pawIcon },
  { id: 3, label: 'Retail Expansion', progress: 82, icon: retailIcon },
  { id: 4, label: 'Direct-to-Consumer', progress: 90, icon: directConsumerIcon },
];

const CheckBullet = () => (
	<div className="flex-shrink-0 mt-1">
	  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E0F2FE]">
	    <svg
	      className="h-3.5 w-3.5"
	      viewBox="0 0 16 16"
	      fill="none"
	      aria-hidden="true"
	    >
	      <path
	        d="M4 8.5L6.5 11L12 5.5"
	        stroke="#0EA5E9"
	        strokeWidth="1.8"
	        strokeLinecap="round"
	        strokeLinejoin="round"
	      />
	    </svg>
	  </span>
	</div>
);

const CapabilityItem = ({ title, description }) => (
  <div className="flex gap-3">
    <CheckBullet />
    <div>
      <p className="text-sm md:text-base font-semibold text-[#0F172A]">{title}</p>
      <p className="mt-1 text-sm text-[#64748B] leading-relaxed">{description}</p>
    </div>
  </div>
);

const IndustryRow = ({ label, progress, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white/8 rounded-[14px] px-4 py-3 flex flex-col gap-2"
  >
    <div className="flex items-center justify-between text-white">
      <span className="text-[18px] leading-[28px] font-semibold tracking-normal">{label}</span>
      {icon && (
        <motion.img
          initial={{ rotate: -180, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          src={icon}
          alt=""
          className="w-5 h-5"
        />
      )}
    </div>
    <div className="w-full h-1.5 rounded-full bg-slate-600 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${progress}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
        className="h-full rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8]"
      />
    </div>
  </motion.div>
);

const OperatingFromRealResults = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 lg:px-20">
      <div className="max-w-[1216px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side - Copy & Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex-1 max-w-xl"
          >
            <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#0F172A] leading-[1.2] mb-4">
              Operating From Real Results
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-[#475569] leading-relaxed mb-8">
              Everything I recommend comes from success across multiple categories. These
              aren&apos;t hypothetical playbooks — they&apos;re brands I&apos;ve built, funded, and
              scaled.
            </p>

            <div className="space-y-5">
              {capabilities.map((item) => (
                <CapabilityItem
                  key={item.id}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Side - Expertise Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 w-full flex justify-center lg:justify-end"
          >
            <div
              className="w-full max-w-md bg-[#102A43] rounded-[24px] px-6 py-6 md:px-8 md:py-8 shadow-2xl"
              style={{ boxShadow: '0px 24px 60px rgba(15, 23, 42, 0.65)' }}
            >
              <h3 className="text-white text-[20px] leading-[20px] font-bold tracking-normal mb-5">
                Expertise Across Industries
              </h3>

              <div className="space-y-3">
                {industries.map((industry, index) => (
                  <IndustryRow
                    key={industry.id}
                    label={industry.label}
                    progress={industry.progress}
                    icon={industry.icon}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OperatingFromRealResults;

