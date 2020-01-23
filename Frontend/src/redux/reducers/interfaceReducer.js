import * as types from '../actions/actionTypes';
import instructions from '../constants/instructions';

const selectionOptions = {
  // Blanks for start
  start: { start: false },
  'launch!': { 'launch!': false },
  express: { nodemon: false },
  react: {
    webpackdev: false,
    bootstrap: false,
    sass: false,
    redux: false,
    reduxdev: false
  },
  linting: {
    eslint: false,
    eslintairbnb: false
    // prettier: false
  }
};

// Add a state to store "currentScreen" to keep track of which screen we are on.
// So that we can use it to show the options on the primary screen.

// Create a constants file to store all of the strings we want to show on the screen
// We can create another object to map selectionOptions to strings

// Every time we update the state after clicking, in state: We loop through all of the keys and values in the object.
// Then we do the same thing where we come that to values in an object that references a constants file.

// Create an object that has strings for each option. It can be called constants.

const screenOrder = ['start', 'express', 'react', 'linting', 'launch!'];

const initialState = {
  selections: selectionOptions,
  selectionsArray: [instructions.start],
  instructionsArray: [],
  currentScreen: 'start', // start, express, react, linting, launch!
  placeholder: 10
};

const interfaceReducer = (state = initialState, action) => {
  let payload;
  let placeholder;
  const selectionsArray = [];
  let instructionsArray;
  let currentScreen;

  // console.log('actionnnn', action);

  switch (action.type) {
    case types.INCREMENT_PLACEHOLDER:
      placeholder = state.placeholder + 1;
      console.log(placeholder, 'Placeholder State', action.payload, 'Payload');

      return {
        ...state,
        placeholder
      };

    case types.SELECT_NAV:
      // Payload is current screen or 'next' to go to the next screen
      payload = action.payload.toLowerCase();

      currentScreen = payload;

      // Next can be used to continue onto the next screen in the screen order array
      if (payload === 'next') {
        const currIndex = screenOrder.indexOf(state.currentScreen);

        // If the the next scree
        const nextScreen = screenOrder[currIndex + 1];

        currentScreen = nextScreen;
      }

      // Core Code Below
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
      payload = action.payload.toLowerCase();

      instructionsArray = state.instructionsArray.slice();

      if (state.selections[state.currentScreen][payload] === false) {
        // Push the object stored in instructions into the instructions array
        instructionsArray.push(instructions[payload]);
      }

      // console.log(instructionsArray);

      return {
        ...state,
        instructionsArray
      };

    default:
      return state;
  }
};

export default interfaceReducer;
