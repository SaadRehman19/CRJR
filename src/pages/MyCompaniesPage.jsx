import {
  CompaniesHero,
  MachineAgencyCard,
  CRJRPartnersCard,
  MCMNutritionCard,
  AunerPetCard,
  CRJRVenturesCard,
  CRJREcosystem,
  ReadyToScaleCTA
} from '../components/companies';

const MyCompaniesPage = () => {
  return (
    <>
      <CompaniesHero />

      {/* My Companies Section */}
      <section className="w-full py-24 px-20 bg-white">
        <div className="max-w-[1216px] mx-auto">
          {/* Section Header - Centered */}
          <div className="mb-12 text-center">
            <h2 className="text-[36px] font-bold text-[#0f172a] leading-[40px] mb-6">My Companies</h2>
            <p className="text-[18px] text-[#475569] leading-[30px] max-w-2xl mx-auto">
              Five distinct companies, each built on proven systems and designed for category
              leadership in their respective markets.
            </p>
          </div>

          {/* Company Cards */}
          <div className="space-y-8">
            <MachineAgencyCard />
            <CRJRPartnersCard />
            <MCMNutritionCard />
            <AunerPetCard />
            <CRJRVenturesCard />
          </div>
        </div>
      </section>

      {/* CRJR Ventures Ecosystem Section */}
      <CRJREcosystem />

      {/* Ready to Scale CTA Section */}
      <ReadyToScaleCTA />
    </>
  );
};

export default MyCompaniesPage;

