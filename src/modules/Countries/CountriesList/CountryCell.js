import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {onSetSelectedData} from "../../../redux/actions/Countries";

const CityCell = ({city, country}) => {
  const dispatch = useDispatch();
  const {selectedCountries} = useSelector(({countries}) => countries);
  let selectedCountry = selectedCountries.find(item => item.id === country.id);
  const isChecked = selectedCountry && selectedCountry.cities.some(item => item.id === city.id);

  const onUpdateSelectStatus = (e) => {
    dispatch(onSetSelectedData(e.target.checked, country, city))
  };

  return (
    <div className='d-flex align-items-center mt-1'>
      <input type="checkbox" checked={isChecked} onChange={onUpdateSelectStatus}/>
      <div className='ml-2'>{city.name}</div>
    </div>
  )
};


const CountryCell = ({country}) => {
  const {name, cities} = country;
  return (
    <div>
      <div className='font-weight-bold mt-2'>{name}</div>
      {cities.map((city, index) => <CityCell key={index} country={country} city={city}/>)}
    </div>
  );
};

export default CountryCell;