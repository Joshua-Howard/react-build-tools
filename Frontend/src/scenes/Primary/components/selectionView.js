/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './selectionView.sass';

const SelectionView = props => {
  const {
    keyName,
    name,
    description,
    descriptionTooltip,
    selectOption
  } = props;

  const clickSelect = () => {
    selectOption(keyName);
  };

  return (
    <label className="selectionView">
      <input id="check1" type="checkbox" value="" onClick={clickSelect} />
      <span className="selectionName">{name}</span>
      {' - '}
      {description}
      <span className="selectionTooltip">{descriptionTooltip}</span>
    </label>
  );
};

export default SelectionView;
