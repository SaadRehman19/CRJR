import person1 from '../../assets/trusted-person-1.png';
import person2 from '../../assets/trusted-person-2.png';
import person3 from '../../assets/trusted-person-3.png';

const TrustedByCard = () => {
  return (
    <div className="absolute bottom-[50px] left-[50px] bg-white rounded-[12px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)] h-[72.74px] w-[264.51px] flex items-center px-[18.74px] gap-[13px] z-10">
      {/* Avatar Stack - person images */}
      <div className="flex -space-x-2 flex-shrink-0">
        <div className="w-[35.268px] h-[35.268px] rounded-full border-[2.204px] border-white overflow-hidden">
          <img src={person1} alt="Person 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-[35.268px] h-[35.268px] rounded-full border-[2.204px] border-white overflow-hidden">
          <img src={person2} alt="Person 2" className="w-full h-full object-cover" />
        </div>
        <div className="w-[35.268px] h-[35.268px] rounded-full border-[2.204px] border-white overflow-hidden">
          <img src={person3} alt="Person 3" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[13.225px] leading-[17.634px] text-[#475569] font-normal whitespace-nowrap">Trusted by top</p>
        <p className="text-[13.225px] leading-[17.634px] text-[#475569] font-normal whitespace-nowrap">brands</p>
      </div>
    </div>
  );
};

export default TrustedByCard;

