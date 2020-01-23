import React from 'react';
import './styles.sass';
import CodeView from './Components/codeView';

const Secondary = props => {
  // Loop through the object and add anything to an array of values
  const { instructionsArray } = props;

  const codeViewComponents = instructionsArray.map(instruction => (
    <CodeView
      key={instruction.key}
      text={instruction.npmCode}
      tooltip={instruction.npmCodeTooltip}
    />
  ));

  const instructionsExist = instructionsArray.length > 0;

  return (
    <div className="p-2">
      {instructionsExist && <CodeView text="npm install" />}
      {codeViewComponents}
    </div>
  );
};

export default Secondary;
