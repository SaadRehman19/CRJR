const steps = [
  {
    id: 1,
    number: '1',
    title: 'Brand Diagnostic & Opportunity Mapping',
    description:
      "We evaluate your brand's infrastructure, product readiness, supply chain, market positioning, and scalability.",
    goal: 'Goal: Validate if the brand is truly "venture-ready"',
  },
  {
    id: 2,
    number: '2',
    title: 'Strategic Buildout & Channel Expansion',
    description:
      'We apply our proprietary WINNING Strategy, combining US-market insights, operational setup, and advertising architecture.',
    goal: 'Goal: Build the exact roadmap for predictable growth',
  },
  {
    id: 3,
    number: '3',
    title: 'Execution, Optimization & Scale',
    description:
      'Once aligned, our team activates execution across Amazon, Walmart, TikTok Shop, retail partners, and DTC.',
    goal: 'Goal: Drive revenue & position for long-term success',
  },
];

const TargetIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#3B82F6" strokeWidth="2" />
    <circle cx="12" cy="12" r="6" stroke="#3B82F6" strokeWidth="2" />
    <circle cx="12" cy="12" r="2" fill="#3B82F6" />
  </svg>
);

const MapIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <path d="M8 18L3 15V4L8 7M8 18L16 21M8 18V7M16 21L21 18V7L16 10M16 21V10M16 10L8 7" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChartIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <path d="M3 21L9 15L13 19L21 7" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 7H21V12" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StepCard = ({ number, title, description, goal }) => {
  const getIcon = () => {
    switch (number) {
      case '1':
        return <TargetIcon />;
      case '2':
        return <MapIcon />;
      case '3':
        return <ChartIcon />;
      default:
        return <TargetIcon />;
    }
  };

  return (
    <div
      className="bg-white rounded-[14px] md:rounded-[16px] p-5 md:p-6 border border-[#F1F5F9] flex flex-col h-full"
      style={{ boxShadow: '0px 10px 15px 0px rgba(0, 0, 0, 0.1), 0px 4px 6px 0px rgba(0, 0, 0, 0.1)' }}
    >
      {/* Step Number Badge */}
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-[14px] md:rounded-[16px] bg-[#102A43] flex items-center justify-center mb-4 md:mb-5">
        <span className="text-white text-xl md:text-2xl font-bold">{number}</span>
      </div>

      {/* Title */}
      <h3 className="text-[18px] md:text-[20px] font-bold text-[#0f172a] leading-[1.3] mb-3 md:mb-4">{title}</h3>

      {/* Description */}
      <p className="text-[13px] md:text-[14px] text-[#475569] leading-[1.5] mb-4 md:mb-5 flex-grow">{description}</p>

      {/* Goal Box */}
      <div className="bg-[#eff6ff] rounded-[8px] px-3 md:px-4 py-2.5 md:py-3 border border-[#bfdbfe]">
        <div className="flex items-start gap-2">
          <div className="mt-0.5">
            {getIcon()}
          </div>
          <p className="text-[13px] md:text-[14px] text-[#334e68] leading-[1.5]">{goal}</p>
        </div>
      </div>
    </div>
  );
};

const HowWeWork = () => {
  return (
    <section
      className="w-full py-12 md:py-16 lg:py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(120deg, #f0f9ff 0%, #f8fcff 20%, #ffffff 80%)'
      }}
    >
      {/* Decorative gradient orbs - less visible on mobile, positioned on right */}
      <div className="absolute top-0 right-[-200px] md:right-[20px] w-[400px] md:w-[550px] h-[600px] md:h-[500px] rounded-full bg-[#aee3ff] opacity-15 md:opacity-60 blur-3xl"></div>

      <div className="max-w-[1216px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-2 h-2 bg-[#063482] rounded-full"></div>
            <span className="text-[13px] md:text-[14px] font-medium text-[#063482] tracking-[0.7px]">
              How We Work
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[26px] md:text-[32px] lg:text-[36px] font-bold text-[#0f172a] leading-[1.2] mb-4 md:mb-6 px-4">
            3-Step Success Process Flow
          </h2>

          {/* Subtitle */}
          <p className="text-[15px] md:text-[16px] lg:text-[18px] text-[#475569] leading-[1.6] max-w-2xl mx-auto px-4">
            Simple. Strategic. A proprietary framework designed for predictable growth.
          </p>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <StepCard
              key={step.id}
              number={step.number}
              title={step.title}
              description={step.description}
              goal={step.goal}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;

