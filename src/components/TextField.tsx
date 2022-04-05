import React from 'react';

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
  return (
    <>
      <input />
    </>
  );
};

export default TextField;
