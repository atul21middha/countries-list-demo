import {DELETE_COUNTRY, GET_COUNTRIES_LIST, REMOVE_SELECTED_CITY, SET_SELECTED_DATA} from "../ActionTypes";

const INIT_STATE = {
  countriesList: [],
  selectedCountries: [],
};

export default (state = INIT_STATE, action) => {
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
      let updatedList = [...state.selectedCountries];
      let country = updatedList.find(item => item.id === action.payload.countryId);
      country.cities = country.cities.filter(item => item.id !== action.payload.cityId);
      if(country.cities.length > 0 ){
        updatedList = updatedList.map(item => item.id === country.id ? country : item);
      } else {
        updatedList = updatedList.filter(item => item.id !== country.id)
      }
      return {...state, selectedCountries: updatedList};
    }
    default:
      return state;
  }
};