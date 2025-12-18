const statsData = [
  {
    value: '$40M+',
    lines: ['Revenue Driven for Brands', 'Across Amazon, Walmart &', 'TikTok'],
    hasDivider: false,
  },
  {
    value: '25+',
    lines: ['Brands Scaled Using Our', 'Proven WINNING Framework'],
    hasDivider: true,
  },
  {
    value: '3x – 10x',
    lines: ['Avg. Growth Brands', 'Experience in Year One'],
    hasDivider: true,
  },
  {
    value: '98%',
    lines: ['Client Retention Rate Among', 'Growth-Ready Brands'],
    hasDivider: true,
  },
];

const StatItem = ({ value, lines, hasDivider }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-center text-center px-4 py-6 md:py-0 ${
        hasDivider ? 'border-t md:border-t-0 md:border-l border-white/10' : ''
      }`}
    >
      {/* Stat Value */}
      <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
        {value}
      </h3>
      {/* Stat Description */}
      <div className="space-y-0">
        {lines.map((line, index) => (
          <p
            key={index}
            className="text-sm md:text-base text-slate-300 leading-relaxed"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="relative w-full bg-[#102A43] py-16 md:py-20 overflow-hidden">
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative max-w-8xl mx-auto px-6 lg:px-20">
        {/* Stats Grid */}
        <div className="flex flex-col md:flex-row items-stretch justify-between">
          {statsData.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              lines={stat.lines}
              hasDivider={stat.hasDivider}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

