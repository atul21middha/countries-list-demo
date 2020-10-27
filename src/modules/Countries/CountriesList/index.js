import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCountriesList} from "../../../redux/actions/Countries";
import CountryCell from "./CountryCell";

const CountriesList = () => {
  const dispatch = useDispatch();
  const {countriesList} = useSelector(({countries}) => countries);

  useEffect(() => {
    dispatch(getCountriesList())
  }, [dispatch, countriesList]);

  return (
    <div className='bg-white' style={{minWidth: 250, overflow: 'hidden'}}>
      <div className='p-4' style={{maxHeight: 400, overflowY: 'auto'}}>
      {countriesList.length > 0 && countriesList.map((country, index) => <CountryCell key={index} country={country}/>)}
      </div>
    </div>
  );
};

export default CountriesList;