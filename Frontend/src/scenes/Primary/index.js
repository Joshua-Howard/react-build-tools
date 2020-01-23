/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './styles.sass';
import SelectionView from './components/selectionView';

const Primary = props => {
  // Loop through the object and add anything to an array of values
  const { selectionsArray, selectOption } = props;

  const selectionViewComponents = selectionsArray.map(selections => (
    <SelectionView
      key={selections.key}
      keyName={selections.key}
      name={selections.name}
      description={selections.description}
      descriptionTooltip={selections.descriptionTooltip}
      selectOption={selectOption}
    />
  ));

  return <div className="p-2">{selectionViewComponents}</div>;
};

export default Primary;
