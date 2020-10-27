import React from 'react';
import CountriesList from "./CountriesList";
import SelectedCountries from "./SelectedCountries";

const Countries = () => {
  return (
    <div className='d-flex justify-content-center bg-primary p-5'>
      <CountriesList/>
      <SelectedCountries/>
    </div>
  );
};

export default Countries;