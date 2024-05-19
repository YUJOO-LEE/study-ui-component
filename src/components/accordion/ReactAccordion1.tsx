import cx from '@/components/accordion/cx';
import { data } from '@/components/accordion/data';
import { useState } from 'react';

type ItemProps = {
  current: boolean;
  id: string;
  title: string;
  description: string;
  onClick: () => void;
};

const Item = ({ current, id, title, description, onClick }: ItemProps) => {

  return (
    <li className={cx('item', { current })}>
      <div className={cx('tab')} onClick={onClick}>
        {title}
      </div>
      {current && (
        <div className={cx('description')}>
          {description}
        </div>
      )}
    </li>
  );
};

export const ReactAccordion1 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);

  const toggleItem = (id: string) => () => {
    setCurrentId((prev) => prev === id ? null : id);
  };

  return (
    <div>
      <h3>#1. React</h3>
      <ul className={cx('container')}>
        {data.map((item) => (
          <Item
            key={item.id}
            {...item}
            current={currentId === item.id}
            onClick={toggleItem(item.id)}
          />
        ))}
      </ul>
    </div>
  );
};