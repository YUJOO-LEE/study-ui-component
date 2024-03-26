import { useEffect, useRef } from 'react';

const VanillaWrapper = ({ initiator } : { initiator: (wrapper: HTMLDivElement) => void }) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const isInit = useRef<boolean>(false);

  useEffect(() => {
    if (isInit.current || !wrapper.current) return;
    initiator(wrapper.current);
    isInit.current = true;
  }, [initiator]);

  return (
    <div ref={wrapper} />
  );
};

export default VanillaWrapper;