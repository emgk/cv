import React from 'react';

const Title = ({ children }: { children: React.ReactNode }) => {
  return <div className="pt-5 left-2 font-bold text-3xl">{children}</div>;
};

export default Title;
