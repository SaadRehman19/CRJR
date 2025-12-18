import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { WhoIAm } from '../components/WhoIAm';
import { WhatIDo } from '../components/WhatIDo';
import { HowWeWork } from '../components/HowWeWork';
import { ProvenGrowth } from '../components/ProvenGrowth';
import { ReadyToScale } from '../components/ReadyToScale';
import { SelectionCriteria } from '../components/SelectionCriteria';

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <WhoIAm />
      <WhatIDo />
      <SelectionCriteria/>
      <HowWeWork />
      <ProvenGrowth />
      <ReadyToScale />
    </>
  );
};

export default LandingPage;

