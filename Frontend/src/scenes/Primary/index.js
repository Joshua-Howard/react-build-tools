/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './styles.sass';

const Primary = () => {
  // Loop through the object and add anything to an array of values
  return (
    <div className="p-2">
      <div>
        <label>
          <input
            id="check1"
            type="checkbox"
            value=""
            onClick={value => console.log(value)}
          />
          Default checkbox
        </label>
      </div>
    </div>
  );
};

export default Primary;
