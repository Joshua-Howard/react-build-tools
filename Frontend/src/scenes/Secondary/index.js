import React from 'react';
import './styles.sass';
import CodeView from './Components/codeView';

const Secondary = () => {
  // Loop through the object and add anything to an array of values
  return (
    <div className="p-2">
      <CodeView text="codeeee" tooltip="infoooo" />
    </div>
  );
};

export default Secondary;
