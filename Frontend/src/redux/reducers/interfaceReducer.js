import * as types from '../actions/actionTypes';
import instructions from '../constants/instructions';

const selectionOptions = {
  express: { nodemon: false },
  react: {
    webpackDev: false,
    bootstrap: false,
    sass: false,
    redux: false,
    reduxDev: false
  },
  linting: { eslint: false, prettier: false }
};

// Add a state to store "currentScreen" to keep track of which screen we are on.
// So that we can use it to show the options on the primary screen.

// Create a constants file to store all of the strings we want to show on the screen
// We can create another object to map selectionOptions to strings

// Every time we update the state after clicking, in state: We loop through all of the keys and values in the object.
// Then we do the same thing where we come that to values in an object that references a constants file.

// Create an object that has strings for each option. It can be called constants.

const initialState = {
  selections: selectionOptions,
  selectionsArray: [],
  instructionsArray: [],
  currentScreen: 'start', // start, express, react, linting, launch
  placeholder: 10
};

const interfaceReducer = (state = initialState, action) => {
  let placeholder;
  const selectionsArray = [];
  let instructionsArray;
  let currentScreen;

  switch (action.type) {
    case types.INCREMENT_PLACEHOLDER:
      placeholder = state.placeholder + 1;
      console.log(placeholder, 'Placeholder State', action.payload, 'Payload');

      return {
        ...state,
        placeholder
      };

    case types.SELECT_NAV:
      currentScreen = action.payload.toLowerCase();

      // Get all detail keys for the currently selected screen
      Object.keys(selectionOptions[currentScreen]).forEach(option =>
        // Push the data into the selection options array
        selectionsArray.push(instructions[option])
      );

      return {
        ...state,
        currentScreen,
        selectionsArray
      };

    case types.SELECT_OPTION:
      // Need to update instructions array by pushing the data for the selected option into the array
      // Need to do an if statement to check the prev state so that we can delete things from the array if needed.

      // If the option had not been selected before the action was received, then push it into the instructions array
      if (state.selections[state.currentScreen][action.payload] === false) {
        instructionsArray = state.instructionsArray.slice();

        // Push the object stored in instructions into the instructions array
        instructionsArray.push(instructions[action.payload]);
      }

      return {
        ...state,
        instructionsArray
      };

    default:
      return state;
  }
};

export default interfaceReducer;
