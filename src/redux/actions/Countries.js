import {
  GET_COUNTRIES_LIST,
  REMOVE_SELECTED_CITY,
  SET_SELECTED_DATA,
} from "../ActionTypes";
import {countriesData} from "../../database/countriesData";

export const getCountriesList = () => {
  return dispatch => {
  dispatch({type: GET_COUNTRIES_LIST, payload: countriesData})
  }
};

export const onSetSelectedData = (isChecked, country, city) => {
  return (dispatch, getState) => {
    const {selectedCountries} = getState().countries;
    let list = [...selectedCountries];
    let selectedCountry = selectedCountries.find(item => item.id === country.id);
    let countryItem =  selectedCountry ? {id: selectedCountry.id, name: selectedCountry.name, cities: selectedCountry.cities} : null;
    if (isChecked) {
      if (countryItem) {
        countryItem.cities = countryItem.cities.concat(city);
        list = list.map(item => item.id === countryItem.id ? countryItem : item)
      } else{
        countryItem = {id: country.id, name: country.name, cities: [city]};
        list = list.concat(countryItem)
      }
    } else {
      countryItem.cities = countryItem.cities.filter(item => item.id !== city.id);
      if(countryItem.cities.length > 0) {
        list = list.map(item => item.id === countryItem.id ? countryItem : item)
      } else {
        list = list.filter(item => item.id !== countryItem.id);
      }
    }
    dispatch({type: SET_SELECTED_DATA, payload: list})
  }
};

export const onRemoveCityFrmSelected = (countryId, cityId) => {
  return dispatch => {
    dispatch({type: REMOVE_SELECTED_CITY, payload: {countryId, cityId}})
  }
};