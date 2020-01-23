/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './styles.sass';
import SelectionView from './components/selectionView';

const Primary = props => {
  // Loop through the object and add anything to an array of values
  const { selectionsArray, selectOption, selectNav, currentScreen } = props;

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

  const continueButton = () => {
    selectNav('next');
  };

  return (
    <div className="p-2 h-100 d-flex flex-column">
      {selectionViewComponents}
      <div className="flex-fill" />
      <div className="align-self-center">
        {currentScreen !== 'launch!' && (
          <button
            onClick={continueButton}
            type="button"
            className="continueButton"
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default Primary;
