const HeroBadge = () => {
  return (
    <div className="inline-flex items-center gap-4 px-3 h-[26px] bg-[#EFF6FF] rounded-full border border-[#DBEAFE]">
      <span className="w-2 h-2 bg-[#063482] rounded-full relative">
        {/* Subtle pulse effect */}
        <span className="absolute inset-0 w-2 h-2 bg-[#063482] rounded-full opacity-[0.002]"></span>
      </span>
      <span className="text-[12px] leading-[16px] tracking-[0.3px] font-normal text-[#486581]">CRJR Ventures</span>
    </div>
  );
};

export default HeroBadge;

