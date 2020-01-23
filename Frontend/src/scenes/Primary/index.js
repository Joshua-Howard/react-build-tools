/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './styles.sass';
import SelectionView from './components/selectionView';

const Primary = () => {
  // Loop through the object and add anything to an array of values
  return (
    <div className="p-2">
      <SelectionView
        name="Hey!"
        description="About Me"
        descriptionTooltip="More Info"
      />
    </div>
  );
};

export default Primary;
