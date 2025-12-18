import { WorkWithMeHero } from '../components/WorkWithMeHero';
import { DocumentedSuccess } from '../components/DocumentedSuccess';
import { WhoIAm } from '../components/WhoIAm';
import { StrategiesProven } from '../components/StrategiesProven';
import { HowWeCanWorkTogether } from '../components/HowWeCanWorkTogether';
import { OperatingFromRealResults } from '../components/OperatingFromRealResults';
import { PartnershipOpportunities } from '../components/PartnershipOpportunities';
import { ContactSection } from '../components/ContactSection';
import { ReadyToScale } from '../components/ReadyToScale';

const WorkWithMePage = () => {
  return (
    <>
      <WorkWithMeHero />
      <StrategiesProven />
      <OperatingFromRealResults />

		      <DocumentedSuccess />
		      <WhoIAm />
	      <HowWeCanWorkTogether />
	      <PartnershipOpportunities />
      <ContactSection />
      <ReadyToScale />
    </>
  );
};

export default WorkWithMePage;

