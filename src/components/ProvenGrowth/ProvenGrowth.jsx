const metrics = [
  {
    id: 1,
    label: 'Avg. ROI',
    value: '450%',
    color: '#4ADE80',
    progress: 90,
  },
  {
    id: 2,
    label: 'Market Share Gain',
    value: '+28%',
    color: '#669FFF',
    progress: 70,
  },
  {
    id: 3,
    label: 'Ad Efficiency',
    value: 'High',
    color: '#C084FC',
    progress: 85,
  },
];

const GrowthChart = () => (
  <div
    className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] bg-white rounded-[14px] md:rounded-[16px] border border-[#f3f4f6] p-5 md:p-6 lg:p-8"
    style={{ boxShadow: '0px 8px 10px 0px rgba(0, 0, 0, 0.1), 0px 20px 25px 0px rgba(0, 0, 0, 0.1)' }}
  >
    {/* Chart title */}
    <div className="absolute top-5 md:top-6 lg:top-8 left-5 md:left-6 lg:left-8 text-[15px] md:text-[17px] lg:text-[18px] font-normal text-[#0a192f]" style={{ fontFamily: 'Inter, sans-serif' }}>
      Portfolio Revenue Growth
    </div>

    {/* Y-axis labels */}
    <div className="absolute left-4 top-20 bottom-16 flex flex-col justify-between text-[12px] text-[#444444]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <span>40</span>
      <span>35</span>
      <span>30</span>
      <span>25</span>
      <span>20</span>
      <span>15</span>
      <span>10</span>
      <span>5</span>
      <span>0</span>
    </div>

    {/* Chart area */}
    <div className="ml-12 mr-8 mt-16 h-[calc(100%-80px)] flex flex-col">
      {/* SVG Chart */}
      <div className="flex-1 relative">
        <svg className="w-full h-full" viewBox="0 0 750 400" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          {/* Horizontal grid lines */}
          {[0, 50, 100, 150, 200, 250, 300, 350, 400].map((y) => (
            <line key={y} x1="0" y1={y} x2="750" y2={y} stroke="#e5e7eb" strokeWidth="1" />
          ))}
          {/* Area fill - Year 1: ~10, Year 2: ~15, Year 3: ~25, Year 4: ~40 */}
          <path
            d="M0,300 L250,250 L500,150 L750,0 L750,400 L0,400 Z"
            fill="url(#chartGradient)"
          />
          {/* Line - smooth curve through data points */}
          <path
            d="M0,300 C150,280 200,260 250,250 C350,230 400,180 500,150 C600,100 650,50 750,0"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Data points */}
          <circle cx="0" cy="300" r="6" fill="#3B82F6" />
          <circle cx="250" cy="250" r="6" fill="#3B82F6" />
          <circle cx="500" cy="150" r="6" fill="#3B82F6" />
          <circle cx="750" cy="0" r="6" fill="#3B82F6" />
        </svg>
      </div>

      {/* X-axis labels */}
      <div className="flex justify-between text-[12px] text-[#444444] pt-3 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
        <span>Year 1</span>
        <span>Year 2</span>
        <span>Year 3</span>
        <span>Year 4</span>
      </div>
    </div>
  </div>
);

const MetricItem = ({ label, value, color, progress }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <p className="text-[14px] text-[#9ca3af]">{label}</p>
      <p className="text-[24px] font-semibold" style={{ color }}>{value}</p>
    </div>
    <div className="w-full h-[8px] bg-[#374151] rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${progress}%`, backgroundColor: color }}
      />
    </div>
  </div>
);

const ProvenGrowth = () => {
  return (
    <section className="w-full bg-[#F8FAFC] py-12 md:py-16 lg:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1216px] mx-auto">
        {/* Centered Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-[26px] md:text-[32px] lg:text-[36px] font-bold text-[#0f172a] leading-[1.2] mb-3 md:mb-4 px-4">
            Proven Growth Trajectory
          </h2>
          <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#475569] leading-[1.6] max-w-2xl mx-auto px-4">
            Visualizing the impact of our WINNING Framework on partner brands.
          </p>
        </div>

        {/* Chart (Left) and Metrics (Right) */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - Chart */}
          <div className="flex-1">
            <GrowthChart />
          </div>

          {/* Right Side - Impact Metrics Card */}
          <div className="w-full lg:w-[384px]">
            <div
              className="rounded-[14px] md:rounded-[16px] p-6 md:p-7 lg:p-8 min-h-[350px] md:min-h-[400px] lg:h-[500px]"
              style={{ background: 'linear-gradient(176.4deg, #0a192f 0%, #2563eb 100%)' }}
            >
              <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-normal text-white mb-5 md:mb-6">Impact Metrics</h3>
              <div className="space-y-4 md:space-y-5">
                {metrics.map((metric) => (
                  <MetricItem key={metric.id} {...metric} />
                ))}
              </div>
              <div className="mt-5 md:mt-6 pt-5 md:pt-6 border-t border-[#374151]">
                <button className="flex items-center gap-2 text-[13px] md:text-[14px] text-white hover:text-gray-300 transition-colors">
                  View detailed case studies
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenGrowth;

