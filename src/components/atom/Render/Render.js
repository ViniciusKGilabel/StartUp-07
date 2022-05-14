import React from 'react';

const RenderIf = ({ condition, children }) => {
  return <>{condition && children}</>;
};

RenderIf.defaultProps = {
  condition: false,
};

export default RenderIf;