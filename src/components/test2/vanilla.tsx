import VanillaWrapper from '@/components/VanillaWrapper';

const initiator = (wrapper: HTMLDivElement) => {
  let state = false;

  const pElement = document.createElement('span');
  pElement.textContent = '꺼짐';
  const buttonElement = document.createElement('button');
  buttonElement.textContent = 'Toggle';
  buttonElement.addEventListener('click', () => {
    state = !state;
    pElement.textContent = state ? '켜짐' : '꺼짐';
  });

  const divElement = document.createElement('div');
  divElement.innerHTML = '<p>테스트2 vanilla</p>';
  divElement.append(pElement, buttonElement);

  wrapper.insertAdjacentElement('beforeend', divElement);
};

const Test2Vanilla = () => {
  return <VanillaWrapper initiator={initiator} />
};

export default Test2Vanilla;