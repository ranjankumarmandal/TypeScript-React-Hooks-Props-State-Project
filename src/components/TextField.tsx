import React, { useState } from 'react';

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  id: number;
  name: string;
  add?: string;
  salary?: number;
  isValid: boolean;
  fn: (bob: string) => string;
  person: Person;
}

const TextField = (props: Props) => {
  const [count, setCount] = useState(''); // type inference automatically - this typing is best for state declaration in react
  const [num, setNum] = useState<number | undefined | null>(0);

  return (
    <>
      <input type='text' onChange={(e) => setCount(e.target.value)} />
      <p>{count}</p>
    </>
  );
};

export default TextField;
