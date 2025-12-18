const ArrowRightIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M13 5L20 12L13 19"
      stroke="#063482"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 12H19"
      stroke="#063482"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PartnershipOpportunities = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 lg:px-20">
      <div className="max-w-[1216px] mx-auto">
        <div
          className="rounded-[24px] px-6 md:px-16 py-10 md:py-14 text-center text-white"
          style={{
            background:
              'linear-gradient(90deg, rgba(6, 52, 130, 1) 0%, rgba(27, 157, 217, 1) 100%)',
            boxShadow: '0px 24px 60px rgba(15, 23, 42, 0.45)',
          }}
        >
          <h2 className="text-[24px] md:text-[28px] lg:text-[30px] font-bold leading-[1.2] mb-3">
            Partnership Opportunities
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Looking for strategic partnerships, investment opportunities, or collaborative ventures?
            Let&apos;s explore how we can create value together.
          </p>

          <button
            type="button"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#063482] font-semibold text-sm md:text-base shadow-[0_14px_35px_rgba(15,23,42,0.35)] hover:bg-slate-50 transition-colors"
          >
            <span>Explore Partnerships</span>
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnershipOpportunities;

