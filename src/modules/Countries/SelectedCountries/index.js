import React from 'react';
import {useSelector} from "react-redux";
import SelectedCountryCell from "./SelectedCountryCell";

const SelectedCountries = () => {
  const {selectedCountries} = useSelector(({countries}) => countries);

  return (
    <div className='bg-white ml-5' style={{minWidth: 250, overflow: 'hidden'}}>
      <div className='p-4' style={{maxHeight: 400, overflowY: 'auto'}}>
        {selectedCountries.length > 0 ? selectedCountries.map((country, index) => <SelectedCountryCell key={index}
                                                                                                       country={country}/>) :
          <div className='d-flex align-items-center justify-content-center'>No Country Selected</div>}
      </div>
    </div>
  );
};

export default SelectedCountries;