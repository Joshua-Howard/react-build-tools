import React from 'react';
import './styles.sass';
import CodeView from './Components/codeView';

const Secondary = props => {
  // Loop through the object and add anything to an array of values
  const { selections } = props;
  const instructionsArray = [];

  Object.keys(selections).forEach(screen => {
    Object.keys(selections[screen]).forEach(option => {
      if (selections[screen][option].selected) {
        instructionsArray.push(selections[screen][option].instructions);
      }
    });
  });

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
      {instructionsExist && (
        <CodeView
          text="npm install"
          tooltip={
            "Saves the package and it's dependencies to package.json and the node_modules folder"
          }
        />
      )}
      {codeViewComponents}
    </div>
  );
};

export default Secondary;
