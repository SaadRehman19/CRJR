import Button from '../ui/Button';
import avatarImage from '../../assets/who-i-am-main.png';

const StatBar = ({ label, value, progress }) => (
  <div className="space-y-1">
    <div className="flex items-center justify-between text-[11px] md:text-xs text-[#64748B]">
      <span>{label}</span>
      <span className="font-semibold text-[#0F172A]">{value}</span>
    </div>
    <div className="w-full h-1.5 bg-[#E5E7EB] rounded-full overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-[#063482] to-[#0EA5E9]"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);

const ProfileStatsCard = () => (
  <div
    className="bg-white rounded-2xl border border-[#E5E7EB] p-5 md:p-6 w-full"
    style={{ boxShadow: '0px 25px 50px rgba(15, 23, 42, 0.18)' }}
  >
    {/* Header with avatar and status */}
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-[#E5E7EB]">
          <img
            src={avatarImage}
            alt="Cash Riley Jr."
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-[#0F172A]">Cash Riley, Jr.</p>
          <p className="text-xs text-[#94A3B8]">Founder &amp; Operator</p>
        </div>
      </div>
      <span className="px-3 py-1 rounded-full bg-[#10B981] text-white text-[11px] font-medium">
        Available
      </span>
    </div>

    {/* Stats */}
    <div className="space-y-4">
      <StatBar label="Active Companies" value="6+" progress={65} />
      <StatBar label="Client Revenue Generated" value="$40M+" progress={90} />
      <StatBar label="Years of Experience" value="10+" progress={80} />
    </div>
  </div>
);

const WorkWithMeHero = () => {
  return (
    <section
      className="relative w-full pt-[25px] pb-[36px] px-6 lg:px-20 overflow-hidden"
      style={{
        background: 'linear-gradient(120deg, #e0f2fe 0%, #f0f9ff 30%, #ffffff 70%)'
      }}
    >
      {/* Background decoration - decorative orbs */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#bae6fd] opacity-30 blur-3xl -z-10"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[#dbeafe] opacity-40 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Side - Text Content */}
          <div className="flex-1 max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EFF6FF] rounded-full border border-[#BFDBFE]">
              <span className="w-2 h-2 bg-[#063482] rounded-full" />
              <span className="text-sm font-medium text-[#486581]">CRJR Venture Partners</span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block text-[#000000]">Why Work</span>
              <span className="block mt-2">
                <span className="bg-gradient-to-r from-[#063482] to-[#0EA5E9] bg-clip-text text-transparent">
                  With Me?
                </span>
                <span
                  className="block h-[6px] mt-2 rounded-full bg-gradient-to-r from-[#2157b4] to-[#0EA5E9]"
                  style={{ width: '30%' }}
                />
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base lg:text-lg text-[#475569] leading-relaxed">
              Everything I do is built on documented success, not theory. I don&apos;t just consult —
              I build, own, and operate the companies behind the results.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <Button variant="primary">
                Work with me
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
            </div>
          </div>

          {/* Right Side - Profile Stats Card */}
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-md">
              <ProfileStatsCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithMeHero;
