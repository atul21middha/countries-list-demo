import {DELETE_COUNTRY, GET_COUNTRIES_LIST, REMOVE_SELECTED_CITY, SET_SELECTED_DATA} from "../ActionTypes";

const INIT_STATE = {
  countriesList: [],
  selectedCountries: [],
};

 const Countries = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_COUNTRIES_LIST: {
      return {...state, countriesList: action.payload};
    }
    case DELETE_COUNTRY: {
      return {...state, countriesList: state.countriesList};
    }
    case SET_SELECTED_DATA: {
      return {
        ...state,
        selectedCountries: action.payload
      };
    }
    case REMOVE_SELECTED_CITY: {

      return {...state, selectedCountries: action.payload};
    }
    default:
      return state;
  }
};

 export default Countries;