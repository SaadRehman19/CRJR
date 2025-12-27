import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact-form') {
      // Small delay to ensure the page has fully rendered
      setTimeout(() => {
        const element = document.getElementById('contact-form');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [location]);

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

