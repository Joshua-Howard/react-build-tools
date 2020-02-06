import React from 'react';
import Tooltip from './tooltip';

const CodeView = props => {
  const { text, tooltip } = props;
  return (
    <Tooltip placement="top" tooltip={tooltip}>
      {` ${text}`}
    </Tooltip>
  );
};

export default CodeView;
