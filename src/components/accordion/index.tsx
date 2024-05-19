import cx from '@/components/accordion/cx';
import { ReactAccordion1 } from '@/components/accordion/ReactAccordion1';
import { ReactAccordion2 } from '@/components/accordion/ReactAccordion2';

const Accordions = () => {
  return (
    <div className={cx('accordions')}>
      <h2>아코디언</h2>
      <ReactAccordion1 />
      <ReactAccordion2 />
    </div>
  );
};

export default Accordions;