import { motion } from 'framer-motion';
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
  const companyCards = [
    MachineAgencyCard,
    CRJRPartnersCard,
    MCMNutritionCard,
    AunerPetCard,
    CRJRVenturesCard
  ];

  return (
    <>
      <CompaniesHero />

      {/* My Companies Section */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1216px] mx-auto">
          {/* Section Header - Centered */}
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[36px] font-bold text-[#0f172a] leading-[40px] mb-6">My Companies</h2>
            <p className="text-[18px] text-[#475569] leading-[30px] max-w-2xl mx-auto">
              Five distinct companies, each built on proven systems and designed for category
              leadership in their respective markets.
            </p>
          </motion.div>

          {/* Company Cards */}
          <div className="space-y-8">
            {companyCards.map((CardComponent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CardComponent />
              </motion.div>
            ))}
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

