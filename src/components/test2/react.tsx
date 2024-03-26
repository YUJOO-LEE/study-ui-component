import { useState } from 'react';

const Test2React = () => {
  const [show, toggle] = useState(false);

  return (
    <div>
      <p>테스트2 react</p>
      {!show ? 'On' : 'Off'} <button onClick={() => toggle((prev) => !prev)}>
        Toggle
      </button>
    </div>
  );
};

export default Test2React;