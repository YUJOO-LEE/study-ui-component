import cx from '@/components/accordion/cx';
import { ReactComponent } from '@/components/accordion/ReactComponent';

const Accordions = () => {
  return (
    <div className={cx('accordions')}>
      <h2>아코디언</h2>
      <ReactComponent />
    </div>
  );
};

export default Accordions;