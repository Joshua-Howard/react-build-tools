import React from 'react';
import './codeView.sass';

const CodeView = props => {
  const { text, tooltip } = props;
  return (
    <code className="codeView">
      {text}
      <span className="codeTooltip">{tooltip}</span>
    </code>
  );
};

export default CodeView;
