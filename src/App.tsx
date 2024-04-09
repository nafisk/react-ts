import { useState } from 'react';

import Heading from './components/Heading';
import Section from './components/Section';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Heading title={'Hello'} />
      <Section title={'Different Title'}>This is my section/</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
    </>
  );
}

export default App;
