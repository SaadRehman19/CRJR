import revenueIcon from '../../assets/revenue-icon.svg';

const RevenueCard = () => {
  return (
    <div className="absolute top-[50px] right-[24px] z-20">
      <div className="bg-white/90 backdrop-blur-sm rounded-[13.225px] shadow-[0px_4.408px_6.613px_0px_rgba(0,0,0,0.1),0px_11.021px_16.532px_0px_rgba(0,0,0,0.1)] border border-[#f1f5f9] px-[17.63px] py-[17.63px] flex items-center gap-3 w-[189.548px] h-[85.966px]">
        <div className="w-[35.268px] h-[35.268px] rounded-[8.817px] bg-[#dcfce7] flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-4" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 9L10 1L1 9M3 7V16C3 16.5304 3.21071 17.0391 3.58579 17.4142C3.96086 17.7893 4.46957 18 5 18H15C15.5304 18 16.0391 17.7893 16.4142 17.4142C16.7893 17.0391 17 16.5304 17 16V7" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-[13.225px] leading-[17.634px] text-[#64748b] font-normal">Revenue Growth</p>
          <p className="text-[15.43px] leading-[22.042px] text-[#0f172a] font-semibold">+124% YoY</p>
        </div>
      </div>
    </div>
  );
};

export default RevenueCard;

