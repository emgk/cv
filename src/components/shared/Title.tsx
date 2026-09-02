import React from 'react';

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="pbs-5 font-bold text-3xl text-cv-heading leading-tight">
      {children}
    </h1>
  );
};

export default Title;
