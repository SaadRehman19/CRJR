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
      className="bg-white rounded-[16px] p-6 border border-[#F1F5F9] flex flex-col h-full"
      style={{ boxShadow: '0px 10px 15px 0px rgba(0, 0, 0, 0.1), 0px 4px 6px 0px rgba(0, 0, 0, 0.1)' }}
    >
      {/* Step Number Badge */}
      <div className="w-16 h-16 rounded-[16px] bg-[#102A43] flex items-center justify-center mb-5">
        <span className="text-white text-2xl font-bold">{number}</span>
      </div>

      {/* Title */}
      <h3 className="text-[20px] font-bold text-[#0f172a] leading-[28px] mb-4">{title}</h3>

      {/* Description */}
      <p className="text-[14px] text-[#475569] leading-[20px] mb-5 flex-grow">{description}</p>

      {/* Goal Box */}
      <div className="bg-[#eff6ff] rounded-[8px] px-4 py-3 border border-[#bfdbfe]">
        <div className="flex items-start gap-2">
          <div className="mt-0.5">
            {getIcon()}
          </div>
          <p className="text-[14px] text-[#334e68] leading-[20px]">{goal}</p>
        </div>
      </div>
    </div>
  );
};

const HowWeWork = () => {
  return (
    <section
      className="w-full py-24 px-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #e0f2fe 0%, #f0f9ff 50%, #ffffff 100%)'
      }}
    >
      {/* Decorative gradient orbs */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#bae6fd] opacity-30 blur-3xl"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[#dbeafe] opacity-40 blur-3xl"></div>

      <div className="max-w-[1216px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#063482]"></div>
            <span className="text-[14px] font-normal text-[#063482] tracking-[0.7px]">
              How We Work
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[36px] font-bold text-[#0f172a] leading-[40px] mb-6">
            3-Step Success Process Flow
          </h2>

          {/* Subtitle */}
          <p className="text-[18px] text-[#475569] leading-[30px] max-w-2xl mx-auto">
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

